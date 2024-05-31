/* eslint-disable react/jsx-no-target-blank */

import mapImage from 'images/analysis/AnalysisMap.jpg';

export const Analysis = () => {

    return (
        <section className="section-padding" id="reports">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 text-center mx-auto">
                        <h2 className='pb-0'>Анализи</h2>
                    </div>

                    <div className='col-12 p-5'>
                        <ul>
                            <li>Обединение за честни избори представя анализ на секциите със статистически отклонения  – места в страната, където се наблюдават изборни аномалии и компактен вот, които се открояват статистически.</li>
                            <li>Подобно отклонение може да е признак за контролиран или купен вот или друг тип изборни измами или грешки, които да влияят на резултата.</li>
                            <li>ОЧИ проследи и необичайно натруправане на преференции за кандидатите за общински съвет.</li>
                        </ul>

                        <img src={mapImage} className="img-fluid" alt="Карта" />

                        <h3>Връзки:</h3>
                        <ul className=''>
                            <li>Секции с аномалии в гласуването за кметски избори I-ри тур -
                                <a target="_blank" href="https://fairelections.github.io/maps/mayor_elections_first_round.html"> карта</a></li>
                            <li>Секции с аномалии в гласуването за кметски избори II-ри тур -
                                <a target="_blank" href="https://fairelections.github.io/maps/mayor_elections_second_round.html"> карта</a></li>
                            <li>Секции с аномалии в гласуването за общински съвет -
                                <a target="_blank" href="https://fairelections.github.io/maps/city_council.html"> карта</a></li>
                            <li>Резултатите на кандидат - общински съветници с над 80 процента от гласовете в секция за партията си. -
                                <a target="_blank" href="https://docs.google.com/spreadsheets/d/19jC0fnzXLQblfrEnIRfSZEz9UpPugi9Pz6r95zu40vA/"> данни</a></li>
                            <li>Концентрация на голям брой преференции, замерени чрез дисперсия. -
                                <a target="_blank" href="https://docs.google.com/spreadsheets/d/1iW-YxHWbC0yypO_eBbX2OFpEWtntvyih43i3f2gTk_I/"> данни</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section >
    );
};