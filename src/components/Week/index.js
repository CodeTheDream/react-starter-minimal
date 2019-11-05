import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Day from "../Day";
import moment from "moment";

class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayHigh: "",
      todayLow: "",
      day2High: "",
      day2Low: "",
      day3High: "",
      day3Low: "",
      day4High: "",
      day4Low: "",
      day5High: "",
      day5Low: ""
    };
  }
  componentDidMount() {
    // this.getMaxTemp(this.);
    console.log(this.props.today);
    this.setState({
      todayHigh: this.getTemp(this.getMaxTemp(this.props.today)),
      day2High: this.getTemp(this.getMaxTemp(this.props.day2)),
      day3High: this.getTemp(this.getMaxTemp(this.props.day3)),
      day4High: this.getTemp(this.getMaxTemp(this.props.day4)),
      day5High: this.getTemp(this.getMaxTemp(this.props.day5)),
      todayLow: this.getTemp(this.getMinTemp(this.props.today)),
      day2Low: this.getTemp(this.getMinTemp(this.props.day2)),
      day3Low: this.getTemp(this.getMinTemp(this.props.day3)),
      day4Low: this.getTemp(this.getMinTemp(this.props.day4)),
      day5Low: this.getTemp(this.getMinTemp(this.props.day5)),
      day: this.props.today[0].dt_txt,
      day2: this.props.day2[0].dt_txt,
      day3: this.props.day3[0].dt_txt,
      day4: this.props.day4[0].dt_txt,
      day5: this.props.day5[0].dt_txt,
      day1info: this.props.today,
      day2info: this.props.day2,
      day3info: this.props.day3,
      day4info: this.props.day4,
      day5info: this.props.day5
    });
    // this.props.today.map(item => {
    // })
  }

  getMaxTemp(array) {
    let max = 0;
    array.map(item => {
      if (item.main.temp_max > max) {
        max = item.main.temp_max;
      }
    });
    return max;
  }

  getMinTemp(array) {
    let min = 400;
    array.map(item => {
      if (item.main.temp_min < min) {
        min = item.main.temp_min;
      }
    });
    return min;
  }

  getTemp(k) {
    let kelvin = k - 273.15;
    let farenheit = (kelvin * 9) / 5 + 32;
    let solution = Math.round(farenheit * 10) / 10;
    return solution;
  }

  render() {
    return (
      <div>
        {this.state.day1info && (
          <div>
            <Day
              day={this.state.day}
              todayHigh={this.state.todayHigh}
              todayLow={this.state.todayLow}
              dayInfo={this.state.day1info}
            />
            <Day
              day={this.state.day2}
              todayHigh={this.state.day2High}
              todayLow={this.state.day2Low}
              dayInfo={this.state.day2info}
            />
            <Day
              day={this.state.day3}
              todayHigh={this.state.day3High}
              todayLow={this.state.day3Low}
              dayInfo={this.state.day3info}
            />
            <Day
              day={this.state.day4}
              todayHigh={this.state.day4High}
              todayLow={this.state.day4Low}
              dayInfo={this.state.day4info}
            />
            <Day
              day={this.state.day5}
              todayHigh={this.state.day5High}
              todayLow={this.state.day5Low}
              dayInfo={this.state.day5info}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Week;
