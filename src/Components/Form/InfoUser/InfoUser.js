import React from "react";
import { withTranslation } from "react-i18next";

const InfoUser = (props) =>{
    const { t } = props;
    return(
        <>
            <div className="pd-40">
                <div className="mb-4 mt-5 input-group d-flex justify-content-between">
                    <div className="mbm">
                        <label>{t("user")}</label>
                        <input type="text" name="family" className="form-control rounded input-ntv"
                               id="family" placeholder={t("userplac")}/>
                    </div>
                    <div className="mbm">
                        <label>{t("user2")}</label>
                        <input type="text" name="name" className="form-control rounded input-ntv"
                               id="name" placeholder={t("userplac2")}/></div>
                    <div className="mbm">
                        <label>{t("user3")}</label>
                        <input type="text" name="middle" className="form-control rounded input-ntv"
                               id="middle" placeholder={t("userplac3")}/></div>
                </div>
                <div>
                    <p>

                        {t("userteext")}
                        <br/>
                        {t("userteext2")}
                    </p>
                </div>
                <div className="btn-cont d-flex justify-content-between">
                    <div className="check-text">
                        <div>{t("userraz")}</div>
                    </div>
                    <div className="div-btn mt-3">
                        <input type="submit" name="" value={t("userBtn")}
                               className="btn-ntv"/>
                    </div>
                </div>


                <hr/>
            </div>
        </>
    )
}

export default withTranslation() (InfoUser);