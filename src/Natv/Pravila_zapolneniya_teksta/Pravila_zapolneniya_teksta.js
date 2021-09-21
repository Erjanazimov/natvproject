import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Pravila_zapolneniya_teksta = () => {
    return(
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <NavLink to="/" className="active-2">Размещение
                            строчного объявления</NavLink>
                        <NavLink to="/glavnaya2" className="active-2">Размещение
                            баннерной рекламы </NavLink>
                    </nav>
                    <Header TextBanner="РАЗМЕЩАЙ БЕГУЩУЮ СТРОКУ! ЛЕГКО, БЫСТРО, УДОБНО!"/>
                    <div className="pd-40 bg-white page">
                        <h3>Правила заполнения текста</h3>
                        <p>Уважаемый Рекламодатель!</p>
                        <ul>
                            <li>При заполнении объявления после каждого слова должен обязательно стоять пробел;</li>
                            <li><strong>Чтобы Ваши контактные данные отображались в объявлении, не забудьте указать их в
                                тексте.</strong></li>
                            <li><strong>Контактные данные заполненные внизу, будут использованы только для оповещений о
                                статусе заявки</strong>.
                            </li>
                            <li>Размещенный текст не&nbsp;должен побуждать граждан к&nbsp;насилию, агрессии
                                и&nbsp;опасным действиям, создающим угрозу жизни и&nbsp;здоровью, а&nbsp;также
                                призывающему к&nbsp;беспорядку;
                            </li>
                            <li>Рекламодатель самостоятельно несет ответственность за&nbsp;соответствие рекламы
                                действующему законодательству Кыргызской Республики о&nbsp;рекламе;
                            </li>
                            <li>Если рекламируемый товар/услуга подлежат лицензированию укажите номера лицензий
                                и&nbsp;наименование органов, выдавшего их&nbsp;и/или укажите «товар сертифицирован»,
                                если рекламируемый товар подлежит обязательной сертификации;
                            </li>
                            <li><NavLink to="/Payment"><strong>Оплатить можно любым удобным способом, подробно в
                                разделе "Способы оплаты"</strong></NavLink></li>
                        </ul>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Pravila_zapolneniya_teksta;