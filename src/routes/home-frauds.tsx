import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type HomeFraudsItemProps = {
    title: ReactNode;
    description: string;
}

const HomeFraudsItem = (props: HomeFraudsItemProps) => {
    return (
        <div className="col-xl-4 col-md-6 col-12 p-1">
            <div className="note-card">
                <div className="note-card-content">
                    <div className="note-card-title">
                        <h5>{props.title}</h5>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export const HomeFrauds = () => {
    return (
        <section className="section-accent">
            <div className="container">
                <div className="row">

                    <div className="col-12 text-center">
                        <h2>Видове изборни измами</h2>
                    </div>

                    <HomeFraudsItem title="Добрият помагач" description="Нека ви помогна да се оправите с Машината...!" />
                    <HomeFraudsItem title={(<>Инвалидирах <span className="text-nowrap">ти бюлетината</span></>)}
                        description="Какъв разумен глас! Ще е жалко някой да сложи хиксче и ето тук.." />
                    <HomeFraudsItem title="Червеният химикал" description="Внимаваш ли какъв цвят ползваш?" />
                    <HomeFraudsItem title="Тъпчене на бюлетини" description="А, Иван не дойде ли да гласува?" />
                    <HomeFraudsItem title="Изчезни!" description="Хайде сега всички наблюдателчета да излязат от стаята" />
                    <HomeFraudsItem title="И още..." description="" />

                </div>

                <div className="pt-5 text-center">
                    <NavLink className="custom-btn btn" to="/frauds">Виж всички</NavLink>
                </div>

            </div>
        </section>
    );
};