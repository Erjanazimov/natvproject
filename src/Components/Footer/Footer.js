import React from "react";
import LogoPayment from "../Form/LogoPayment/LogoPayment";
import {NavLink} from "react-router-dom";
import { withTranslation } from "react-i18next";

const Footer = (props) => {
    const { t } = props;
    return(
        <footer className="pd-40 d-flex justify-content-between">
            <div className="d-space">
                <div className="w-ntv">
                    <p className="t-left">{t("footer")}</p>
                    <LogoPayment/>


                </div>

                <div className="footer-mx">
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/Oproekte">{t("listNav")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Payment">{t("listNav1")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dlya_yuridicheskih_lic">{t("listNav2")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/voprosotvet">{t("listNav3")}</NavLink>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/watch?v=XI75m6fUtZE">{t("listNav4")}</a>
                        </li>
                        <li>
                            <NavLink to="/oferta">{t("listNav5")}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pravila_zapolneniya_teksta">{t("listNav6")}</NavLink>
                        </li>
                    </ul>


                </div>
            </div>

            <div className="float-m">
                <p className="t-align">
                    {t("footer2")}
                    <a href="mailto:info@natv.kg"> {t("gmail")}</a>
                    <br/>
                    {t("footer3")}
                </p>

                <div className="d-none">
                    <p>{t("footer")}</p>
                    <LogoPayment/>
                </div>

            </div>
        </footer>
    )
}

export default withTranslation() (Footer);