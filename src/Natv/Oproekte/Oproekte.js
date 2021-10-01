import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../Components/Header/Header";
import OproekteCom from "../../Components/OproekteCom/OproekteCom";
import Footer from "../../Components/Footer/Footer";
import { withTranslation } from "react-i18next";

const Oproekte = (props) => {
    const { t } = props;
    let resultText;
    if(t("Oproekt") == t("Oproekt")){
        resultText = t("Oproekt");
    } else{
        resultText = t("Oproekt");
    }

    return(
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
            <nav className="topMenu d-flex justify-content-around">
                <NavLink to="#" className="active">{t("navstr")}</NavLink>
                <NavLink to="/glavnaya2" className="active-2">{t("navbar")} </NavLink >
            </nav>
                    <Header TextBanner={resultText}/>
                    <OproekteCom/>
                    <Footer/>
                </div>
            </div>

        </>
    )
}

export default  withTranslation() (Oproekte);