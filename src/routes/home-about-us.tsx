import React from 'react';
import './home-about-us.scss';
import logoImage from 'images/logos/fair-elections.png';

export const HomeAboutUs = () => {
    return (
        <section className="aboutus-section section-padding section-bg" id="about-us">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2 className="text-white mb-4">За нас</h2>
                    </div>

                    <div className="col-lg-4 col-12 mb-5 mb-lg-0">
                        <img src={logoImage} className="img-fluid" alt="О.Ч.И" />
                    </div>

                    <div className="col-lg-8 col-12">
                        <div className="custom-text-box">

                            <p>Сдружение „Данни за добро“, Фондация „Общество.бг“ и Антикорупционният фонд (АКФ), заедно
                                с десетки журналисти, медии, обществени лица и доброволци обявиха днес създаването на
                                „Обединение за честни избори“ (ОЧИ) – платформа, която има за цел да води борба срещу
                                изборните измами, купуването на гласове и контролирания вот.</p>

                            <p>ОЧИ ще използва данни, за да насочва вниманието на медии и доброволци към местата в
                                страната с изборни аномалии, които са индикатор за купен вот или друг вид измами.</p>

                            <a href="https://acf.bg/bg/obedinenie-za-chestni-izbori-shte-rab/" target="_blank" rel="noreferrer"
                                className="custom-btn btn">прочети повече</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};