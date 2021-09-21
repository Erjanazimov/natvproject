import React from "react";
import LogoPayment from "../../../Components/Form/LogoPayment/LogoPayment";


const Blocktext = () => {
    return(
        <>
            <div className="pd-40 mn">
                <div className="@media textarea-fons">
                    <div className="row">
                        <div className="@media">
                            <div className="text-title">
                                <div className="row d-flex justify-content-between">
                                    <div className="d-flex justify-content-between">
                                        <h3>ВВЕДИТЕ ТЕКСТ ОБЪЯВЛЕНИЯ</h3>
                                        <div className="text-right">
                                            Символов: <span>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <textarea className="text-enter" name="text"
                              placeholder="Отдам даром 0 789 545 654"></textarea>
                </div>

            <div className="@media cont">
                <h3>Правила заполнения текста</h3>
                <p>Уважаемый Рекламодатель!</p>
                <ul>
                    <li>
                        При заполнении объявления после каждого слова должен обязательно стоять
                        пробел;
                    </li>
                    <li>
                        Размещенный текст не должен побуждать граждан к насилию, агрессии и опасным
                        действиям, создающим угрозу жизни и здоровью, а также призывающему к
                        беспорядку;
                    </li>
                    <li>
                        Рекламодатель самостоятельно несет ответственность за соответствие рекламы
                        действующему законодательству Кыргызской Республики о рекламе;
                    </li>
                    <li>
                        Если рекламируемый товар/услуга подлежат лицензированию укажите номера
                        лицензий и наименование органов, выдавшего их и/или укажите «товар
                        сертифицирован», если рекламируемый товар подлежит обязательной
                        сертификации;
                    </li>
                    <li>
                        <a href="#">Оплатить можно любым удобным способом:</a>
                    </li>
                </ul>
                <LogoPayment/>

            </div>
            </div>
            <div className="pd-40 mt-5 pdb-40">
                <div className="dflex">
                    <div className="step d-flex align-items-center">
                        <div className="numb">1</div>
                        <div className="text">
                            <p>
                                Введите текст вашего объявления
                            </p>
                        </div>
                    </div>
                    <div className="step d-flex align-items-center">
                        <div className="numb">2</div>
                        <div className="text">
                            <p>
                                Выберите телеканалы и даты, и нажмите "Разместить объявление"
                            </p>
                        </div>
                    </div>
                    <div className="step d-flex align-items-center">
                        <div className="numb">3</div>
                        <div className="text">
                            <p>
                                Оплатите объявление!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Blocktext;