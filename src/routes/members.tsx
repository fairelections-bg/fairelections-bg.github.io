import { MembersItem } from './members-item';

import dataForGoodLogo from 'images/logos/data-for-good-bg.jpg';
import obshtestvoLogo from 'images/logos/obshtestvo-bg.png';
import forceLogo from 'images/logos/force.svg';
import eurocomLogo from 'images/logos/eurocom-bg.jpg';
import dnevnikLogo from 'images/logos/dnevnik.png';
import aejLogo from 'images/logos/aej.png';
import blagoevgradNewsLogo from 'images/logos/blagoevgrad-news.png';
import zovnewsLogo from 'images/logos/zovnews.png';
import mediapoolLogo from 'images/logos/mediapool.png';
import bluelinkLogo from 'images/logos/logo-bluelink.png';
import podTepetoLogo from 'images/logos/pod-tepeto.gif';
import zaIstinataLogo from 'images/logos/za-istinata.png';
import darikradioLogo from 'images/logos/darikradio.svg';

export const Members = () => {
    
    return (
        <section className="section-padding" id="members">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12 text-center mb-4">
                        <h2>Членове на О.Ч.И</h2>
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

                    <MembersItem
                        name="ФОРС"
                        url="https://www.forcebg.com/"
                        logo={forceLogo}
                        description="Фондация за Общностно Развитие и Сътрудничество. Мост за сътрудничество между властта и местната ромска общност."
                    />

                    <MembersItem
                        name="Евроком"
                        url="https://eurocom.bg/"
                        logo={eurocomLogo}
                        description="Новинарски емисии, политически, здравни, спортни и развлекателни предавания с различна тематична насоченост."
                    />

                    <MembersItem
                        name="Дневник"
                        url="https://www.dnevnik.bg/"
                        logo={dnevnikLogo}
                        description="&quot;Дневник&quot; е онлайн медиата на активните хора с позиция, с новините от България и света, качествени анализи, истории и забавление."
                    />

                    <MembersItem
                        name="Blagoevgrad-News"
                        url="https://blagoevgrad-news.com/"
                        logo={blagoevgradNewsLogo}
                        description="Свободно развиващ се информационно-аналитичен сайт, който зависи само от главния си редактор Мариета Димитрова."
                    />

                    <MembersItem
                        name="Zov News"
                        url="https://zovnews.com/"
                        logo={zovnewsLogo}
                        description="Четете последните новини от Враца и региона. ZovNews - всички новини за Враца. Политика, бизнес, разследвания и любопитни теми."
                    />

                    <MembersItem
                        name="Mediapool"
                        url="https://www.mediapool.bg/"
                        logo={mediapoolLogo}
                        description="Най-важните събития от деня и тяхното обяснение. Качествени анализи и коментари, обективна и навременна информация."
                    />

                    <MembersItem
                        name="БлуЛинк"
                        url="https://www.bluelink.net/"
                        logo={bluelinkLogo}
                        description="Мрежа за гражданско действие. Подкрепа за демокрацията, ценностите на обединена Европа и гражданското общество."
                    />

                    <MembersItem
                        name="ПОД ТЕПЕТО"
                        url="https://podtepeto.com/"
                        logo={podTepetoLogo}
                        description="Акцентираме силно на социалните каузи и инициативите, целящи да укрепят нашето гражданско общество и изконните демократични ценности."
                    />

                    <MembersItem
                        name="Дарик радио"
                        url="https://darikradio.bg/"
                        logo={darikradioLogo}
                        description="Запазена марка за точната, обективната и изпреварващата информация, присъстваща не само в новините, но в най-добрите спортни, политически, икономически предавания."
                    />

                    <div className="col-lg-4 col-md-3 d-none d-md-block"></div>

                    <MembersItem
                        name="За истината"
                        url="https://zaistinata.com/"
                        logo={zaIstinataLogo}
                        description="Подкрепя създаването на мрежа от разследващи журналисти в страната, които да публикуват своите разследвания в независима онлайн платформа."
                    />

                </div>
            </div>
        </section >
    );
};