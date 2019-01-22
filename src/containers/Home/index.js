import React, { Component } from "react";
import Welcome from "../../components/Welcome";
import Button from "../../components/Button";
import SignUp from "../SignUp";
import Login from "../Login";

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
      showLogInComponent: true
    });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.setState({
      showSignUpComponent: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <Welcome />
        <div>
          <Button title="Login" action={e => this.handleLogin(e)} />
          {this.state.showLogInComponent ? <Login /> : null}
        </div>
        <div>
          <Button title="Sign Up" action={e => this.handleSignUp(e)} />
          {this.state.showSignUpComponent ? <SignUp /> : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
