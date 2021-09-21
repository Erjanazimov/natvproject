import React from "react";

const ContentNews = () => {
    return(
        <>
        <div>
            <div className="d-flex justify-content-between mt-3 flex-wrap">
                <div className="d-flex align-items-center news">
                    <div className="img">
                        <img
                            src="https://natv.kg/cache/files/1285.jpg_w130_h65_resize.jpg"/>
                    </div>
                    <span className="one-title">Рен ТВ</span>
                </div>
                <div className="d-flex align-items-center mt-3 wid">
                    <p className="show-dates rounded-start"></p>
                    <span className="img-calen"></span>
                </div>
                <div className="d-flex align-items-center mx">
                    <span className="price-real">0.0 сом</span>
                </div>
            </div>
            <hr/>
        </div>
            <div>
                <div className="d-flex justify-content-between mt-3 flex-wrap">
                    <div className="d-flex align-items-center news">
                        <div className="img">
                            <img
                                src="https://natv.kg/cache/files/1305.jpg_w130_h65_resize.jpg"/>
                        </div>
                        <span className="one-title">НТС</span>
                    </div>
                    <div className="d-flex align-items-center mt-3 wid">
                        <p className="show-dates rounded-start"></p>
                        <span className="img-calen"></span>
                    </div>
                    <div className="d-flex align-items-center mx">
                        <span className="price-real">0.0 сом</span>
                    </div>
                </div>
                <hr/>
            </div>

            <div>
                <div className="d-flex justify-content-between mt-3 flex-wrap">
                    <div className="d-flex align-items-center news">
                        <div className="img">
                            <img
                                src="https://natv.kg/cache/files/1289.jpg_w130_h65_resize.jpg"/>
                        </div>
                        <span className="one-title">КТРК</span>
                    </div>
                    <div className="d-flex align-items-center mt-3 wid">
                        <p className="show-dates rounded-start"></p>
                        <span className="img-calen"></span>
                    </div>
                    <div className="d-flex align-items-center mx">
                        <span className="price-real">0.0 сом</span>
                    </div>
                </div>
                <hr/>
            </div>

            <div>
                <div className="d-flex justify-content-between mt-3 flex-wrap">
                    <div className="d-flex align-items-center news">
                        <div className="img">
                            <img
                                src="https://natv.kg/cache/files/2150.jpg_w130_h65_resize.jpg"/>
                        </div>
                        <span className="one-title">ЛЮБИМЫЙ HD + CINEMAX HD</span>
                    </div>
                    <div className="d-flex align-items-center mt-3 wid">
                        <p className="show-dates rounded-start"></p>
                        <span className="img-calen"></span>
                    </div>
                    <div className="d-flex align-items-center mx">
                        <span className="price-real">0.0 сом</span>
                    </div>
                </div>
                <hr/>
            </div>

            <div className="total">
                <div className="more-channel">
                    <a href="#">больше каналов </a>
                </div>
                <div className="total-block">
                    <div className='floatR'>Общая сумма: <span
                        className="fw-bold">0 сом</span></div>
                </div>
            </div>
            </>


    )
}

export default ContentNews;