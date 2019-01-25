import React from "react"
import Button2 from "../components/Button2"
import { Container, Title3 } from "./MyUserProfile/styles"
import { ACCEPT_REQUEST, DECLINE_REQUEST } from "../graphql/mutations"
import { Mutation } from "react-apollo"
const uuid = require("uuidv4")

class MyProjectPost extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collaborators: this.props.data.collaborators,
      accepted: [],
      project: this.props.data,
      requests: this.props.data.requests
    }
  }

  render() {
    const requests = this.state.requests.length ? (
      this.state.requests.map(request => {
        return (
          <div key={uuid()}>
            <li>{request.user.name}</li>
            <Mutation
              mutation={ACCEPT_REQUEST}
              onCompleted={() => window.location.reload()}
              variables={{
                from: request.user.id,
                projectId: this.state.project.id
              }}
            >
              {mutation => <Button2 title="Accept" action={mutation} />}
            </Mutation>
            <Mutation
              mutation={DECLINE_REQUEST}
              onCompleted={() => window.location.reload()}
              variables={{
                from: request.user.id,
                projectId: this.state.project.id
              }}
            >
              {mutation => <Button2 title="Delete" action={mutation} />}
            </Mutation>
          </div>
        )
      })
    ) : (
      <div />
    )

    const accepted = this.state.collaborators.map(accepted => {
      return (
        <div key={uuid()}>
          <li>{accepted.user.name}</li>
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
              {requests}
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
