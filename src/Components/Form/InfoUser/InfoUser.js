import React from "react";

const InfoUser = () =>{
    return(
        <>
            <div className="pd-40">
                <div className="mb-4 mt-5 input-group d-flex justify-content-between">
                    <div className="mbm">
                        <label>КОНТАКТНЫЙ НОМЕР</label>
                        <input type="text" name="family" className="form-control rounded input-ntv"
                               id="family" placeholder="Фамилия"/>
                    </div>
                    <div className="mbm">
                        <label>E-MAIL</label>
                        <input type="text" name="name" className="form-control rounded input-ntv"
                               id="name" placeholder="Имя"/></div>
                    <div className="mbm">
                        <label>УКАЖИТЕ ФАМИЛИЮ И ИМЯ</label>
                        <input type="text" name="middle" className="form-control rounded input-ntv"
                               id="middle" placeholder="Отчество"/></div>
                </div>
                <div>
                    <p>

                        Поля не обязательны для заполнения. Укажите номер телефона и мы отправим Вам код
                        для оплаты SMS сообщением.
                        <br/>
                        *Оплатите любым удобным способом!
                    </p>
                </div>
                <div className="btn-cont d-flex justify-content-between">
                    <div className="check-text">
                        <div>Вам остался один шаг – нажмите разместить и получите код для оплаты!</div>
                    </div>
                    <div className="mt-3 d-center">
                        <img src="img/check.PNG"/>
                    </div>
                    <div className="div-btn mt-3">
                        <input type="submit" name="" value="разместить объявление"
                               className="btn-ntv  placeorder"/>
                    </div>
                </div>


                <hr/>
            </div>
        </>
    )
}

export default InfoUser;