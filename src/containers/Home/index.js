import React, { Component } from "react";
import Welcome from "../../components/Welcome";
import Button from "../../components/Button";
import SignUp from "../SignUp";
import Login from "../Login";
import { Container } from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUpComponent: false,
      showLogInComponent: false
    };

    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = e => {
    e.preventDefault();
    this.setState({
      showLogInComponent: !this.state.showLogInComponent
    });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.setState({
      showSignUpComponent: !this.state.showSignUpComponent
    });
  };

  render() {
    return (
      <React.Fragment>
        <Welcome />
        <Container>
          <div style={{ textAlign: "center" }}>
            <p />
            <Button title="Login" action={e => this.handleLogin(e)} />
            {this.state.showLogInComponent ? <Login /> : null}
            <p />
          </div>
          <React.Fragment>
          <div style={{ textAlign: "center" }}>
            <p />
            <Button title="Sign Up" action={e => this.handleSignUp(e)} />
            {this.state.showSignUpComponent ? <SignUp /> : null}
            <p />
          </div>
          </React.Fragment>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
