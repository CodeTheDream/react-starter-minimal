import React from "react";
import Week from "../Week";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "../../assets/styles/_Weather.scss";
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
      todaysDate:'',
      fahren: "",
      zipcodes: [{ lat: 47.49855629475769, lng: -122.14184416996333 }],
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
          () => {
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
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
            hourlyForecast: forecastData.list,
            coord1: forecastData.city.coord,
            date1: forecastData.list[0].dt_text
          },
          () => {
            this.getForecastData();
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
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
    let weatherData = this.state.hourlyForecast;
    let today = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];
    weatherData.map((weatherIncrement, i) => {
      const forecastDate =  moment(weatherIncrement.dt * 1000).format('MMMM Do YYYY')
  
      if (forecastDate === moment().add(0, 'days').format('MMMM Do YYYY')
      ) {
        today.push(weatherIncrement);
      }
      if (forecastDate === moment().add(1, 'days').format('MMMM Do YYYY')
      ) {
        day2.push(weatherIncrement);
      }
      if (forecastDate === moment().add(2, 'days').format('MMMM Do YYYY')
      ) {
        day3.push(weatherIncrement);
      }
      if (forecastDate === moment().add(3, 'days').format('MMMM Do YYYY')
      ) {
        day4.push(weatherIncrement);
      }
      if (forecastDate === moment().add(4, 'days').format('MMMM Do YYYY')
      ) {
        day5.push(weatherIncrement);
      }

      return console.log("every 3 hours the weather is", weatherIncrement, i);
    });
    console.log("weatherIncrement", today);
    console.log("weather day 2", day2)
    console.log("weather day 3", day3)
    console.log("weather day 4", day4)
    console.log("weather day 5", day5)
    this.setState({
      today: today,
      day2: day2,
      day3: day3,
      day4: day4,
      day5: day5,
      isForecast: true,
    })
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

  render() {
    const { humidity, city, zipcodes } = this.state;
    const mapStyles = { width: "50%", height: "50%",top: "50"};
    let temperature = this.state.temperature;
    const today = this.state.currentDate;
    console.log("uturn", this.state.renderedData);
    return (
      <form className="wholeform">
        <h1>Welcome to your Weather Forecast!</h1>
        <label>
          Zipcode:
          <input className="zipcode-textbox"
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
        <div>
          <div>
            {this.state.isForecast &&
              <Week
                today={this.state.today}
                day2={this.state.day2}
                day3={this.state.day3}
                day4={this.state.day4}
                day5={this.state.day5}
              />
            }
          </div>
        </div>
      </form>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Weather);
