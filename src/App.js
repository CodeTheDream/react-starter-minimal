import React from "react";
import Weather from "../src/components/Weather";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCloud, faSun, faRain } from "@fortawesome/free-solid-svg-icons";

// library.add(faSun, faCloud, faRain);

class App extends React.Component {
  render() {
    return <Weather />;
  }
}

export default App;
