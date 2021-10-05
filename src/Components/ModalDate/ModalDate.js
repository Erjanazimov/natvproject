import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';

import ContentNews from "../Form/ChannelList/ContentNews/ContentNews";

class ModalDate extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
            selectedDays: [],
            resDate: [],
            addPost: {},
            summaWithoutDiscount: [],
            summaWithDiscount: []
        }


        this.ResDate = this.ResDate.bind(this);
        this.getDate = this.getDate.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.UrlSum = this.UrlSum.bind(this);
    }

    componentDidMount() {
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

    ResDate(){
        let data = this.state.selectedDays;
        let res = document.getElementById("idd");
        let obj = {
        }
        let mas = [];

        data.map(item => {
            // let resDate = new Date(item).toLocaleDateString("coptic");

            let resDate = new Date(item);
            let mm = resDate.getMonth() + 1;
            let dd = resDate.getDate();
            let yy = resDate.getFullYear(); //dd-mm-yy
            let myDateString = yy + '-' + mm + '-' + dd;
            mas.push(myDateString);
        })

        obj.channelId = res.value;
        obj.dates = mas;
        obj.text = this.props.simvol;

        this.getDate(obj)
    }

    getDate(obj) {
            let base_url = "https://na-tv.herokuapp.com/api/v1/order/get-summa";

            let options = {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }

            fetch(base_url, options)
                .then(response => {
                    if (response.ok){
                        return response.json();
                    } else{
                        alert("Забыли добавить текст: Код ошибки " + response.status)
                    }
                })
                .then(data => this.setState({
                    summaWithoutDiscount: data.summaWithoutDiscount,
                    summaWithDiscount: data.summaWithDiscount
                }))

                this.state.selectedDays = []

        this.UrlSum(obj)
    }

    UrlSum(obj){

    }


    render() {
        return (
            <>
                <div className="modal fade " id="add-modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="d-none">
                        <ContentNews/>
                    </div>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="d-flex justify-content-end m-2">
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                                    aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div className="one_tv_modal modal-skidki">
                                   <p>
                                       Цена: {this.state.summaWithoutDiscount} сом
                                   </p>
                                    <p>
                                        Со скидкой: <span style={{color: "red"}}>{this.state.summaWithDiscount} сом</span>
                                    </p>
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
                                        <input type="button" onClick={this.ResDate} id="ok_date"
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