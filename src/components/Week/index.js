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
      day1info: "",
      day2info: "",
      day3info: "",
      day4info: "",
      day5info: ""
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
      <form>
        <div>
          <Day day1={this.state.day} todayHigh={this.state.todayHigh} todayLow={this.state.todayLow} 
               day2={this.state.day2} day2High={this.state.day2High} day2Low={this.state.day2Low}
               day3={this.state.day3} day3High={this.state.day3High} day3Low={this.state.day3Low}
               day4={this.state.day4} day4High={this.state.day4High} day4Low={this.state.day4Low}
               day5={this.state.day5} day5High={this.state.day5High} day5Low={this.state.day5Low} />
        </div>
      </form>
    );
  }
}

export default Week;
