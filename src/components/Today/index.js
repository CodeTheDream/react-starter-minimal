import React from 'react';

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            date: '',
            temperature: '',
            humidity: '',
            error: '',
            location: '',
        };
    }

    componentWillMount() {
        const url = this.getWeather()
    }

    handleUserInput = event => {
        let userInput = event.target.value;
        this.setState({ userZip: userInput });
    };


    getWeather = () => {
        const apikey = process.env.REACT_APP_ID;
        let zip = this.state.userZip
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + zip + '&APPID=' + apikey
        fetch(url)
        .then(response => response.json())
        .then(responseData => {
          console.log("data", responseData);
          this.setState({ location:responseData.city }, () => {});
        });
    }

    submit = () => {
        this.getWeather();
    }
    
        render() {
            return (

                    <form>
                    <h1>Welcome to your Weather Forecast!</h1>
                    <label>
                        Zipcode:
                    <input type="text" onChange={this.handleUserInput}/>
                    </label>
                        <button type="submit" onClick={() => this.submit()}>Submit</button>

                        <h3>Weather Report</h3> 
                    </form>

            )
        }
    
    }


export default Today;

