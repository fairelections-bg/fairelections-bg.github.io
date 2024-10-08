import { MembersItem } from './members-item';
import { NavLink } from 'react-router-dom';

import dataForGoodLogo from 'images/logos/data-for-good-bg.jpg';
import obshtestvoLogo from 'images/logos/obshtestvo-bg.png';
import aejLogo from 'images/logos/aej.png';

export const HomeMembers = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2>Членове</h2>
                    </div>

                    <MembersItem
                        name="Данни за добро"
                        url="https://data-for-good.bg/"
                        logo={dataForGoodLogo}
                        description="Подкрепя гражданския сектор, като предоставя знания и услуги свързани с обработка и анализ на данни."
                    />

                    <MembersItem
                        name="Общество"
                        url="https://www.obshtestvo.bg/"
                        logo={obshtestvoLogo}
                        description="Независими създатели на електронни инструменти за бърза и удобна връзка държава–гражданин."
                    />

                    <MembersItem
                        name="АЕЖ-България"
                        url="https://aej-bulgaria.org/"
                        logo={aejLogo}
                        description="Професионална общност от журналисти, част от Асоциацията на европейските журналисти, независим наблюдател на Съвета на Европа."
                    />

                    <div className="text-center">
                        <NavLink className="custom-btn btn" to="/members">Виж всички</NavLink>
                    </div>
                </div>
            </div>
        </section >
    );
};