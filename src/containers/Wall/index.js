import React from "react"
import Button from "../../components/Button"
import { StyledLink } from "../../components/Navbar/styles"
import { Container, Container2, Title, Name, People, ThreadTitle } from "./styles"
import Button2 from "../../components/Button2"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { COLLABORATE_REQUEST, CREATE_PROJECT } from "../../graphql/mutations"
import { GET_PROJECTS, GET_USER } from "../../graphql/queries"
import { Link } from "react-router-dom"
import config from "../../config"

const uuid = require("uuidv4")
const jwt = require("jsonwebtoken")

class Wall extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectTitle: "",
      projectDescription: "",
      newPosts: [],
      collaborators: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleRequest = this.handleRequest.bind(this)
  }

  handleRequest = async e => {
    const newCollaborators = { name: "Jordan Lawanson", id: uuid() }
    await this.setState({
      collaborators: [...this.state.collaborators, newCollaborators]
    })
  }

  handleFormSubmit = async () => {
    //Form submission logic
    // const newPost = {
    //   projecttitle: this.state.projectTitle,
    //   username: "You",
    //   projectdescription: this.state.projectDescription
    // }
    // await this.setState({
    //   newPosts: [newPost, ...this.state.newPosts]
    // })
    window.location.reload()
  }

  handleInput = e => {
    let value = e.target.value
    let name = e.target.name
    this.setState({ [name]: value })
  }

  render() {
    const token = localStorage.getItem("auth_token")
    const user = token ? jwt.verify(token, config.tokenSecret).id : ""
    const newCollaborators = this.state.collaborators.map(collaborator => {
      return (
        <div key={uuid()}>
          <li>{collaborator.name}</li>
        </div>
      )
    })

    return (
      <React.Fragment>
        <Container>
          <ThreadTitle>Post Project</ThreadTitle>
          <p />
          <input
            className="form-input"
            name="projectTitle"
            type="text"
            value={this.state.projectTitle}
            style={{
              borderColor: "purple",
              borderRadius: "3px",
              borderWidth: "1px"
            }}
            placeholder="Project Title"
            onChange={e => this.handleInput(e)}
          />
          <p />
          <textarea
            className="form-input"
            type="text"
            name="projectDescription"
            rows="5"
            cols="50"
            style={{ borderColor: "purple", borderRadius: "5px" }}
            value={this.state.projectDescription}
            placeholder="Project Description"
            onChange={e => this.handleInput(e)}
          />{" "}
          <p />
          <Mutation
            mutation={CREATE_PROJECT}
            onCompleted={() => this.handleFormSubmit()}
            variables={{
              input: {
                title: this.state.projectTitle,
                description: this.state.projectDescription
              }
            }}
          >
            {mutation => <Button title="Add Post" action={mutation} />}
          </Mutation>
          <p />
          <ThreadTitle>Project Thread:</ThreadTitle>
          <p />
        </Container>
        <Container2>
          <ul
            style={{
              listStyle: "none",
              margin: "0px",
              padding: "0px",
            }}
          />
          <ul>
            <Query query={GET_PROJECTS}>
              {({ loading, error, data }) => {
                if (loading) return "Loading..."
                if (error) return "Error!"
                return data.projects.map(project => (
                  <li key={project.id}>
                    <div>
                      <Title>{project.title}</Title>
                    </div>
                    <div>
                      <StyledLink to={`/user/${project.leader}`}>
                        <Name>
                          {console.log(project.leader)}
                          <Query
                            query={GET_USER}
                            variables={{
                              id: project.leader
                            }}
                          >
                            {({ loading, error, data }) => {
                              if (loading) return "Loading..."
                              if (error) return "Error!"
                              return <div>{data.user.name}</div>
                            }}
                          </Query>
                        </Name>
                      </StyledLink>
                    </div>
                    <div>{project.description}</div>
                    <div>
                      <People>
                        <b>Skills Needed:</b>
                      </People>
                      <ul
                        style={{
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        {project.skills.map(skill => (
                          <li key={skill.id}>{skill.skill}</li>
                        ))}
                      </ul>
                    </div>
                    <p />
                    {user !== project.leader && (
                      <Mutation
                        mutation={COLLABORATE_REQUEST}
                        variables={{
                          projectId: project.id
                        }}
                        onCompleted={data => console.log(data)}
                      >
                        {(collaborateRequest, { data }) => (
                          <Button2
                            title="Request to Join"
                            action={collaborateRequest}
                          />
                        )}
                      </Mutation>
                    )}
                    <p />
                    <div>
                      <People>
                        <b>Accepted Collaborators:</b>
                      </People>
                      <ul
                        style={{
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        {project.collaborators.map(collaborator => (
                          <li key={collaborator.user.id}>
                            <Link to={`/user/${collaborator.user.id}`}>
                              {collaborator.user.name}
                            </Link>{" "}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p />
                    <div>
                      <People>
                        <b>Requested collaborators:</b>
                      </People>
                      <ul
                        style={{
                          listStyle: "none",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        {project.requests.map(collaborator => (
                          <li key={collaborator.user.id}>
                            <Link to={`/user/${collaborator.user.id}`}>
                              {collaborator.user.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p />
                  </li>
                ))
              }}
            </Query>
          </ul>
        </Container2>
      </React.Fragment>
    )
  }
}

export default Wall
