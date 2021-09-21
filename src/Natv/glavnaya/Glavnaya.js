import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {NavLink} from "react-router-dom";
import Blocktext from "./BlockText/Blocktext";
import ChannelList from "../../Components/Form/ChannelList/ChannelList";
import InfoUser from "../../Components/Form/InfoUser/InfoUser";

const Glavnaya = () => {
    return(
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <NavLink to="#" className="active">Размещение строчного объявления</NavLink>
                        <NavLink to="/glavnaya2" className="active-2">Размещение баннерной рекламы </NavLink >
                    </nav>
                <Header TextBanner="РАЗМЕЩЕНИЕ БЕГУЩЕЙ СТРОКИ НА ТЕЛЕВИЗИОННЫХ КАНАЛАХ КЫРГЫЗСТАНА"/>
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

export default Glavnaya;