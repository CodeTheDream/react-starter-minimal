import React from "react";
import Week from "../Week";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "../../assets/styles/_Week.scss";


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
      zipcodes: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 }
      ]
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
        console.log("data", responseData);
        this.setState(
          {
            temperature: responseData.main.temp,
            humidity: responseData.main.humidity,
            city: responseData.name
          },
          () => {}
        );
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
            city1: forecastData.list[0].weather[0],
            coord1: forecastData.city.coord
          },
          () => {}
        );
      });
  };

  getForecastData() {
    var week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var renderedData = [];
    for (var i = 0; i < week.length; i++) {
      renderedData.push(this.state.city1, this.state.coord1);
      console.log("boom", renderedData);
    }
  }

  //   getMap() {
  //       const googleapi = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  //       let zip = this.state.currentInput;
  //       const mapurl = "https://maps.googleapis.com/maps/api/staticmap?center=" + zip + "&zoom=11&size=350x350&key=" + googleapi;
  //       this.setState({
  //           map: mapurl,
  //       });

  // }

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
          onClick={() => console.log("You clicked me!")}
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
    this.displayMarkers();
    this.get5day();
  };

  getTime() {
    const time = new Date();
    const formattedTime = time.getHours();
    const round = formattedTime + ":00";
    return round;
  }

  getFiveDay() {
    var renderData = [];
    var week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    for (var i = 0; i < week.length; i++) {
      renderData.push(week[i]);
    }

    console.log("week1", renderData);
    var renderWeek = [];
    var data = this.state.temperature;
    for (var x = 0; x < renderData.length; x++) {
      renderWeek.push(data);
    }
    console.log("data", data);
  }

  render() {
    const { humidity, city } = this.state;
    const mapStyles = { width: "50%", height: "50%" };
    let temperature = this.state.temperature;

    console.log("temperature", temperature);
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
          <div></div>
        </div>
        {this.state.currentInput && <Week temp={temperature} />}
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          {this.displayMarkers()}
        </Map>
        <Week
          getTime={this.getTime()}
          getFiveDay={this.getFiveDay()}
          getForecastData={this.getForecastData()}
          renderData={this.state.renderData}
          formattedTime={this.state.formattedTime}
          round={this.state.round}
          renderWeek={this.state.renderWeek}
        />
      </form>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Weather);
