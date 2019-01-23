import React from "react";
import ProjectPost from "../projectPost";
import Button from "../../components/Button";
import AddPost from "../AddPost";
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
      username: "Jordan Lawanson",
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
            <h2>{post.projecttitle}</h2>
          </div>
          <div>
            <h3>{post.username}</h3>
          </div>
          <div>{post.projectdescription}</div>
          <Button title="Request to Join" action={e => this.handleRequest(e)} />
          <div>
            <h4>Requested collaborators:</h4>
            <ul>{collaborators}</ul>
          </div>
        </li>
      );
    });
    // console.log(posts);

    return (
      <React.Fragment>
        {/* <Button title="Add Post" action={e => this.handleFormSubmit(e)} /> */}
        {/* {this.state.showAddComponent ? <AddPost /> : null} */}
        <input
          className="form-input"
          name="projectTitle"
          type="text"
          value={this.state.projectTitle}
          placeholder="Project Title"
          onChange={e => this.handleInput(e)}
        />
        <textarea
          className="form-input"
          type="text"
          name="projectDescription"
          value={this.state.projectDescription}
          placeholder="Project Description"
          onChange={e => this.handleInput(e)}
        />{" "}
        <Button title="Add Post" action={e => this.handleFormSubmit(e)} />{" "}
        {/*Submit */}
        <ul>{posts}</ul>
        {/* <ProjectPost />
        <ProjectPost />
        <ProjectPost /> */}
      </React.Fragment>
    );
  }
}

export default Wall;
