import React from 'react';

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: undefined,
            temperature: undefined,
            humidity: undefined,

        };
    }

    componentWillMount() {
        console.log("say hello")
        const url = this.getZipcode()
        //this. because not inside component did mount outside scope
    }

    handleChange = (event) => {
            this.setState({zipCode: event.target.zipCode });
    };

    getZipcode = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=${zipCode}&APPID=${process.env.APP_ID}');

    }
    
        render() {
            return (
                <form>
                    <h1>Welcome to your Weather Forecast!</h1>
                    <label>
                        Zipcode:
                    <input type="text" value={this.state.zipCode} onChange={this.handleChange} />
                    </label>
                </form>
            )
        }
    
    }


export default Today;

