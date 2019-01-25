import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button2 from "../../components/Button2";

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      user: {}
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit = async e => {
    // Form submission logic
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    await this.setState({
      user: user
    })

    let path = `/wall`
    this.props.history.push(path)
  }

  handleInput = e => {
    let value = e.target.value
    let name = e.target.name
    this.setState({ [name]: value })
  }

  //   handlePassword = e => {};

  render() {
    return (
      <div>
        <p />
        <input
          className="form-input"
          type="text"
          name="email"
          value={this.state.email}
          placeholder="E-mail"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* email of the user */}
        <p />
        <input
          className="form-input"
          name="password"
          type="text"
          value={this.state.password}
          placeholder="Password"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* password of the user */}
        <p />
        <Button2 title="Submit" action={e => this.handleFormSubmit(e)} />{" "}
        {/*Submit */}
        <p />
      </div>
    )
  }
}

export default withRouter(Login)
