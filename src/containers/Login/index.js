import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Button2 from "../../components/Button2"
//import LOGIN_USER from "../../graphql/mutations"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(password: $password, email: $email) {
      user {
        id
        name
        email
        github
        bio
        city
        country
        zipcode
      }
      token
      error {
        message
      }
    }
  }
`

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      user: {},
      error: ""
    }

    this.loginComplete = this.loginComplete.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  /* This life cycle hook gets executed when the component mounts */

  loginComplete = async data => {
    if (data.loginUser.error) {
      await this.setState({
        error: data.loginUser.error.message
      })

      return false
    }

    await this.setState({
      user: data.loginUser.token
    })

    localStorage.setItem("auth_token", data.loginUser.token)

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
    const { email, password, name, error } = this.state

    return (
      <div>
        <p />
        {error && <div> {error}</div>}
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
        <div className="login">
          <Mutation
            mutation={LOGIN_USER}
            variables={{ email, password, name }}
            onCompleted={data => this.loginComplete(data)}
          >
            {mutation => (
              <input type="submit" value="submit" onClick={mutation} />
            )}
          </Mutation>
        </div>
        {/* <Button2 title="Submit" action={e => this.handleFormSubmit(e)} />{" "} */}
        {/*Submit */}
        <p />
      </div>
    )
  }
}

export default withRouter(Login)
