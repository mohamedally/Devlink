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
<<<<<<< HEAD
          <div>
            <p />
            <Button title="Login" action={e => this.handleLogin(e)} />
=======
          <div style={{textAlign: "center"}}>
            <p></p>
            <Button title="Login" action={e => this.handleLogin(e)}/>
>>>>>>> a7363efa032bc5bd4bf7a97ee6a4d1e1ca1c8f3e
            {this.state.showLogInComponent ? <Login /> : null}
            <p />
          </div>
<<<<<<< HEAD
          <div>
            <p />
=======
          <div style={{textAlign: "center"}}>
            <p></p>
>>>>>>> a7363efa032bc5bd4bf7a97ee6a4d1e1ca1c8f3e
            <Button title="Sign Up" action={e => this.handleSignUp(e)} />
            {this.state.showSignUpComponent ? <SignUp /> : null}
            <p />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
