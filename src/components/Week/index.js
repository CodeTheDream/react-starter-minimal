import React from 'react';
const Week = (temp) => {

    const time = new Date();
    const formattedTime = time.getHours();
    const round = ":00";

    var renderData = [];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (var i = 0; i < week.length; i++) {
      renderData.push(week[i]);
    }
    
    var renderWeek = [];
    var data = temp;
    for (var x = 0; x < renderData.length; x++) {
      renderWeek.push(data)
    }
    return (
      <div className="container">
        <div className="forecast-wrapper">
          <div className="forecast">{renderData[0]} {formattedTime + round} {renderWeek[0]}</div>
          <div className="forecast">{renderData[1]} {formattedTime + round} {renderWeek[1]}</div>
          <div className="forecast">{renderData[2]} {formattedTime + round} {renderWeek[2]}</div>
          <div className="forecast">{renderData[3]} {formattedTime + round} {renderWeek[3]}</div>
          <div className="forecast">{renderData[4]} {formattedTime + round} {renderWeek[4]}</div>
          <div className="forecast">{renderData[5]} {formattedTime + round} {renderWeek[5]}</div>
          <div className="forecast">{renderData[6]} {formattedTime + round} {renderWeek[6]}</div>
        </div>
      </div>
    );

}


export default Week;
