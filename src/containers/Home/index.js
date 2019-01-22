import React, { Component } from "react";
import Welcome from "../../components/Welcome";
import Button from "../../components/Button";

class Home extends Component {
  handleLogin = e => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <Welcome />
        <Button title="Login" onClick={e => this.handleLogin(e)}>
          Login
        </Button>
      </React.Fragment>
    );
  }
}

export default Home;
