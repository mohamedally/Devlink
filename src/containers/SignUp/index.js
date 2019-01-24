import React, { Component } from "react";
import Select from "../../components/Select";
import ImageUpload from "../../components/ImageUpload";
import Button2 from "../../components/Button2";
import { withRouter } from "react-router-dom";

import gql from "graphql-tag"
import { Mutation } from "react-apollo";

const REGISTER_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
    	user {
        id
        name
        email
        password
        github
        zipcode
        skills
        bio
      }
    }
  }
`

// import { StateProvider } from "react-state-provider";
const skillOptions = ["Programming", "Development", "Testing", "Design"];

class SignUp extends Component {
  constructor(props) {
    super(props);

    // this.newUsersState = StateProvider.getState("newUsers");

    this.state = {
      name: "",
      email: "",
      github: "",
      zipcode: "",
      password: "",
      skills: "",
      bio: "",

      newUsers: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // componentDidMount() {
  //   this.newUsersState.observe("name");
  // }

  handleFormSubmit = async e => {
    console.log("HELLO THERE")
    // Form submission logic
    e.preventDefault();
    const userData = this.state.newUsers;

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      github: this.state.github,
      zipcode: this.state.zipcode,
      password: this.state.password,
      skills: this.state.skills,
      bio: this.state.bio
    };

    await this.setState({
      newUsers: newUser
    });
    let path = `/wall`;
    this.props.history.push(path);

    console.log(this.state.newUsers);
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log("Value", value);
    // console.log("Name", name);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p />
        <input
          className="form-input"
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* Name of the user */}
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
        <input
          className="form-input"
          type="text"
          name="github"
          value={this.state.github}
          placeholder="Your Github Link"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* Github of the user */}
        <p />
        <input
          className="form-input"
          type="text"
          name="zipcode"
          value={this.state.zipcode}
          placeholder="Zipcode"
          onChange={e => this.handleInput(e)}
        />{" "}
        {/* Zipcode of the user */}
        <p />
        <Select
          name={"skills"}
          options={skillOptions}
          multiple={true}
          value={this.state.skills}
          placeholder={"Select Skills"}
          handleChange={e => this.handleInput(e)}
        />{" "}
        {/* List of Skills (eg. Programmer, developer) */}
        <p />
        <textarea
          className="form-input"
          name="bio"
          type="text"
          value={this.state.bio}
          placeholder="Bio"
          onChange={e => this.handleInput(e)}
        />
        <p></p>
        <div>
          <ImageUpload />
        </div>
        {/* About you */}
        <p />
        <Mutation mutation = {REGISTER_USER} variables = {{ input: this.state }}>
          {(createUser, {loading, error, data}) => (
            <Button2 onClick={createUser} title="Submit"  />
          )}
          {/*Submit */}
        </Mutation>
        <p />
      </div>
    );
  }
}

export default withRouter(SignUp);

//action={e => this.handleFormSubmit(e)}
