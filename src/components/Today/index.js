import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloud, faSun, faCloudRain, faSnowflake } from "@fortawesome/free-solid-svg-icons";
library.add(faSun, faCloud, faCloudRain, faSnowflake);

class Today extends React.Component {
  getBigIcon() {
    const newArray1 = this.props.dayInfo;
    console.log("newArray1", this.props.dayInfo)
      if (newArray1 === "Rain") {
        return <div><FontAwesomeIcon icon={faCloudRain} size="xs" /></div>;
      }
      if (newArray1 === "Clouds") {
        return <div><FontAwesomeIcon icon={faCloud} size="xs"/></div>;
      }
      if (newArray1 === "Sunny") {
        return <div><FontAwesomeIcon icon={faSun} size="xs"/></div>;
    };
    if (newArray1 === "Clear") {
      return <div><FontAwesomeIcon icon={faSun} size="xs" /></div>;
    }
    if (newArray1 === "Snow") {
      return <div><FontAwesomeIcon icon={faSnowflake} size="xs" /></div>;
    }
  }

  getTemp(k) {
    let kelvin = k - 273.15;
    let farenheit = (kelvin * 9) / 5 + 32;
    let solution = Math.round(farenheit * 10) / 10;
    return solution;
  }



  render() {
    return (
      <div className="today">
        <div className="temp-div">
          {this.props.temperature && <div className="temp-wrapper">
            {this.getTemp(this.props.temperature)}
                <span className="the-f-span">℉</span>
          </div>}
          <div className="today-time-and-icon-div">
          <div className="big-icon">{this.getBigIcon()}</div>
        </div>

          </div>
    </div>
      

    );
  }
}

export default Today;
