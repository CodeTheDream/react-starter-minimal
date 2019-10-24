import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Mapping extends React.Component {
    render() {
        const mapStyles = {
            width: '50%',
            height: '50%',
        };
    
        return (
            <Map google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }} 
                
                />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCPdeep_fj0HxWImmQ6tZd7DFCBQhOAeqw'
})(Mapping);
