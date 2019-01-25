import React from "react"
import { Container, Title, Title2, Name } from "./styles"
import MyProjectPost from "../MyProjectPost"
import SignUp from "../SignUp"
import Button2 from "../../components/Button2"
import { Redirect } from "react-router-dom"
import config from "../../config"
import { Query, Mutation } from "react-apollo"
import GET_USER from "../../graphql/queries"
import gql from "graphql-tag"

require("dotenv").load()
const jwt = require("jsonwebtoken")

class MyUserProfile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showEditComponent: false,
      user: {}
    }

    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit = e => {
    e.preventDefault()
    this.setState({
      showEditComponent: !this.state.showEditComponent
    })
  }

  render() {
    const token = localStorage.getItem("auth_token")
    if (!token) {
      alert("You must be logged in")
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location }
          }}
        />
      )
    }

    const decoded = jwt.verify(token, config.tokenSecret)
    const userId = decoded.id

    return (
      <div>
        <Container>
          <Query query={GET_USER} variables={{ id: userId }}>
            {({ loading, error, data }) => {
              if (loading) {
                return "loading ...."
              }
              if (error) {
                return error
              }
              if (data) {
                return (
                  <div>
                    <Name>{data.user.name}</Name>
                    <br />
                    <Title>
                      Email: <br />
                      <br />
                      <div style={{ fontWeight: "normal" }}>
                        {data.user.email}
                      </div>
                    </Title>
                    <Title>
                      Github: <br /> <br />
                      <a
                        href={data.user.github}
                        style={{ color: "purple", fontWeight: "normal" }}
                      >
                        {data.user.github}
                      </a>
                    </Title>
                    <Title>
                      Location: <br /> <br />
                      <div style={{ fontWeight: "normal" }}>
                        {data.user.city}
                      </div>
                    </Title>
                    <Title>Skills:</Title>
                    <ul
                      style={{
                        listStyle: "none",
                        margin: "0px",
                        padding: "0px",
                        textAlign: "center"
                      }}
                    >
                      <li>Developing</li>
                      <li>Programming</li>
                    </ul>
                    <br />
                    <Title>
                      Bio: <br /> <br />
                      <div style={{ fontWeight: "normal" }}>
                        {data.user.bio}
                      </div>
                    </Title>
                    <div style={{ textAlign: "center" }}>
                      <Button2
                        title="Edit Profile"
                        action={e => this.handleEdit(e)}
                      />
                      {this.state.showEditComponent ? (
                        <SignUp from={this.props.location} />
                      ) : null}
                    </div>
                    <p />
                    <Title2>Projects:</Title2>
                    <ul
                      style={{
                        listStyle: "none",
                        margin: "0px",
                        padding: "0px",
                        textAlign: "center"
                      }}
                    >
                      {data.user.projects.map(project => (
                        <li key={project.id}>
                          <MyProjectPost user={userId} data={project} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
            }}
          </Query>
        </Container>
      </div>
    )
  }
}

export default MyUserProfile
