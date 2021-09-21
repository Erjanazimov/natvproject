import React from "react";
import {NavLink} from "react-router-dom";

const Dlya_yuridicheskih_licCom = () => {
    return(
        <>
            <div className="pd-40 bg-white page">
                <div className="cont-s">
            <h1>РАЗМЕЩЕНИЕ РЕКЛАМЫ ДЛЯ ЮРИДИЧЕСКИХ ЛИЦ</h1>
                <p style={{fontSize: "12pt", color: "#000000"}}>
                    Уважаемый Рекламодатель!
                    Сервис NaTV.kg позволяет организациям с легкостью размещать рекламу на ТВ и получать все отчетные документы вовремя и не выходя из офиса. Размещайте заявки на нашем сайте в течение месяца и мы предоставим
                    Вам все необходимые документы (счет-фактуру, акт выполненных работ и другие любые документы по Вашему запросу).
                </p>
                    <p>
                    1) Оформите заявку на нашем сайте – введите текст или загрузите баннер, выберите телеканалы и даты,
                    заполните контактную информацию (укажите название организации и контактный номер телефона) и нажмите «Разместить объявление».<br/>
                        <span style={{color: "#808080", fontSize: "16px"}}> В поле «Ф.И.О./название организации» всегда указывайте
                            одинаково название организации для корректного сбора данных нашей системой.</span>
                    </p>
                    <p style={{fontSize: "12pt"}}>
                        <span style={{fontWeight: "bold"}}>ОсОО «НаТВ»</span>, ИНН 01210201710151
                    </p>
                    <p style={{fontSize: "12pt"}}>
                        Банк: Филиал ОАО «Оптима Банк» в г. Бишкек №5, БИК: 109016
                    </p>
                    <p style={{fontSize: "12pt"}}>
                        Номер счета: 1091620093760186
                    </p>
                    <p style={{fontSize: "12pt"}}>
                        После оплаты отправьте нам копию платежного поручения на почту <a href="mailto:info@natv.kg">info@natv.kg</a> и Ваша реклама будет размещена!
                    </p>
                    <p style={{fontSize: "12pt"}}>
                        3) Наша система в конце месяца соберет все Ваши оплаченные заявки за весь месяц и автоматически сформирует отчетные документы! До 15 числа месяца, следующего за отчетным, все необходимые документы будут Вам доставлены курьером.
                        Будьте впереди Ваших конкурентов!
                    </p>
                    <p style={{textAlign: "center", fontWeight: "bold", fontSize: "22px", margin: "30px"}}>
                        <NavLink to="/">
                            Разместите Вашу рекламу прямо сейчас!
                        </NavLink>
                    </p>

                    <p>
                        По всем дополнительным вопросам, свяжитесь с нами: <a href="mailto:info@natv.kg">info@natv.kg</a>
                    </p>
                    </div>
            </div>
        </>
    )
}

export default Dlya_yuridicheskih_licCom;