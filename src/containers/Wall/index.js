import React from "react";
import Button from "../../components/Button";
import { StyledLink } from "../../components/Navbar/styles";
import { Link } from "react-router-dom";
import {
  Container,
  Container2,
  Title,
  Name,
  People,
  ThreadTitle
} from "./styles";
import Button2 from "../../components/Button2";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import GET_USER from "../../graphql/queries";
const uuid = require("uuidv4");

const ADD_REQUEST = gql`
  mutation collaborateRequest($projectId: ID!) {
    collaborateRequest(projectId: $projectId) {
      message
      error {
        message
      }
    }
  }
`;

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
      collaborators {
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

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showAddComponent: false,
      projectTitle: "",
      projectDescription: "",
      newPosts: [],
      collaborators: []
    };
    // this.handleAddPost = this.handleAddPost.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  // handleAddPost = async e => {
  //   e.preventDefault();
  //   await this.setState({
  //     showAddComponent: !this.state.showAddComponent
  //   });
  // };

  handleRequest = async e => {
    const newCollaborators = { name: "Jordan Lawanson", id: uuid() };
    await this.setState({
      collaborators: [...this.state.collaborators, newCollaborators]
    });

    console.log(this.state.collaborators);
  };

  handleFormSubmit = async e => {
    // Form submission logic
    const newPost = {
      projecttitle: this.state.projectTitle,
      username: "Yooni Park",
      projectdescription: this.state.projectDescription
    };
    // console.log(newPost);
    await this.setState({
      newPosts: [...this.state.newPosts, newPost]
    });
    console.log(this.state.newPosts);
  };

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log("Value", value);
    // console.log("Name", name);
    this.setState({ [name]: value });
  };

  render() {
    const newCollaborators = this.state.collaborators.map(collaborator => {
      return (
        <div key={uuid()}>
          <li>{collaborator.name}</li>
        </div>
      );
    });

    const posts = this.state.newPosts.map(post => {
      return (
        <li key={uuid()}>
          <div>
            <Title>{post.projecttitle}</Title>
          </div>
          <div>
            <StyledLink to="/profile">
              <Name>Leader</Name>
            </StyledLink>
          </div>
          <div>{post.projectdescription}</div>
          <p />
          <Button2
            title="Request to Join"
            action={e => this.handleRequest(e)}
          />
          <p />
          <div>
            <People>Requested collaborators:</People>
            <ul
              style={{
                listStyle: "none",
                margin: "0px",
                padding: "0px"
              }}
            >
              {newCollaborators}
            </ul>
          </div>
          <p />
        </li>
      );
    });
    // console.log(posts);

    return (
      <React.Fragment>
        {/* <Button title="Add Post" action={e => this.handleFormSubmit(e)} /> */}
        {/* {this.state.showAddComponent ? <AddPost /> : null} */}
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
          <Button
            title="Add Post"
            action={e => this.handleFormSubmit(e)}
          />{" "}
          {/*Submit */}
        </Container>
        <p />
        <ThreadTitle>Project Thread:</ThreadTitle>
        <p />
        <ul
          style={{
            listStyle: "none",
            margin: "0px",
            padding: "0px"
          }}
        >
          {posts}
        </ul>
        <ul>
          <Query query={GET_PROJECTS}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return "Error!";
              return data.projects.map(project => (
                <Container2 key={project.id}>
                  <div>
                    <p></p> 
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                  <li>
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
                              if (loading) return "Loading...";
                              if (error) return "Error!";
                              return <div>{data.user.name}</div>;
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
                          textAlign: "center"
                        }}
                      >
                        {project.skills.map(skill => (
                          <li key={skill.id}>{skill.skill}</li>
                        ))}
                      </ul>
                    </div>
                    <p />
                    <Mutation
                      mutation={ADD_REQUEST}
                      variables={{
                        collaborateRequest: this.state.collaborators
                      }}
                    >
                      {(collaborateRequest, { data }) => (
                        <Button2
                          title="Request to Join"
                          action={collaborateRequest}
                        />
                      )}
                    </Mutation>
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
                          textAlign: "center"
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
                          textAlign: "center"
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
                </Container2>
              ));
            }}
          </Query>
        </ul>
      </React.Fragment>
    );
  }
}

export default Wall;
