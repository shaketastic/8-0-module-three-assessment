import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import Nav from "./components/Nav";
import People from "./components/People";

class App extends Component {
    render() {
      return (
        <div className="app">
          <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/people" component={People} />
            <Route path="/locations" component={Locations} />
          </Switch>
          {/* <main>
          </main> */}
        </div>
      </div>
      );
    }
}

export default App;