import React from "react";
import LogoPayment from "../Form/LogoPayment/LogoPayment";
import {NavLink} from "react-router-dom";
import Voprosotvet from "../../Natv/Voprosotvet/Voprosotvet";
import Pravila_zapolneniya_teksta from "../../Natv/Pravila_zapolneniya_teksta/Pravila_zapolneniya_teksta";

const Footer = () => {
    return(
        <footer className="pd-40 d-flex justify-content-between">
            <div className="d-space">
                <div className="w-ntv">
                    <p className="t-left">©2017. Сервис предоставляется ОсОО "НаТВ"</p>
                    <LogoPayment/>


                </div>

                <div className="footer-mx">
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/Oproekte">О
                                проекте</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Payment">Способы
                                оплаты</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dlya_yuridicheskih_lic">Для юридических
                                лиц</NavLink>
                        </li>
                        <li>
                            <NavLink to="/voprosotvet">Вопрос-ответ</NavLink>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=XI75m6fUtZE">Видеоинструкция по
                                размещению</a>
                        </li>
                        <li>
                            <NavLink to="/oferta">Договор
                                публичной оферты</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pravila_zapolneniya_teksta">Правила
                                заполнения текста</NavLink>
                        </li>
                    </ul>


                </div>
            </div>

            <div className="float-m">
                <p className="t-align">
                    По вопросам сотрудничества:
                    <a href="mailto:info@natv.kg">info@natv.kg</a>
                    <br/>
                    0 550 44 06 56, звонки пн-пт с 10:00 до 16:00
                </p>

                <div className="d-none">
                    <p>©2017. Сервис предоставляется ОсОО "НаТВ"</p>
                    <LogoPayment/>
                </div>

            </div>
        </footer>
    )
}

export default Footer;