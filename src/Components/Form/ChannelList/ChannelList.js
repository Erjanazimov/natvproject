import React from "react";
import ContentNews from "./ContentNews/ContentNews";

const ChannelList = () => {
    return(
        <div className="pd-40 channel-list-cont">
            <h2>ВЫБОР КАНАЛОВ</h2>
            <div className="channel-list">
                <div className="title">
                    <div className="d-flex justify-content-between mt-4">
                        <div className="@media">
                            <label>выберите каналы</label>
                        </div>
                        <div className="@media">
                            <label className="date">укажите даты</label>
                        </div>
                        <div className="@media mx">
                            <label>стоимость</label>
                        </div>
                    </div>
                </div>
                <div className="content-news">
                    <ContentNews/>
                </div>
            </div>
        </div>
    )
}

export default ChannelList;