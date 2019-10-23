import React from "react";
import "../../assets/styles/_Week.scss"

class Week extends React.Component = () => {
    const time = new Date();
    const formattedTime = time.getHours();
    const round = ":00";

        return (
            <div className="container">
                <div className="forecast-wrapper">
                    <div className="day-1 forecast"> Monday</div>
                    <div className="day-2 forecast"> Tuesday </div>
                    <div className="day-3 forecast"> Wednesday </div>
                    <div className="day-4 forecast"> Thursday</div>
                    <div className="day-5 forecast"> Friday  {formattedTime + round}</div>   
                </div> 
            </div>
        );
    }


export default Week;
