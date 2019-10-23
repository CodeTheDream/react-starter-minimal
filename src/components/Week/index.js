import React from "react";
import Clock from "../Time"
import "../../assets/styles/_Week.scss"

const Week = () => {

        return (
            <div className="container">
                <div className="forcast-wrapper">
                    <div className="day-1 forecast"> Monday <Clock /></div>
                    <div className="day-2 forecast"> Tuesday</div>
                    <div className="day-3 forecast"> Wednesday</div>
                    <div className="day-4 forecast"> Thursday</div>
                    <div className="day-5 forecast"> Friday</div>   
                </div> 
            </div>
        );
    }


export default Week;
