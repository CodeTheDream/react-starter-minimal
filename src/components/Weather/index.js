import React from "react";
import Title from "../Titles";
class Weather extends React.Component {
    
    state = {
        fullData: [],
        dailyData: []
    };

    componentDidMount = () => {
        const weatherURL =
            "http://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&APP_ID=1d80f33d31919cc397f2bf782026d6c3";

        fetch(weatherURL, process.env.APP_ID)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading =>
                    reading.dt_txt.includes("18:00:00")
                );
    
                this.setState(
                    {
                        fullData: data.list,
                        dailyData: dailyData
                    },
                    () => console.log(this.state)
                );
            });
    };
    formatTitles = () => {
        return this.state.dailyData.map((reading, index) => (
            <Title reading={reading} key={index} />
        ));
    };

    render() {
        return (
            <div className="container">
                <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                <h5 className="display-5 text-muted">New York, US</h5>
                <div className="row justify-content-center">
  
                    {this.formatTitles()}
  
                </div>
            </div>
        );
    }
}

export default Weather;
