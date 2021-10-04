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
        let inpu = React.createRef();
        let IdModal = () => {
    }

    console.log(this.props.summa)
        return(
            <>
                <div data-id={this.props.id}>
                    <div id="idTV" data-bs-toggle="modal" data-id={this.props.id} data-bs-target="#add-modal" onClick={IdModal}>
                        <div className="d-flex justify-content-between mt-3 flex-wrap" data-id={this.props.id}>
                            <div className="d-flex align-items-center news" data-id={this.props.id}>
                                <div className="img" data-id={this.props.id}>
                                    <img
                                        src={this.props.photo} data-id={this.props.id}/>
                                </div>
                                <span className="one-title" data-id={this.props.id}>{this.props.channelName}</span>
                            </div>
                            <div className="d-flex align-items-center mt-3 wid" data-id={this.props.id}>
                                {/*<p className="show-dates rounded-start"></p>*/}
                                <input type="text" className="show-dates rounded-start" data-id={this.props.id}/>
                                <span className="img-calen" data-id={this.props.id}></span>
                            </div>
                            <div className="d-flex align-items-center mx" data-id={this.props.id}>
                                <span className="price-real" data-id={this.props.id}>0.0 сом</span>
                            </div>
                        </div>
                    </div>
                    <div className="border_end" data-id={this.props.id}> </div>
                </div>

            </>


        )
    }

}

export default withTranslation() (ContentNews);