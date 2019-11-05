import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Week from "../Week";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  render() {
    return (
      <div className="alldays">
        <div className="day1">
          {moment(this.props.day1).format("MMMM Do YYYY")} <br></br>
          High:{this.props.todayHigh} ℉ <br></br>
          Low:{this.props.todayLow} ℉
        </div>
          <div className="day2">
            {moment(this.props.day2).format("MMMM Do YYYY")} <br></br>
          High:{this.props.day2High}
            <br></br>
          Low:{this.props.day2Low}
          </div>
          <div className="day3">
            {moment(this.props.day3).format("MMMM Do YYYY")} <br></br>
          High:{this.props.day3High} <br></br>
          Low:{this.props.day3Low}
          </div>
          <div className="day4">
            {moment(this.props.day4).format("MMMM Do YYYY")} <br></br>
          High:{this.props.day4High} <br></br>
          Low:{this.props.day4Low}
          </div>
          <div className="day5">
            {moment(this.props.day5).format("MMMM Do YYYY")} <br></br>
          High:{this.props.day5High} <br></br>
          Low:{this.props.day5Low}
          </div>
        </div>
    );
  }
}

export default Day;
