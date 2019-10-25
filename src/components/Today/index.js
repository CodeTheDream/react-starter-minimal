import React from "react";
import Week from "../../components/Week"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../../assets/styles/_Week.scss"
import { thisTypeAnnotation } from "@babel/types";

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
      city: '',
      map: '',
      marker: '',
      fahren: '',
      zipcodes: [{lat: 47.49855629475769, lng: -122.14184416996333},
        {latitude: 47.359423, longitude: -122.021071},
        {latitude: 47.2052192687988, longitude: -121.988426208496},
        {latitude: 47.6307081, longitude: -122.1434325},
        {latitude: 47.3084488, longitude: -122.2140121},
        {latitude: 47.5524695, longitude: -122.0425407}]
    };
  }

  componentWillMount() {
    //this.getWeather();
    }
    
  setUserInput = (e) => {
    this.setState({ currentInput: e.target.value });
    console.log("currentInput", this.state.currentInput)
  };
  
  getWeather = () => {
    const apikey = process.env.REACT_APP_ID;
    let zip = this.state.currentInput;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&APPID=" + apikey;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        console.log("data", responseData);
        this.setState({
            temperature: responseData.main.temp,
            humidity: responseData.main.humidity,
            city: responseData.name,
            
          }, () => { });
      });
  };
  
  get5day = () => {
    const apikey = process.env.REACT_APP_ID;
    let zip = this.state.currentInput;
    const url =
      "https://api.openweathermap.org/data/2.5/forecast?q=" + zip + "&APPID=" + apikey;
    fetch(url)
      .then(response => response.json())
      .then(responseData => {
        console.log("data", responseData);
        this.setState({
            temperature: responseData.main.temp,
            humidity: responseData.main.humidity,
            city: responseData.name,
            
          }, () => { });
      });
    };
    
  //   getMap() {
  //       const googleapi = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  //       let zip = this.state.currentInput;
  //       const mapurl = "https://maps.googleapis.com/maps/api/staticmap?center=" + zip + "&zoom=11&size=350x350&key=" + googleapi;
  //       this.setState({
  //           map: mapurl,
  //       });

  // }
  
  displayMarkers = (e) => {
    return this.state.zipcodes.map((zipcode, index) => {
      return <Marker key={index} id={index} position={{
        lat: zipcode.latitude,
        lng: zipcode.longitude
      }}
        onClick={() => console.log("You clicked me!")} />
    })
  }
  getTemp(k) {
    let kelvin = k - 273.15;
    let farenheit = kelvin * 9 / 5 + 32;
    let solution = Math.round(farenheit * 10) / 10;
    return solution
  }

    submit = (e) => {
      e.preventDefault();
      this.getWeather()
      this.displayMarkers();
    };

  render() {
    const { humidity, city, fahren } = this.state
    // const humidity = this.state.humidity;
    // const city = this.state.city;
    // const temperature = this.state.temperature;
    // const fahren = this.state
    const mapStyles = { width: '50%', height: '50%', };
    let temperature = this.state.temperature

    console.log("temperature", temperature)
    return (
      <form className="wholeform">
        <h1>Welcome to your Weather Forecast!</h1> 
        <label>
          Zipcode:
          <input type="text" onChange={this.setUserInput} value={this.state.currentInput}/>
        </label>
        <button type="submit" onClick={(e) => this.submit(e)}>
          Submit
        </button>
        <div>
          <h3>City</h3>
            <div>{city}</div>
          <h3>Temperature</h3>
          <div>{this.state.temperature && this.getTemp(this.state.temperature)}</div>
          <h3>Humidity</h3>
            <div>{humidity}</div>   
          <h3>Time</h3>
            <div></div>
        </div>  
        { this.state.currentInput && <Week temp={temperature} />}
        <Map google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}>
              {this.displayMarkers()}
        </Map>
        
      </form>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCNK2c8CXB0r8b8nYSZnNp5zFEIUJo2gvo',
})(Today);
