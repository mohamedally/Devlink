import React from "react";
import { Container, Title3 } from "./MyUserProfile/styles";
import Button from "../components/Button";
import { Query } from "react-apollo";
import gql from "graphql-tag";
const uuid = require("uuidv4");

const GET_PROJECTS = gql`
  query projects {
    projects {
      id
      title
      description
      leader
      requests {
        user {
          id
          name
        }
      }
      skills {
        skill
      }
    }
  }
`;

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
    return (
      <div>
        {/* to={`/project/${id}}` */}
        <Container>
          <Title3>Project #1</Title3>
          <p />
          <div>
            This is all you need to know about the project. ui gfhEJOWLF
            EWOIFHEWUKfn iharuebeih reuahfelajbkuwri. ewiufgefj.
            <p />
          </div>
          <Button2
            title="Request to Join"
            action={e => this.handleRequest(e)}
          />
          <div>
            <p />
            <Title>Requested collaborators:</Title>
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
        </Container>
      </div>
    );
  }
}

export default ProjectPost;
