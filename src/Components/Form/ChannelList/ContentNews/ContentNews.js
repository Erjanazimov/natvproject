import React from "react";
import { withTranslation } from "react-i18next";
import ModalDate from "../../../ModalDate/ModalDate";


class ContentNews extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            IdPost: 0
        }
    }

    render() {
        let IdModal = () => {

            this.setState({
                IdPost: this.props.id
            })
    }
        return(
            <>
                <div>
                    <div data-bs-toggle="modal" data-bs-target="#add-modal" onClick={IdModal}>
                        <div className="d-flex justify-content-between mt-3 flex-wrap">
                            <div className="d-flex align-items-center news">
                                <div className="img">
                                    <img
                                        src={this.props.photo}/>
                                </div>
                                <span className="one-title">{this.props.channelName}</span>
                            </div>
                            <div className="d-flex align-items-center mt-3 wid">
                                {/*<p className="show-dates rounded-start"></p>*/}
                                <input type="text" className="show-dates rounded-start"/>
                                <span className="img-calen"></span>
                            </div>
                            <div className="d-flex align-items-center mx">
                                <span className="price-real">0.0 сом</span>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <ModalDate idM={this.state.IdPost}/>
                </div>

            </>


        )
    }

}

export default withTranslation() (ContentNews);