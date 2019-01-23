import React from "react";
import ProjectPost from "./projectPost";
import Button from "../components/Button";
import { Container, Title } from "./MyUserProfile/styles";
const uuid = require("uuidv4");

class MyProjectPost extends ProjectPost {
  constructor(props) {
    super(props);

    this.state = {
      collaborators: [],
      accepted: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleDelete = async id => {
    await this.setState({
      collaborators: this.state.collaborators.filter(
        collaborator => collaborator.id !== id
      )
    });
  };

  handleAccept = async id => {
    const newAccepts = this.state.collaborators.filter(
      collaborator => collaborator.id === id
    );

    const acceptName = newAccepts.map(e => e.name);

    await this.setState({
      collaborators: this.state.collaborators.filter(
        collaborator => collaborator.id !== id
      ),
      accepted: [...this.state.accepted, acceptName]
    });
    console.log(this.state.accepted);
  };

  render() {
    const collaborators = this.state.collaborators.map(collaborator => {
      return (
        <div key={uuid()}>
          <li>{collaborator.name}</li>
          <Button
            title="Accept"
            action={() => this.handleAccept(collaborator.id)}
          />
          <Button
            title="Delete"
            action={() => this.handleDelete(collaborator.id)}
          />
        </div>
      );
    });

    const accepted = this.state.accepted.map(accepted => {
      return (
        <div key={uuid()}>
          <li>{accepted}</li>
        </div>
      );
    });

    return (
      <div>
        {/* to={`/project/${id}}` */}
        <Container>
          <Title>Project #1</Title>
          <div>
            This is all you need to know about the project. ui gfhEJOWLF
            EWOIFHEWUKfn iharuebeih reuahfelajbkuwri. ewiufgefj.
          </div>
          <Button title="Request to Join" action={e => this.handleRequest(e)} />
          <div>
            Requested collaborators:
            <ul>{collaborators}</ul>
          </div>
          <div>
            Accepted collaborators:
            <ul>{accepted}</ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default MyProjectPost;
