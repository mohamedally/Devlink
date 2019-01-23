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
import MyUserProfile from "./containers/MyUserProfile/";
import Navbar from "./components/Navbar";
import { StyledH3 } from "./styles";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
          <StyledH3>devLink</StyledH3>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/wall" component={Wall} />
              <Route path="/profile" component={MyUserProfile} />
              {/* <Redirect to="/" /> */}
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
