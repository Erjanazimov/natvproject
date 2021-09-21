import React from "react";
import Header from "../../Components/Header/Header";
import {NavLink} from "react-router-dom";
import Blocktext from "../glavnaya/BlockText/Blocktext";
import ChannelList from "../../Components/Form/ChannelList/ChannelList";
import InfoUser from "../../Components/Form/InfoUser/InfoUser";
import BlockFile from "./BlockFile/BlockFile";
import Footer from "../../Components/Footer/Footer";

const Glavnaya2 = () => {
    return(
        <div className="wrapper">
            <div className="container-natv content-natv">
                <nav className="topMenu d-flex justify-content-around">
                    <NavLink to="/" className="active-2">Размещение
                        строчного объявления</NavLink>
                    <NavLink to="/glavnaya2" className="active">Размещение баннерной рекламы </NavLink>
                </nav>
        <Header TextBanner="РАЗМЕЩЕНИЕ БАННЕРНОЙ РЕКЛАМЫ НА ТЕЛЕВИЗИОННЫХ КАНАЛАХ КЫРГЫЗСТАНА"/>
                <form className="form">
                    <BlockFile/>
                    <ChannelList/>
                    <InfoUser/>
                </form>
                <Footer/>
            </div>
        </div>
    )
}


export default Glavnaya2;