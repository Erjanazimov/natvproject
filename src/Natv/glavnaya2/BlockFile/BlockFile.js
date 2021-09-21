import React from "react";
import LogoPayment from "../../../Components/Form/LogoPayment/LogoPayment";


const BlockFile = () => {
    return(
        <>
            <div className="pd-40 mn">
                <div className="@media textarea-fons">
                    <div className="text-title">
                        <div className="row d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <h3>ЗАГРУЗИТЕ ГРАФИЧЕСКИЙ ФАЙЛ</h3>
                            </div>

                        </div>
                    </div>
                    <p className="mt-3 input-group">
                        <input className="form-control" type="file" id="formFile"/>
                        <button className="btn mx-2 img-btn">Загрузить</button>
                    </p>
                    <p className="rek mt-4">
                        Рекомендуемый размер файла 720х576 пикс. или соотношение сторон 4:3.<br/>
                        Ограничение по размеру файла 3 Мб. К закачке допустимы графические форматы PNG, JPG,
                        GIF.
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="preview" id="preview_cont">
                            <span className="text">Предпросмотр</span>
                        </div>
                        <div className="red-text">
                            У вас есть возможность при несоответствии размеров файла подкорректировать его,
                            перемещая в области «предпросмотра»
                        </div>
                    </div>

                </div>

                <div className="@media cont">
                    <h3>Требования к содержанию баннера</h3>
                    <p>Уважаемый Рекламодатель!</p>
                    <ul>
                        <li>
                            Текст не должен побуждать граждан к насилию, агрессии и опасным действиям, создающим
                            угрозу жизни и здоровью, а также призывающему к беспорядку;
                        </li>
                        <li>
                            Рекламодатель самостоятельно несет ответственность за соответствие рекламы
                            действующему законодательству Кыргызской Республики о рекламе;
                        </li>
                        <li>
                            Если рекламируемый товар/услуга подлежат лицензированию укажите номера лицензий и
                            наименование органов, выдавшего их и/или укажите «товар сертифицирован», если
                            рекламируемый товар подлежит обязательной сертификации;
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
                        <div className="text"><p>Загрузите изображение</p></div>
                    </div>
                    <div className="step d-flex align-items-center">
                        <div className="numb">2</div>
                        <div className="text"><p>Выберите телеканалы и даты, и нажмите «Разместить баннер»</p></div>
                    </div>
                    <div className="step d-flex align-items-center">
                        <div className="numb">3</div>
                        <div className="text"><p>Оплатите объявление!</p></div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default BlockFile;