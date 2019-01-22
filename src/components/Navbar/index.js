import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import ReactDOM from "react-dom";
import React from "react";
import UserProfile from "../../containers/UserProfile";
import Wall from "../../containers/Wall";
import { Container, StyledLink } from './styles'

const Navbar = () => (
  <Container>
    <StyledLink to="/profile">My Profile</StyledLink>
    <StyledLink to="/wall">Wall</StyledLink>
  </Container>
)

export default Navbar
