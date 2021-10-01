import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';

class ModalDate extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDays: [],
            resDate: []
        };
    }

    handleDayClick(day, { selected }) {
        const selectedDays = this.state.selectedDays.concat();
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }

        this.setState({ selectedDays });
    }


    render() {
        let ResDate = () => {
            // this.setState({selectedDays:[]});
            let data = this.state.selectedDays;
            let mas = [];

            data.map(item => {
                let resDate = new Date(item).toLocaleDateString("en-GB");
                mas.push(resDate);
            })

        }

        if (this.props.idM !== 0){
          console.log(this.props.idM)
        }
        // console.log(this.props.ResSimvol)
        return (
            <>
                <div className="modal fade" id="add-modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="d-flex justify-content-end m-2">
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                                    aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div className="one_tv_modal modal-skidki">
                                    <div className="row" id="skidka" style={{display: "block;"}}>
                                        <div className="contyt">
                                            При заказе на данном телеканале действует система скидок:
                                        </div>
                                        <div className="items">
                                            <div className="sk_line">от 3 дн. - скидка 10%</div>
                                            <div className="sk_line">от 7 дн. - скидка 20%</div>
                                            <div className="sk_line">от 10 дн. - скидка 30%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="calendar">
                                    <DayPicker
                                        selectedDays={this.state.selectedDays}
                                        onDayClick={this.handleDayClick}
                                    />
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div>
                                        <input type="button" value="Отмена" className="btn bg-light text-dark"
                                               data-bs-dismiss="modal"/>
                                    </div>
                                    <div>
                                        <input type="button" onClick={ResDate} id="ok_date"
                                               className="btn bg-danger text-white"
                                               value="Сохранить"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default ModalDate;