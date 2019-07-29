import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Dashboard from "./containers/Dashboard";
import * as ROUTES from "./constants/routes";


function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Route exact path={ROUTES.HOME} component={Dashboard} />
          <Footer />
        </Router>
    </div>
  );
}

export default App;

