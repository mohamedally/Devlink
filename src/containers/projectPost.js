import React from "react";
import { Container, Title3 } from "./MyUserProfile/styles";
import Button from "../components/Button";
import gql from "graphql-tag";
import Button2 from "../components/Button2";
import { Title } from "./Wall/styles";
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
    const collaborators = this.state.collaborators.map(collaborator => {
      return (
        <div key={uuid()}>
          <li>{collaborator.name}</li>
        </div>
      );
    });

    // const collaborators = this.state.project.collaborators.map(collaborator => {
    //   return (
    //     <div key={collaborator.user.id}>
    //       <li>
    //         <StyledLink to={`/user/${collaborator.user.id}`}>
    //           {collaborator.user.name}
    //         </StyledLink>
    //       </li>
    //     </div>
    //   );
    // });

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
              {collaborators}
            </ul>
            <p />
            <div>
              <b>Accepted collaborators:</b>
            </div>
          </div>
          {/* </Query> */}
        </Container>
      </div>
    );
  }
}

export default ProjectPost;
