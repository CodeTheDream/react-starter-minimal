import React from "react";
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
      todayHigh: this.getMaxTemp(this.props.today),
      day2High: this.getMaxTemp(this.props.day2),
      day3High: this.getMaxTemp(this.props.day3),
      day4High: this.getMaxTemp(this.props.day4),
      day5High: this.getMaxTemp(this.props.day5),
      todayLow: this.getMinTemp(this.props.today),
      day2Low: this.getMinTemp(this.props.day2),
      day3Low: this.getMinTemp(this.props.day3),
      day4Low: this.getMinTemp(this.props.day4),
      day5Low: this.getMinTemp(this.props.day5),
      day: this.props.today[0].dt_txt,
      day2: this.props.day2[0].dt_txt,
      day3: this.props.day3[0].dt_txt,
      day4: this.props.day4[0].dt_txt,
      day5: this.props.day5[0].dt_txt
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

  render() {
    return (
      <form>
        <div className="alldays">
          <div className="day1">
            {moment(this.state.day).format("MMMM Do YYYY")} <br></br>
            todayHigh:{this.state.todayHigh} <br></br>
            todayLow:{this.state.todayLow}
          </div>
          <div className="day2">
            {moment(this.state.day2).format("MMMM Do YYYY")} <br></br>
            day2High:{this.state.day2High}
            <br></br>
            day2Low:{this.state.day2Low}
          </div>
          <div className="day3">
            {moment(this.state.day3).format("MMMM Do YYYY")} <br></br>
            day3High:{this.state.day3High} <br></br>
            day3Low:{this.state.day3Low}
          </div>
          <div className="day4">
            {moment(this.state.day4).format("MMMM Do YYYY")} <br></br>
            day4High:{this.state.day4High} <br></br>
            day4Low:{this.state.day4Low}
          </div>
          <div className="day5">
            {moment(this.state.day5).format("MMMM Do YYYY")} <br></br>
            day5High:{this.state.day5High} <br></br>
            day5Low:{this.state.day5Low}
          </div>
        </div>
      </form>
    );
  }
}

export default Week;
