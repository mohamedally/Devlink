import React from "react";
import ProjectPost from "../projectPost";
// import ReactDOM from "react-dom";

class Wall extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProjectPost />
        <ProjectPost />
        <ProjectPost />
      </React.Fragment>
    );
  }
}

export default Wall;