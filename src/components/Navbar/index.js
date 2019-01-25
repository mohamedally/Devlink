import React, { Component } from "react"
import { Container, StyledLink } from "./styles"
import { withRouter } from "react-router"
import store from "store"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  logout = () => {
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user")
    store.clearAll()
    this.props.history.push("/")
  }

  render() {
    return (
      <Container>
        <StyledLink to="/profile">My Profile</StyledLink>
        <StyledLink to="/wall">Wall</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
        <StyledLink as="div" onClick={() => this.logout()}>
          Log Out
        </StyledLink>
      </Container>
    )
  }
}

export default withRouter(Navbar)
