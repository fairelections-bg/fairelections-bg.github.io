import { useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";

export const SubmitSignal = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 text-center mx-auto">
                        <h2 className="mb-5">Подай сигнал</h2>
                    </div>

                    <div className="custom-text-box">

                        <p>Ще бъдете пренасочени към криптирана платформа за подаване на сигнали
                            https://acf.disclosers.eu/, с цел гарантиране на анонимност. IP адресът, съдържанието на
                            съобщението и всякаква друга чувствителна информация за сигналоподателя, с която може да се
                            злоупотреби от страна на трети лица, ще остане напълно скрита.</p>
                        <p>Като малка експертна организация обработваме приоритетно сигнали, които съдържат достатъчно
                            конкретни факти за корупция поне на средно ниво. Моля опишете всички факти и данни (имена,
                            адреси, дати, суми, и-мейли). Приложете копия и/или оригинали на документи, ако разполагате
                            с такива. Моля имайте търпение – обстойният ни подход на работа отнема време. Не разглеждаме
                            казуси, които касаят единствено частен интерес.</p>

                        <a className="custom-btn btn" href="https://acf.disclosers.eu/#/" target="_blank"
                            rel="noreferrer noopener">Съгласявам се</a>
                    </div>

                </div>
            </div>
        </section>
    );
};