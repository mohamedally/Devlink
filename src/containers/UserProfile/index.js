import React from "react";
import { Container } from "./styles";
// import SignUp from "../SignUp";
// import ReactDOM from "react-dom";

const UserProfile = ({ id, name, email, skills, bio, projects }) => (
  <div>
    <Container to={`/user/${id}`}>
      <h1>Jordan Lawanson</h1>
      <div>Email: jordan@me.com</div>
      <div>Skills:</div>
      <ul>
        <li>Developing</li>
        <li>Programming</li>
      </ul>
      <div>This is all you need to know about me</div>
      <div>Projects:</div>
      <ul>
        <li>Project #1</li>
        <li>Project #2</li>
      </ul>
    </Container>
  </div>
);

export default UserProfile;
