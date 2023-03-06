/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './top-navigation.scss'
import logo from 'images/logo.png';

export const TopNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-lg sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="logo img-fluid" alt="Обединение Честни Избори (О.Ч.И)" />
                    <span className="d-inline-block d-md-none">
                        <span>О.Ч.И</span>
                        <small>Обединение Честни Избори</small>
                    </span>
                    <span className="d-none d-md-inline-block">
                        Обединение Честни Избори (О.Ч.И)
                        <small>Платформа за борба срещу изборните измами, <br />купуването на гласове и контролирания вот</small>
                    </span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="/#about-us">За Нас</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="/#members">Членове</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/submit-signal">Подай сигнал</a>
                        </li>

                        <li className="nav-item ms-3">
                            <a className="nav-link custom-btn custom-border-btn btn" href="/volunteer">Запиши се</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};