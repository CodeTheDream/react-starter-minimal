import React from 'react';

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: '',
            date: '',
            temperature: '',
            humidity: '',
            error: '',
        };
    }

    componentWillMount() {
        const url = this.getWeather()
        const weather = this.getWeather()
    }

    handleChange = (event) => {
            this.setState({ zipCode: event.target.zipCode });
    };

    getWeather = () => {
        const apikey = process.env.REACT_APP_ID;
        const zipcode = 27077
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + zipcode + '&APPID=' + apikey
        fetch(url)
        .then(response => response.json())
        .then(responseData => {
          console.log("data", responseData);
          const weatherdata = responseData.records;
          this.setState({ weatherdata }, () => {});
        });
    }
    
        render() {
            return (
                <form>
                    <h1>Welcome to your Weather Forecast!</h1>
                    <label>
                        Zipcode:
                    <input type="text" value={this.state.zipCode} onChange={this.handleChange} />
                    </label>
                    <h1>{this.state.weather}</h1>
                </form>
            )
        }
    
    }


export default Today;

