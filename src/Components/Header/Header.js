import React from "react";


const Header = (props) => {
    return(
        <>
            <header className="pd-40 d-flex justify-content-between">
                <div className="row">
                    <div className="@media">
                        <a href="#">
                            <img src="https://natv.kg/static/user/ima/logo.png" alt="" className="logo"/>
                        </a>
                    </div>
                </div>

                <div className="langs">
                    <a href="#" className="active">РУ</a>
                    <a href="#">КГ</a>
                </div>
                <div className="@media">
                    <div className="text arct">
                        <h1> {props.TextBanner}</h1>
                    </div>
                </div>
            </header>
            </>
    )
}

export default Header;