import React from 'react';
import slide1 from 'images/slide/Slide1.jpg';
import slide2 from 'images/slide/Slide2.jpg';
import slide3 from 'images/slide/Slide3.jpg';

export const HomeCarousel = () => {
    return (
        <section className="hero-section hero-section-full-height">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-12 col-12 p-0">
                        <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slide1} className="carousel-image img-fluid" alt="Включи се!" />

                                    <div className="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>Включи се!</h1>
                                        <p>За едни по-честни избори</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={slide2} className="carousel-image img-fluid" alt="Заедно можем!" />

                                    <div className="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>Заедно можем!</h1>
                                        <p>За една по-силна демокрация</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src={slide3} className="carousel-image img-fluid" alt="Бъди активен!" />

                                    <div className="carousel-caption d-flex flex-column justify-content-end">
                                        <h1>Бъди активен!</h1>
                                        <p>За едно по-добро бъдеще</p>
                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#hero-slide"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Назад</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#hero-slide"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Напред</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};