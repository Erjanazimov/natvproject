import React from "react";
import LogoPayment from "../../../Components/Form/LogoPayment/LogoPayment";
import { withTranslation } from "react-i18next";
import ModalDate from "../../../Components/ModalDate/ModalDate";
let SimvolSk = React.createRef();

class Blocktext extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Simvol: [0],
            TextSimvol: []
        }
    }

    componentDidMount() {
    }

    render() {

        let { t } = this.props;
        let text = React.createRef();
        let ResT = () => {
            let resT = text.current.value.replace(/\s/g, '')

            if (resT !== " "){
                this.setState({
                    TextSimvol: resT,
                    Simvol: resT.length
                })
            }

        }

        return (
            <>
                <div className="pd-40 mn">
                    <div className="@media textarea-fons">
                        <div className="row">
                            <div className="@media">
                                <div className="text-title">
                                    <div className="row d-flex justify-content-between">
                                        <div className="d-flex justify-content-between">
                                            <h3>{t("TexarayObv")}</h3>
                                            <div className="text-right">
                                                {t("Simvol")} <span>{this.state.Simvol}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <textarea ref={text} onChange={ResT} className="text-enter" name="text"
                                  placeholder={t("placeholder")}/>
                    </div>

                    <div className="@media cont">
                        <h3>{t("textZapoln")}</h3>
                        <p>{t("textZapoln2")}</p>
                        <ul>
                            <li>
                                {t("textZapoln3")}
                            </li>
                            <li>
                                {t("textZapoln4")}
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
                            <div className="text">
                                <p>
                                    {t("num1")}
                                </p>
                            </div>
                        </div>
                        <div className="step d-flex align-items-center">
                            <div className="numb">2</div>
                            <div className="text">
                                <p>
                                    {t("num2")}
                                </p>
                            </div>
                        </div>
                        <div className="step d-flex align-items-center">
                            <div className="numb">3</div>
                            <div className="text">
                                <p>
                                    {t("num3")}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <ModalDate ResSimvol={this.state.TextSimvol}/>
            </>
        )
    }
}

export default withTranslation() (Blocktext);