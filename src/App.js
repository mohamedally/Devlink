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
import User from "./containers/User";
import Users from "./containers/Users";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import config from "./config";

const client = new ApolloClient({
  uri: config.graphqlUrl
});

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <StyledH3>devLink™</StyledH3>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/wall" component={Wall} />
                <Route path="/profile" component={MyUserProfile} />
                <Route path="/user/:id" component={User} />
                <Route path="/users" component={Users} />
                <Redirect to="/" />
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
