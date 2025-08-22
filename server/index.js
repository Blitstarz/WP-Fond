const express = require('express');
const Parser = require('rss-parser');
const NodeCache = require('node-cache');
const cors = require('cors');
const multer = require('multer');
const FormData = require('form-data');
const { Readable } = require('stream');
const axios = require('axios');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = '8378865849:AAHLJXZkWYSiROhpf_pw7aZngh6MAtzT-rA';
const TELEGRAM_CHAT_ID = '1090336916';

const parser = new Parser({
    headers: { 'User-Agent': 'WP-Fond-RSS/1.0 (+https://wp-fond.pl)' }
});

const FEEDS = [
    'https://pap-mediaroom.pl/rss.xml',
    'https://www.funduszeeuropejskie.gov.pl/rss/wiadomosci',
    'https://www.funduszeeuropejskie.gov.pl/rss/nabory-wnioskow',
    'https://www.bgk.pl/rss/aktualnosci',
    'https://www.gov.pl/web/rozwoj-technologia/rss/aktualnosci',
    'https://www.parp.gov.pl/rss/aktualnosci',
    'https://wyborcza.pl/pub/rss/najnowsze.xml',
    'https://notesfrompoland.com/feed',
    'https://rp.pl/rss_main',
    'https://euronews.com/tag/poland?format=rss',
    'https://poland-today.pl/feed'
];

const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

const normalize = (item) => ({
    title: item.title || '',
    link: item.link || item.guid || '',
    date: item.isoDate || item.pubDate || null,
    excerpt: (item.contentSnippet || item.summary || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 220),
    source: item?.creator || item?.dc_creator || item?.author || '',
    image:
        (item.enclosure && (item.enclosure.url || item.enclosure.link)) ||
        (item['media:content'] && item['media:content']['$']?.url) ||
        null,
});

app.get('/api/news', async (req, res) => {
    const limit = Math.min(parseInt(req.query.limit || '12', 10), 60);
    const cacheKey = `news_${limit}`;
    const cached = cache.get(cacheKey);
    if (cached) return res.json(cached);

    try {
        const allItems = [];
        for (const url of FEEDS) {
            try {
                const feed = await parser.parseURL(url);
                const items = (feed.items || []).map(normalize).map((x) => ({
                    ...x,
                    feedTitle: feed.title || url,
                }));
                allItems.push(...items);
            } catch (err) {
                console.error(`❌ Feed error from ${url}:`, err.message);
            }
        }

        if (!allItems.length) {
            return res.json({ items: [], sources: FEEDS });
        }

        allItems.sort((a, b) => new Date(b.date) - new Date(a.date));
        const data = { items: allItems.slice(0, limit), sources: FEEDS };
        cache.set(cacheKey, data);
        res.json(data);
    } catch (err) {
        console.error('❌ Aggregator failed:', err);
        res.status(500).json({ error: 'Aggregator failed' });
    }
});

app.post('/api/contact', upload.single('file'), async (req, res) => {
    const { name, email, message, telegramText } = req.body;
    const file = req.file;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const text = telegramText || `
📬 <b>Нова заявка з сайту:</b>
👤 <b>Імʼя:</b> ${name}
📧 <b>Email:</b> ${email}
💬 <b>Повідомлення:</b> ${message}
    `.trim();

    try {
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'HTML',
        });

        if (file) {
            const form = new FormData();
            form.append('chat_id', TELEGRAM_CHAT_ID);
            form.append('caption', '📎 Прикріплений файл від користувача');
            form.append('document', Readable.from(file.buffer), {
                filename: file.originalname || 'file',
                contentType: file.mimetype || 'application/octet-stream',
            });

            const response = await axios.post(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`,
                form,
                { headers: form.getHeaders() }
            );

            if (!response.data.ok) {
                throw new Error(response.data.description);
            }
        }

        res.json({ success: true });
    } catch (err) {
        console.error('❌ Telegram send failed:', err.response?.data || err.message);
        res.status(500).json({ error: 'Failed to send to Telegram' });
    }
});

const PORT = process.env.PORT || 5055;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
