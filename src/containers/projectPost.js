import React from "react";
import { Container } from "./MyUserProfile/styles";
import Button from "../components/Button";
const uuid = require("uuidv4");
// import ReactDOM from "react-dom";

class ProjectPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collaborators: [],
      accepted: []
    };
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest = async e => {
    const newCollaborators = { name: "Jordan", id: uuid() };
    await this.setState({
      collaborators: [...this.state.collaborators, newCollaborators]
    });

    console.log(this.state.collaborators);
  };

  render() {
    const collaborators = this.state.collaborators.map(collaborator => {
      return (
        <div key={uuid()}>
          <li>{collaborator.name}</li>
        </div>
      );
    });

    return (
      <div>
        {/* to={`/project/${id}}` */}
        <Container>
          <h2>Project #1</h2>
          <h3>Jordan Lawanson</h3>
          <div>
            This is all you need to know about the project. ui gfhEJOWLF
            EWOIFHEWUKfn iharuebeih reuahfelajbkuwri. ewiufgefj.
          </div>
          <Button title="Request to Join" action={e => this.handleRequest(e)} />
          <div>
            Requested collaborators:
            <ul>{collaborators}</ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default ProjectPost;
