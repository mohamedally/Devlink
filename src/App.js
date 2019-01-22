import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Home from "./containers/Home/";
import Wall from "./containers/Wall/";
import userProfile from "./containers/UserProfile/";
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/wall" component={Wall} />
              <Route path="/profile" component={userProfile} />
              <Redirect to="/" />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
