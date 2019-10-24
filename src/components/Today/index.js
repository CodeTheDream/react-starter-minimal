import React from "react";
import Week from "../../components/Week"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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
      "https://api.openweathermap.org/data/2.5/weather?q=" + zip + "&APPID=" + apikey;
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
  
  // displayMarkers = (e) => {
  //   return this.state.marker.map((zipcode, index)) => {
  //     return <Marker key={index} id={index} position={{
  //       lat: e.target.value.latitude,
  //       lng: e.target.value.longitude
  //     }}
  //     onClick={() => console.log("you clicked me!")} />
  //   })
  // }
 
    submit = (e) => {
      e.preventDefault()
      this.getWeather();

    };

    render() {
        const temperature = ((this.state.temperature - 273.15) * 9 / 5 + 32);
        const humidity = this.state.humidity;
        const city = this.state.city;
        const mapStyles = { width: '50%', height: '50%',};
 
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
        <div>
            <h3>City</h3>
                <div>{city}</div>
            <h3>Temperature in F</h3>
          <div> {temperature.toFixed(3)}</div>
            <h3>Humidity</h3>
                <div>{humidity}</div>   
            <h3>Time</h3>
                <div></div>
        </div>  
        <Week />
        <Map google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }} 
                />
      </form>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCPdeep_fj0HxWImmQ6tZd7DFCBQhOAeqw'
})(Today);
