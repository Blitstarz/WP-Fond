import './Testimonials.css'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'

const Testimonials = () => {
    const { t } = useTranslation()
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const testimonials = [
        {
            img: '/photos/olena.png',
            text: t('testimonials.items.0.text'),
            author: t('testimonials.items.0.author'),
        },
        {
            img: '/photos/fintech.png',
            text: t('testimonials.items.1.text'),
            author: t('testimonials.items.1.author'),
        },
        {
            img: '/photos/maria.jpg',
            text: t('testimonials.items.2.text'),
            author: t('testimonials.items.2.author'),
        },
        {
            img: '/photos/igor.jpg',
            text: t('testimonials.items.3.text'),
            author: t('testimonials.items.3.author'),
        },
        {
            img: '/photos/bank.png',
            text: t('testimonials.items.4.text'),
            author: t('testimonials.items.4.author'),
        },
        {
            img: '/photos/taras.png',
            text: t('testimonials.items.5.text'),
            author: t('testimonials.items.5.author'),
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 2,
        slidesToScroll: 1,
        arrows: !isMobile, // ← тут ховаємо стрілки на мобілках
    }

    return (
        <section className="testimonials" id="testimonials">
            <h2>{t('testimonials.title')}</h2>

            <Slider {...settings} className="testimonials-slider">
                {testimonials.map((item, idx) => (
                    <div className="testimonial-card" key={idx}>
                        <img src={item.img} alt={item.author} className="avatar" />
                        <p className="quote">{item.text}</p>
                        <p className="author">{item.author}</p>
                    </div>
                ))}
            </Slider>

            <div className="partners">
                <img src="/photos/trustly.png" alt="Trustly logo" className="trustly" />
                <img src="/photos/visa.svg" alt="Visa logo" />
                <img src="/photos/gpay.svg" alt="Google Pay logo" />
            </div>
        </section>
    )
}

export default Testimonials
