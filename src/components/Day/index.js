import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloud, faSun, faCloudRain } from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faCloud, faCloudRain);

class Day extends React.Component {
  getIcon() {
    const newArray = Object.assign(this.props.dayInfo);
    console.log(newArray[0]);
    const forecast = newArray[0].weather[0].main;
    console.log("whole day", forecast);
      if (forecast === "Rain") {
        return <FontAwesomeIcon icon={faCloudRain} />;
      }
      if (forecast === "Clouds") {
        return <FontAwesomeIcon icon={faCloud} />;
      }
      if (forecast === "sunny") {
        return <FontAwesomeIcon icon={faSun} />;
      };
  }
  
  render() {

    return (
      <div className="alldays">
        <div className="icon-wrapper"></div>
        <div className="day1">
          <div>{this.getIcon()}</div>
          <div>{moment(this.props.day).format("MMMM Do YYYY")}</div> <br></br>
          <div>High:{this.props.todayHigh} ℉ </div><br></br>
          <div>Low:{this.props.todayLow} ℉ </div>
        </div>
      </div>
    );
  }
}

export default Day;
