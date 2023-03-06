import React from 'react';
import './footer.scss';
import logo from 'images/logo.png';

export const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-12 mb-4">
                        <img src={logo} className="logo img-fluid" alt="Обединение Честни Избори (О.Ч.И)" />
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h5 className="site-footer-title mb-3">Бързи връзки</h5>

                        <ul className="footer-menu">
                            <li className="footer-menu-item">
                                <a href="/volunteer" className="footer-menu-link">Запиши се</a>
                            </li>
                            <li className="footer-menu-item">
                                <a href="/submit-signal" className="footer-menu-link">Подай сигнал</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mx-auto">
                        <h5 className="site-footer-title mb-3">Свържете се с нас</h5>

                        <p className="text-white d-flex">
                            <i className="bi-envelope me-2"></i>

                            <a href="mailto:info@fairelections.bg" className="site-footer-link">
                                info@fairelections.bg
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="site-footer-bottom">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-7 col-12">
                            <p className="copyright-text mb-0">Copyright © 2023 <a href="/#top">Обединение Честни Избори
                                (О.Ч.И)</a>
                                <br />Платформа за борба срещу изборните измами, купуването на гласове и контролирания вот
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <a href="https://www.facebook.com/fairelections.bg" target="_blank" rel="noreferrer"
                                        className="social-icon-link bi-facebook"> </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};