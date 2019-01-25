import React, { Component } from "react"
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom"
import { ThemeProvider } from "styled-components"
import theme from "./theme"
import Home from "./containers/Home/"
import Wall from "./containers/Wall/"
import MyUserProfile from "./containers/MyUserProfile/"
import Navbar from "./components/Navbar"
import { StyledH3 } from "./styles"
import User from "./containers/User"
import Users from "./containers/Users"
import { ApolloProvider } from "react-apollo"
import config from "./config"
import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ApolloLink } from "apollo-link"
import store from "store"

const authMiddleware = new ApolloLink((operation, forward) => {
  const user = store.get("user")
  const token = user ? user.token : null
  if (token) {
    operation.setContext({
      headers: {
        authorization: token
      }
    })
  }
  return forward(operation)
})

const client = new ApolloClient({
  link: ApolloLink.from([
    authMiddleware,
    new HttpLink({
      uri: config.graphqlUrl,
      credentials: "same-origin"
    })
  ]),
  cache: new InMemoryCache()
})

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
                <Route path="/user" component={User} />
                <Route path="/users" component={Users} />
                <Redirect to="/" />
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
