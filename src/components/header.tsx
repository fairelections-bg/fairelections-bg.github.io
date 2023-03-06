import React from 'react';
import './header.scss'

export const Header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 d-flex flex-wrap">
                        <p className="d-flex mb-0">
                            <i className="bi-envelope me-2"></i>

                            <a href="mailto:info@fairelections.bg">
                                info@fairelections.bg
                            </a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                        <ul className="social-icon">
                            <li className="social-icon-item">
                                <a href="https://www.facebook.com/fairelections.bg" target="_blank" rel="noreferrer"
                                    className="social-icon-link bi-facebook"> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};