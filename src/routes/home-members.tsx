import { MemberItem } from './member-item';
import { Link } from 'react-router-dom';

import dataForGoodLogo from 'images/logos/data-for-good-bg.png';
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

                    <MemberItem
                        name="Данни за добро"
                        url="https://data-for-good.bg/"
                        logo={dataForGoodLogo}
                        description="Подкрепя гражданския сектор, като предоставя знания и услуги свързани с обработка и анализ на данни."
                    />

                    <MemberItem
                        name="Общество"
                        url="https://www.obshtestvo.bg/"
                        logo={obshtestvoLogo}
                        description="Независими създатели на електронни инструменти за бърза и удобна връзка държава–гражданин."
                    />

                    <MemberItem
                        name="Антикорупционен фонд"
                        url="https://acf.bg/bg/"
                        logo={anticorruptionFundLogo}
                        description="Работи за възпрепятстване, изобличаване и разследване на корупцията на всички нива в страната."
                    />

                    <div className="text-center">
                        <Link className="custom-btn btn" to="/members">Виж всички</Link>
                    </div>
                </div>
            </div>
        </section >
    );
};