import React from "react";

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: "",
      date: "",
      temperature: "",
      humidity: "",
      error: "",
      location: "",
      currentInput: "",
      weather: '',
    };
  }

  componentWillMount() {
    //this.getWeather();
    }
    
  setUserInput = (e) => {
      this.setState({ currentInput: e.target.value });
      console.log("currentInput", this.state.currentInput )
    };

  getWeather = () => {
    const apikey = process.env.REACT_APP_ID;
    let zip = this.state.currentInput;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&APPID=" +
      apikey;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        console.log("data", responseData);
          this.setState({
              temperature: responseData.main.temp,
              humidity: responseData.main.humidity,
          }, () => { });
      });
  };

    submit = (e) => {
      e.preventDefault()
    this.getWeather();
    };

    render() {
        const temperature = this.state.temperature; 
        const humidity = this.state.humidity
        console.log(temperature, humidity);

    return (
      <form>
        <h1>Welcome to your Weather Forecast!</h1> 
        <label>
          Zipcode:
          <input type="text" onChange={this.setUserInput} value={this.state.currentInput}/>
        </label>
        <button type="submit" onClick={(e) => this.submit(e)}>
          Submit
        </button>
            <div>{temperature}</div>
            <div>{humidity}</div>
        </form>
    );
  }
}

export default Today;
