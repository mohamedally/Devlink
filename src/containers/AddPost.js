// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import Button from "../components/Button";
// import ProjectPost from "./projectPost";

// class AddPost extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       newPost: {
//         projecttitle: "",
//         projectdescription: "",
//         name: ""
//       }
//     };
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//   }

//   handleFormSubmit = async e => {
//     // Form submission logic
//     const newPosts = {
//       projecttitle: "Project #1",
//       name: "Jordan Lawanson",
//       projectdescription:
//         "yqerwgfberq3fr fr3ghqf3. fryfghiubqf. rfbqygrbf fqir3hfgy3f cfyg3fcrq rfqiugfr. frhqfgqbf,fvrhfghqor.frvfuyf fqguyrfbrfb."
//     };
//     await this.setState({
//       newPost: [...this.state.newPost, newPosts]
//     });
//   };

//   handleInput = e => {
//     let value = e.target.value;
//     let name = e.target.name;
//     this.setState(prevState => {
//       return {
//         newPost: {
//           ...prevState.newPost,
//           [name]: value
//         }
//       };
//     });
//   };

//   //   handlePassword = e => {};

//   render() {
//     return (
//       <div>
//         <input
//           className="form-input"
//           name="title"
//           type="text"
//           value={this.state.newPost.projecttitle}
//           placeholder="Project Title"
//           onChange={e => this.handleInput(e)}
//         />
//         <textarea
//           className="form-input"
//           type="text"
//           name="description"
//           value={this.state.newPost.projectdescription}
//           placeholder="Project Description"
//           onChange={e => this.handleInput(e)}
//         />{" "}
//         <Button title="Submit" action={e => this.handleFormSubmit(e)} />{" "}
//         {/*Submit */}
//       </div>
//     );
//   }
// }

// export default withRouter(AddPost);
