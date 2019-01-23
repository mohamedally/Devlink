import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import ReactDOM from "react-dom";
import React from "react";
import MyUserProfile from "../../containers/MyUserProfile";
import Wall from "../../containers/Wall";
import { Container, StyledLink } from "./styles";

const Navbar = () => (
  <Container>
    <StyledLink to="/profile">My Profile</StyledLink>
    <StyledLink to="/wall">Wall</StyledLink>
  </Container>
);

export default Navbar;
