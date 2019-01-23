import React from "react";
import { Container } from "./styles";
import MyProjectPost from "../MyProjectPost";
import Button from "../../components/Button";
import SignUp from "../SignUp";
// import SignUp from "../SignUp";
// import ReactDOM from "react-dom";

class MyUserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditComponent: false
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit = e => {
    e.preventDefault();
    this.setState({
      showEditComponent: !this.state.showEditComponent
    });
  };

  render() {
    return (
      <div>
        {/* to={`/user/${id}`} */}
        <Container>
          <h1>Jordan Lawanson</h1>
          <div>Email: jordan@me.com</div>
          <div>
            Github:{" "}
            <a href="https://github.com/jlawanson">
              https://github.com/jlawanson
            </a>
          </div>
          <div>Cambridge, MA</div>
          <div>Skills:</div>
          <ul>
            <li>Developing</li>
            <li>Programming</li>
          </ul>
          <div>This is all you need to know about me</div>
          <div>
            <Button title="Edit Profile" action={e => this.handleEdit(e)} />
            {this.state.showEditComponent ? <SignUp /> : null}
          </div>
          <div>Projects:</div>
          <ul>
            <li>
              <MyProjectPost />
            </li>
            <li>
              <MyProjectPost />
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default MyUserProfile;
