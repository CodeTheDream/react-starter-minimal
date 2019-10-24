import React from "react";
import "../../assets/styles/_Week.scss";

class Week extends React.Component {


  render() {
    const time = new Date();
    const formattedTime = time.getHours();
    const round = ":00";
    return (
        <div className="container">
          <div className="forecast-wrapper">
            <div className="day-1 forecast">
              {" "}
              Monday {formattedTime + round}
            </div>
            <div className="day-2 forecast">
              {" "}
              Tuesday {formattedTime + round}
            </div>
            <div className="day-3 forecast">
              {" "}
              Wednesday {formattedTime + round}
            </div>
            <div className="day-4 forecast">
              {" "}
              Thursday {formattedTime + round}
            </div>
            <div className="day-5 forecast">
              {" "}
              Friday {formattedTime + round}
            </div>
          </div>
        </div>
    );
  }
}

export default Week;
