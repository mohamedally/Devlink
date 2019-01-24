import React from "react";
import { Container, StyledLink } from "./styles";

const Navbar = () => (
  <Container>
    <StyledLink to="/profile">My Profile</StyledLink>
    <StyledLink to="/wall">Wall</StyledLink>
    <StyledLink to="/users">Users</StyledLink>
    <StyledLink to="/">Log Out</StyledLink>
  </Container>
);

export default Navbar;
