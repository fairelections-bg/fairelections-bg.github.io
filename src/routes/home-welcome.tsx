import volunteerImage from 'images/icons/volunteer.png';
import submitSignalImage from 'images/icons/submit-signal.png';
import { NavLink } from "react-router-dom";

export const HomeWelcome = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 text-center mx-auto">
                        <h2 className="mb-5">Добре дошли на Обединение Честни Избори</h2>
                    </div>

                    <div className="col-lg-3 d-none d-md-block"></div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <NavLink to="/volunteer" className="d-block">
                                <img src={volunteerImage} className="featured-block-image img-fluid" alt="доброволец" />
                                <p className="featured-block-text">Запиши се <strong>доброволец</strong></p>
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <NavLink to="/submit-signal" className="d-block">
                                <img src={submitSignalImage} className="featured-block-image img-fluid" alt="сигнал" />
                                <p className="featured-block-text">Подай <strong>сигнал</strong></p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};