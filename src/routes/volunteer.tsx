import React from 'react';
import './volunteer.scss';

export const Volunteer = () => {
    return (
        <section className="volunteer-section">
            <div className="section-overlay"></div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mx-auto custom-form volunteer-form embed-responsive">
                        <iframe title="volunteer-sign-up-form" className="embed-responsive-item" src="https://docs.google.com/forms/d/e/1FAIpQLSfRwmzMQctga0nHxw3kAbCsbWALLHdBn83IYg88U-TewQmfZg/viewform?embedded=true" width="100%" height="1400">Loading…</iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};