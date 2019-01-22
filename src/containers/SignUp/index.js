import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/* Import Components */
// import CheckBox from '../components/CheckBox';
// import Input from '../components/Input';
// import TextArea from '../components/TextArea';
import Select from "../../components/Select";
import Button from "../../components/Button";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        email: "",
        password: "",
        skills: "",
        bio: ""
      },

      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit = e => {
    // Form submission logic
    e.preventDefault();
    let userData = this.state.newUser;
    let path = `/wall`;
    this.props.history.push(path);
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        newUser: {
          ...prevState.newUser,
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
          name="name"
          value={this.state.newUser.name}
          placeholder="Name"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* Name of the user */}
        <input
          className="form-input"
          type="text"
          name="email"
          value={this.state.newUser.email}
          placeholder="E-mail"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* email of the user */}
        <input
          className="form-input"
          name="password"
          type="text"
          value={this.state.newUser.password}
          placeholder="Password"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* password of the user */}
        <Select
          name={"skills"}
          options={this.state.skillOptions}
          multiple={true}
          value={this.state.newUser.skills}
          placeholder={"Select Skills"}
          handleChange={e => this.handleInput(e)}
        />{" "}
        {/* List of Skills (eg. Programmer, developer) */}
        <textarea
          className="form-input"
          name="bio"
          type="text"
          value={this.state.newUser.bio}
          placeholder="Bio"
          onChange={e => this.handleInput(e)}
        />
        {/* About you */}
        <Button title="Submit" action={e => this.handleFormSubmit(e)} />{" "}
        {/*Submit */}
      </div>
    );
  }
}

export default withRouter(SignUp);
