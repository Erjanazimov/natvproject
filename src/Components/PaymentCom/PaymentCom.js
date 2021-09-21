import React from "react";
import PaymentLogo from "./PaymentLogo/PaymentLogo";

const PaymentCom = () => {
    return(
        <>
            <div className="bg-white">
                <div className="pd-40 page">
                    <h1>СПОСОБЫ ОПЛАТЫ УСЛУГ РАЗМЕЩЕНИЯ РЕКЛАМЫ НА ТВ</h1>
                    <p>Услуги размещения рекламы на ТВ, Вы можете оплатить любым удобным способом.</p>
                    <p>
                        Оплата принимается в сети терминалов:<br/>
                        <strong>OptimaBank, Касса 24, M&TC, Quickpay, Terempay, Umai.</strong>
                    </p>

                    <p>
                        Через электронные кошельки и интернет банкинг:<br/>
                        <strong>Optima24, ЭЛСОМ, UMAI, O!Деньги, Balance.kg, MegaPay, Visa, Master Card</strong><br/>
                        Также оплата за объявления на тв принимается в отделениях ГП «Кыргыз почтасы».
                    </p>
                    <br/>
                        <p>
                            Для юридических лиц, оплата за размещение рекламы на ТВ, также, возможна перечислением на
                            банковский счет.
                        </p>
                </div>
                <PaymentLogo/>
                </div>
        </>
    )
}

export default PaymentCom;