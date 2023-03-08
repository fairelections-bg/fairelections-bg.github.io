/* eslint-disable jsx-a11y/anchor-is-valid */

import './top-navigation.scss'

import logo from 'images/logo.png';
import { Link } from "react-router-dom";

export const TopNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-lg sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className="logo img-fluid" alt="Обединение Честни Избори (О.Ч.И)" />
                    <span className="d-inline-block d-md-none">
                        <span>О.Ч.И</span>
                        <small>Обединение Честни Избори</small>
                    </span>
                    <span className="d-none d-md-inline-block">
                        Обединение Честни Избори (О.Ч.И)
                        <small>Платформа за борба срещу изборните измами, <br />купуването на гласове и контролирания вот</small>
                    </span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/about-us">За Нас</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/members">Членове</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/submit-signal">Подай сигнал</Link>
                        </li>

                        <li className="nav-item ms-3">
                            <Link className="nav-link custom-btn custom-border-btn btn" to="/volunteer">Запиши се</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};