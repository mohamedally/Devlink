import React from "react";
import { Container, Title3 } from "./MyUserProfile/styles";
import Button2 from "../components/Button2";
import { Link } from "react-router-dom";
import { Container2 } from "./Wall/styles";

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

    const newCollaborators = this.state.collaborators.map(collaborator => {
      return (
        <div key={uuid()}>
          <li>
            <Link to="/profile">{collaborator.name}</Link>
          </li>
        </div>
      );
    });

    return (
      <div>
        {/* to={`/project/${id}}` */}
        <Container2>
          {/* <Query query={GET_PROJECT} variables={{id: this.props.user}}> */}
          <Title3 style={{ justifyContent: "center" }}>
            {this.state.project.title}
          </Title3>
          <p />
          <div>
            {this.state.project.description}
            <p />
          </div>
          <p />
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
                textAlign: "left"
              }}
            >
              {newCollaborators}
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
                textAlign: "left"
              }}
            >
              {collaborators}
            </ul>
          </div>
          {/* </Query> */}
        </Container2>
      </div>
    );
  }
}

export default ProjectPost;
