import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/* Import Components */
// import CheckBox from '../components/CheckBox';
// import Input from '../components/Input';
// import TextArea from '../components/TextArea';
import Select from "../../components/Select";
import Button from "../../components/Button";
import ImageUpload from "../../components/ImageUpload";
import Button2 from "../../components/Button2";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        email: "",
        github: "",
        zipcode: "",
        password: "",
        skills: "",
        bio: ""
      },

      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleFormSubmit = e => {
    // Form submission logic
    e.preventDefault();
    const userData = this.state.newUser;
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
      <div style={{ textAlign: "center" }}>
        <p />
        <input
          className="form-input"
          type="text"
          name="name"
          value={this.state.newUser.name}
          placeholder="Name"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* Name of the user */}
        <p />
        <input
          className="form-input"
          type="text"
          name="email"
          value={this.state.newUser.email}
          placeholder="E-mail"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* email of the user */}
        <p />
        <input
          className="form-input"
          name="password"
          type="text"
          value={this.state.newUser.password}
          placeholder="Password"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* password of the user */}
        <p />
        <input
          className="form-input"
          type="text"
          name="github"
          value={this.state.newUser.github}
          placeholder="Your Github Link"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* Github of the user */}
        <p />
        <input
          className="form-input"
          type="text"
          name="zipcode"
          value={this.state.newUser.zipcode}
          placeholder="Zipcode"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* Zipcode of the user */}
        <p />
        <Select
          name={"skills"}
          options={this.state.skillOptions}
          multiple={true}
          value={this.state.newUser.skills}
          placeholder={"Select Skills"}
          handleChange={e => this.handleInput(e)}
        />{" "}
        {/* List of Skills (eg. Programmer, developer) */}
        <p />
        <textarea
          className="form-input"
          name="bio"
          type="text"
          value={this.state.newUser.bio}
          placeholder="Bio"
          onChange={e => this.handleInput(e)}
        />
        <div>
          <ImageUpload />
        </div>
        {/* About you */}
        <p />
        <Button2 title="Submit" action={e => this.handleFormSubmit(e)} />{" "}
        {/*Submit */}
        <p />
      </div>
    );
  }
}

export default withRouter(SignUp);
