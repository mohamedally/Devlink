import React from "react";
import Button from "../../components/Button";
import { StyledLink } from "../../components/Navbar/styles";
import { Container, Title, Name, People, ThreadTitle } from "./styles";
const uuid = require("uuidv4");

// import ReactDOM from "react-dom";

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
    this.setState({
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
    const collaborators = this.state.collaborators.map(collaborator => {
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
            <StyledLink to="/user">
              <Name>{post.username}</Name>
            </StyledLink>
          </div>
          <div>{post.projectdescription}</div>
          <p></p>
          <Button title="Request to Join" action={e => this.handleRequest(e)} />
          <p></p>
          <div>
            <People>Requested collaborators:</People>
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
            placeholder="Project Title"
            onChange={e => this.handleInput(e)}
          />
          <p />
          <textarea
            className="form-input"
            type="text"
            name="projectDescription"
            rows="10"
            cols="50"
            value={this.state.projectDescription}
            placeholder="Project Description"
            onChange={e => this.handleInput(e)}
          />{" "}
          <p></p>
          <Button title="Add Post" action={e => this.handleFormSubmit(e)} />{" "}
          {/*Submit */}
          <p />
          <ThreadTitle>Project Thread:</ThreadTitle>
          <p />
          <ul
            style={{
              listStyle: "none",
              margin: "0px",
              padding: "0px",
              textAlign: "center"
            }}
          >
            {posts}
          </ul>
        </Container>
      </React.Fragment>
    );
  }
}

export default Wall;
