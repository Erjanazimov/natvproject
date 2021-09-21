import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../Components/Header/Header";
import OfertaCom from "../../Components/OfertaCom/OfertaCom";
import Footer from "../../Components/Footer/Footer";

const Oferta = () => {
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
                    <OfertaCom/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Oferta;