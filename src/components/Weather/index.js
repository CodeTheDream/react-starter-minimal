import React from "react";
import Week from "../Week";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "../../assets/styles/_Week.scss";
import moment from "moment";

class Weather extends React.Component {
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
      weather: "",
      city: "",
      map: "",
      marker: "",
      fahren: "",
      zipcodes: [{ lat: 47.49855629475769, lng: -122.14184416996333 }],
      currentDate: new Date(),
      markedDate: moment(new Date()).format("YYYY-MM-DD"),
      renderedData: []
    };
  }

  // componentDidMount() {
  //   this.getForecastData();
  // }

  setUserInput = e => {
    this.setState({ currentInput: e.target.value });
    console.log("currentInput", this.state.currentInput);
  };

  getWeather = () => {
    const apikey = process.env.REACT_APP_ID;
    let zip = this.state.currentInput;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
      zip +
      "&APPID=" +
      apikey;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        console.log("data5", responseData);
        this.setState(
          {
            temperature: responseData.main.temp,
            humidity: responseData.main.humidity,
            city: responseData.name
          },
          () => {this.getFiveDay()}
        );
      }).catch(error => {console.log(error)})
  };

  get5day = () => {
    const apikey = process.env.REACT_APP_ID;
    let zip = this.state.currentInput;
    const url =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      zip +
      "&APPID=" +
      apikey;
    fetch(url)
      .then(res => res.json())
      .then(forecastData => {
        console.log("forecast data", forecastData);
        this.setState(
          {
            city1: forecastData.list[0].weather[0],
            coord1: forecastData.city.coord,
            date1: forecastData.list[0].dt_text
          },
          () => {this.getForecastData()}
        );
      }).catch(error => {console.log(error)})
  };

  getForecastData() {
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let weatherData = [];
    for (let i = 0; i < week.length; i++) {
      weatherData.push(this.state.city1);
      console.log("boom", weatherData);
      console.log("city", this.state.city1, "coord1", this.state.coord1);
    }
    console.log("hello", weatherData);
    this.setState({
      renderedData: weatherData
    });
  }

  displayMarkers = e => {
    return this.state.zipcodes.map((zipcode, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: zipcode.latitude,
            lng: zipcode.longitude
          }}
          onClick={e => console.log("You clicked me!")}
        />
      );
    });
  };

  getTemp(k) {
    let kelvin = k - 273.15;
    let farenheit = (kelvin * 9) / 5 + 32;
    let solution = Math.round(farenheit * 10) / 10;
    return solution;
  }

  submit = e => {
    console.log("submitting");
    e.preventDefault();
    this.getWeather();
    // this.displayMarkers();
    this.get5day();
    // this.getFiveDay();
    // this.getForecastData();
  };

  getTime() {
    const time = new Date();
    const formattedTime = time.getHours();
    const round = formattedTime + ":00";
    return round;
  }

  getFiveDay() {
    let ironData = [];
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    for (let i = 0; i < week.length; i++) {
      ironData.push(week[i]);
    }

    console.log("week1", ironData);
    let renderWeek = [];
    const data = this.state.temperature;
    for (let x = 0; x < ironData.length; x++) {
      renderWeek.push(data);
    }
    console.log("data", renderWeek);
  }

  render() {
    const { humidity, city, zipcodes } = this.state;
    const mapStyles = { width: "50%", height: "50%" };
    let temperature = this.state.temperature;
    const today = this.state.currentDate;  
    const date = moment(today).format("MMMM D, YYYY");
    // console.log("date",date)
    // console.log("temperature", temperature);
    console.log("uturn", this.state.renderedData);
    return (
      <form className="wholeform">
        <h1>Welcome to your Weather Forecast!</h1>
        <label>
          Zipcode:
          <input
            type="text"
            onChange={this.setUserInput}
            value={this.state.currentInput}
          />
        </label>
        <button type="submit" onClick={e => this.submit(e)}>
          Submit
        </button>
        <div>
          <h3>City</h3>
          <div>{city}</div>
          <h3>Temperature</h3>
          <div>
            {this.state.temperature && this.getTemp(this.state.temperature)}
          </div>
          <h3>Humidity</h3>
          <div>{humidity}</div>
          <h3>Time</h3>
          <div>{this.state.hello}</div>
        </div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        ></Map>
        {this.state.renderedData.map(day =>
          (
          <Week
          day={day}
          />
          )) 
        }
      </form>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Weather);
