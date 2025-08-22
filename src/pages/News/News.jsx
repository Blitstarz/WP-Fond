import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { FaRegNewspaper } from "react-icons/fa";
import "./News.css";

const News = () => {
    const { t } = useTranslation();
    const [news, setNews] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        fetch("/api/news?limit=12")
            .then((res) => res.json())
            .then((data) => setNews(data.items || []))
            .catch((err) => console.error("News error:", err));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        arrows: false,
        swipe: true,
        touchMove: true,
        focusOnSelect: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
        beforeChange: () => {
            document.querySelectorAll(".slick-dots li button").forEach(btn => btn.blur());
        },
        afterChange: () => {
            document.querySelectorAll(".slick-dots li button").forEach(btn => btn.blur());
        },
    };

    return (
        <section className="news" id="news">
            <div className="news-container">
                <h2 className="news-title">{t('news.title')}</h2>
                <p className="news-subtitle">
                    {t('news.subtitle')}
                </p>

                <Slider {...settings} ref={sliderRef}>
                    {news.map((item, i) => (
                        <div className="news-card" key={i}>
                            <div className="news-image-wrapper">
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="news-image"
                                    />
                                ) : (
                                    <div className="news-placeholder">
                                        <FaRegNewspaper className="news-icon" />
                                    </div>
                                )}
                            </div>

                            <h3 className="news-card-title">{item.title}</h3>
                            {item.feedTitle && (
                                <p className="news-source">
                                </p>
                            )}

                            <p className="news-excerpt">
                                {item.excerpt && item.excerpt.length > 0
                                    ? item.excerpt
                                    : t('news.readMorePlaceholder')}
                            </p>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news-link"
                            >
                                {t('news.readMore')} →
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default News;
