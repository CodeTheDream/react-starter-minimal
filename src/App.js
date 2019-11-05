import React from 'react';
import Weather from "../src/components/Weather"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faSun, faCloud);

class App extends React.Component {
    render() {
        return (
            <Weather />
        )
    }
}

export default App;