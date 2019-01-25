import React from "react";
import { Container, Title3 } from "./MyUserProfile/styles";
import Button2 from "../components/Button2";
import { Link } from "react-router-dom";

const uuid = require("uuidv4");

class ProjectPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collaborators: [],
      project: this.props.data
    };
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest = async e => {
    const newCollaborators = { name: "Jordan Lawanson", id: uuid() };
    await this.setState({
      collaborators: [...this.state.collaborators, newCollaborators]
    });

    console.log(this.state.collaborators);
  };

  render() {
    const requests = this.state.project.requests.map(collaborator => {
      return (
        <div key={collaborator.user.id}>
          <li>
            <Link to={`/user/${collaborator.user.id}`}>
              {collaborator.user.name}
            </Link>
          </li>
        </div>
      );
    });

    const collaborators = this.props.data.collaborators.map(collaborator => {
      return (
        <div key={collaborator.user.id}>
          <li>
            <Link to={`/user/${collaborator.user.id}`}>
              {collaborator.user.name}
            </Link>
          </li>
        </div>
      );
    });

    return (
      <div>
        {/* to={`/project/${id}}` */}
        <Container>
          {/* <Query query={GET_PROJECT} variables={{id: this.props.user}}> */}
          <Title3>{this.state.project.title}</Title3>
          <p />
          <div>
            {this.state.project.description}
            <p />
          </div>
          <Button2
            title="Request to Join"
            action={e => this.handleRequest(e)}
          />
          <div>
            <p />
            <div>
              <b>Requested collaborators:</b>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                textAlign: "center"
              }}
            >
              {requests}
            </ul>
            <p />
            <div>
              <b>Accepted collaborators:</b>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0px",
                padding: "0px",
                textAlign: "center"
              }}
            >
              {collaborators}
            </ul>
          </div>
          {/* </Query> */}
        </Container>
      </div>
    );
  }
}

export default ProjectPost;
