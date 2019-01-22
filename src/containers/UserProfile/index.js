import React from "react";
import { Container } from "./styles";
import ProjectPost from "../projectPost";
// import SignUp from "../SignUp";
// import ReactDOM from "react-dom";

const UserProfile = ({ id, name, email, skills, bio, projects }) => (
  <div>
    <Container to={`/user/${id}`}>
      <h1>Jordan Lawanson</h1>
      <div>Email: jordan@me.com</div>
      <div>
        Github: <a href="https://github.com/jlawanson">github.com/jlawanson</a>
      </div>
      <div>Cambridge, MA</div>
      <div>Skills:</div>
      <ul>
        <li>Developing</li>
        <li>Programming</li>
      </ul>
      <div>This is all you need to know about me</div>
      <div>Projects:</div>
      <ul>
        <li>
          <ProjectPost />
        </li>
        <li>
          <ProjectPost />
        </li>
      </ul>
    </Container>
  </div>
);

export default UserProfile;
