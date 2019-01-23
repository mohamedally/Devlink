import React, { Component } from "react";
import Button from "../../components/Button";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      }
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit = e => {
    // Form submission logic
    e.preventDefault();
    const userData = this.state.user;
    let path = `/wall`;
    this.props.history.push(path);
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      };
    });
  };

  //   handlePassword = e => {};

  render() {
    return (
      <div>
        <input
          className="form-input"
          type="text"
          name="email"
          value={this.state.user.email}
          placeholder="E-mail"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* email of the user */}
        <input
          className="form-input"
          name="password"
          type="text"
          value={this.state.user.password}
          placeholder="Password"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* password of the user */}
        <Button title="Submit" action={e => this.handleFormSubmit(e)} />{" "}
        {/*Submit */}
      </div>
    );
  }
}

export default withRouter(Login);
