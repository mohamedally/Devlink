import React, { Component } from "react"
import Select from "../../components/Select"
import ImageUpload from "../../components/ImageUpload"
import Button2 from "../../components/Button2"
import { withRouter } from "react-router-dom"

import gql from "graphql-tag"
import { Mutation } from "react-apollo";

const REGISTER_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
    	user {
        id
        name
        email
        github
        zipcode
        bio
      }
    }
  }
`

// import { StateProvider } from "react-state-provider";
const skillOptions = ["Programming", "Development", "Testing", "Design"]

class SignUp extends Component {
  constructor(props) {
    super(props)

    // this.newUsersState = StateProvider.getState("newUsers");

    this.state = {
      name: "",
      email: "",
      github: "",
      zipcode: "",
      password: "",
      //skills: "",
      bio: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  // componentDidMount() {
  //   this.newUsersState.observe("name");
  // }

  handleFormSubmit = async data => {
    // Form submission logic
  
    console.log(data)
    let path = `/wall`;
    this.props.history.push(path);
  };

  handleInput = e => {
    let value = e.target.value
    let name = e.target.name
    this.setState({ [name]: value })
  }

  render() {
    console.log(this.props.from)
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
        {/*<Select
          name={"skills"}
          options={skillOptions}
          multiple={true}
          value={this.state.skills}
          placeholder={"Select Skills"}
          handleChange={e => this.handleInput(e)}
        />{" "} */}
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
        <p />
        <div>
          <ImageUpload />
        </div>
        {/* About you */}
        <p />
        <Mutation mutation = {REGISTER_USER} variables = {{ input: this.state }} onCompleted={(data) => this.handleFormSubmit(data)}>
          {createUser => (
            <input type="submit" value="submit" onClick={createUser} />
          )}
        </Mutation>
        <p />
      </div>
    )
  }
}

export default withRouter(SignUp)
