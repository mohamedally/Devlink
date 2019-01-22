import React from "react";
import ProjectPost from "../projectPost";
import Navbar from "../../components/Navbar";
// import ReactDOM from "react-dom";

class Wall extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>devLink</h1>
        <Navbar />
        <ProjectPost />
        <ProjectPost />
        <ProjectPost />
      </React.Fragment>
    );
  }
}

export default Wall;