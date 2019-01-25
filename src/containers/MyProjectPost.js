import React from "react"
import Button2 from "../components/Button2"
import { Container, Title3 } from "./MyUserProfile/styles"
const uuid = require("uuidv4")

class MyProjectPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collaborators: [],
      accepted: [],
      project: this.props.data
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAccept = this.handleAccept.bind(this)
    this.handleRequest = this.handleRequest.bind(this)
  }

  handleDelete = async id => {
    await this.setState({
      collaborators: this.state.collaborators.filter(
        collaborator => collaborator.id !== id
      )
    })
  }

  handleAccept = async id => {
    const newAccepts = this.state.collaborators.filter(
      collaborator => collaborator.id === id
    )

    const acceptName = newAccepts.map(e => e.name)

    await this.setState({
      collaborators: this.state.collaborators.filter(
        collaborator => collaborator.id !== id
      ),
      accepted: [...this.state.accepted, acceptName]
    })
    console.log(this.state.accepted)
  }

  handleRequest = async e => {
    const newCollaborators = { name: "Jordan Lawanson", id: uuid() }
    await this.setState({
      collaborators: [...this.state.collaborators, newCollaborators]
    })

    console.log(this.state.collaborators)
  }

  render() {
    const collaborators = this.state.collaborators.map(collaborator => {
      return (
        <div key={uuid()}>
          <li>{collaborator.name}</li>
          <Button2
            title="Accept"
            action={() => this.handleAccept(collaborator.id)}
          />
          <Button2
            title="Delete"
            action={() => this.handleDelete(collaborator.id)}
          />
        </div>
      )
    })

    const accepted = this.state.accepted.map(accepted => {
      return (
        <div key={uuid()}>
          <li>{accepted}</li>
        </div>
      )
    })

    return (
      <div>
        <Container>
          <Title3>{this.state.project.title}</Title3>
          <p />
          <div>{this.state.project.description}</div>
          <br />
          <div style={{ fontWeight: "bold" }}>
            Requested collaborators:
            <ul
              style={{
                fontWeight: "normal",
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                textAlign: "center"
              }}
            >
              {collaborators}
            </ul>
          </div>
          <div style={{ fontWeight: "bold" }}>
            Accepted collaborators:
            <ul
              style={{
                fontWeight: "normal",
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                textAlign: "center"
              }}
            >
              {accepted}
            </ul>
          </div>
        </Container>
      </div>
    )
  }
}

export default MyProjectPost
