import React from "react";
import { withTranslation } from "react-i18next";
let lgRU = React.createRef();
let lgKG = React.createRef();




class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.VklFun();
    }

   /* VklFun(language){
        if (language != "kg" || language != undefined){
            lgRU.current.classList.add("active")
            lgKG.current.classList.remove("active")
        } else{
            lgKG.current.classList.add("active")
            lgRU.current.classList.remove("active")
        }

        console.log(language)

    }*/

    render() {
        const {t} = this.props;

        const onLanguageChanged = (event) => {
            let language = event.currentTarget.value;
            this.props.i18n.changeLanguage(language);
        };
        return (
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
                        {/*<a href="#" className="active">РУ</a>*/}
                        {/*<a href="#">КГ</a>*/}
                        {/*className="active"*/}
                        <button ref={lgRU} value="ru" onClick={(value) => onLanguageChanged(value)}>
                            ру
                        </button>
                        <button ref={lgKG} value="kg" onClick={(value) => onLanguageChanged(value)}>
                            кг
                        </button>

                    </div>
                    <div className="@media">
                        <div className="text arct">
                            <h1> {this.props.TextBanner}</h1>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default withTranslation() (Header);