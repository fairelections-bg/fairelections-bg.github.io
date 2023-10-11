import { MembersItem } from './members-item';
import { NavLink } from 'react-router-dom';

import dataForGoodLogo from 'images/logos/data-for-good-bg.jpg';
import obshtestvoLogo from 'images/logos/obshtestvo-bg.png';
import anticorruptionFundLogo from 'images/logos/anticorruption-fund.png';

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
                        name="Антикорупционен фонд"
                        url="https://acf.bg/bg/"
                        logo={anticorruptionFundLogo}
                        description="Работи за възпрепятстване, изобличаване и разследване на корупцията на всички нива в страната."
                    />

                    <div className="text-center">
                        <NavLink className="custom-btn btn" to="/members">Виж всички</NavLink>
                    </div>
                </div>
            </div>
        </section >
    );
};