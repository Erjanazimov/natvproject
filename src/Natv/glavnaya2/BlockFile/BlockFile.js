import React from "react";
import LogoPayment from "../../../Components/Form/LogoPayment/LogoPayment";
import { withTranslation } from "react-i18next";

const BlockFile = (props) => {
    const { t } = props;
    return(
        <>
            <div className="pd-40 mn">
                <div className="@media textarea-fons">
                    <div className="text-title">
                        <div className="row d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                                <h3>{t("Graftext")}</h3>
                            </div>

                        </div>
                    </div>
                    <p className="mt-3 input-group">
                        <input className="form-control" type="file" id="formFile"/>
                        <button className="btn mx-2 img-btn">{t("textZapBaner3")}</button>
                    </p>
                    <p className="rek mt-4">
                        {t("uploadBanner")}
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="preview" id="preview_cont">
                            <span className="text">Предпросмотр</span>
                        </div>
                        <div className="red-text">
                            {t("uploadBanner2")}
                        </div>
                    </div>

                </div>

                <div className="@media cont">
                    <h3>{t("textZapBaner")}</h3>
                    <p>{t("textZapoln2")}</p>
                    <ul>
                        <li>
                            {t("textZapBaner2")}
                        </li>
                        <li>
                            {t("textZapoln5")}
                        </li>
                        <li>
                            {t("textZapoln6")}
                        </li>
                        <li>
                            <a href="#">{t("textZapoln7")}</a>
                        </li>
                    </ul>
                   <LogoPayment/>
                </div>
            </div>

            <div className="pd-40 mt-5 pdb-40">
                <div className="dflex">
                    <div className="step d-flex align-items-center">
                        <div className="numb">1</div>
                        <div className="text"><p>{t("num4")}</p></div>
                    </div>
                    <div className="step d-flex align-items-center">
                        <div className="numb">2</div>
                        <div className="text"><p>{t("num2")}</p></div>
                    </div>
                    <div className="step d-flex align-items-center">
                        <div className="numb">3</div>
                        <div className="text"><p>{t("num3")}</p></div>
                    </div>
                </div>
            </div>
            </>
    )
}

export default withTranslation() (BlockFile);