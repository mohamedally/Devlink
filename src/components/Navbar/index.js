import React from 'react'
import { Container, StyledLink } from './styles'

const Navbar = () => (
  <Container>
    <StyledLink to="/profile">My Profile</StyledLink>
    <StyledLink to="/wall">Wall</StyledLink>
  </Container>
)

export default Navbar

