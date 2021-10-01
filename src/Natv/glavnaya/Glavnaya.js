import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {NavLink} from "react-router-dom";
import Blocktext from "./BlockText/Blocktext";
import ChannelList from "../../Components/Form/ChannelList/ChannelList";
import InfoUser from "../../Components/Form/InfoUser/InfoUser";
import { withTranslation } from "react-i18next";

const Glavnaya = (props) => {
    const { t } = props;
    let resultText;
    if(t("TextstrBan") == t("TextstrBan")){
        resultText = t("TextstrBan");
    } else{
        resultText = t("TextstrBan");
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
                    <form className="form">
                        <Blocktext/>
                        <ChannelList/>
                        <InfoUser/>
                    </form>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default withTranslation() (Glavnaya);