import React from "react";
import { Container, Title3 } from "./MyUserProfile/styles";
import Button from "../components/Button";
const uuid = require("uuidv4");
// import ReactDOM from "react-dom";

class ProjectPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collaborators: []
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
          <Title3>Project #1</Title3>
          <p></p>
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
