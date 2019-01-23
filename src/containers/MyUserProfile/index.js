import React from "react";
import { Container, Title, Title2 } from "./styles";
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
          <Title>Email:</Title>
          <Title>
            Github: {" "}
            <a href="githublink" style={{color: 'purple'}}>
              https://github.com/jlawanson
            </a>
          </Title>
          <div>Cambridge, MA</div>
          <p></p>
          <Title>Skills:</Title>
          <ul style={{listStyle: 'none', margin: '0px', padding: '0px', textAlign: 'center'}}>
            <li>Developing</li>
            <li>Programming</li>
          </ul>
          <p></p>
          <div>This is all you need to know about me</div>
          <p></p>
          <Title2>Projects:</Title2>
          <ul style={{listStyle: 'none', margin: '0px', padding: '0px', textAlign: 'center'}}>
            <li>
              <MyProjectPost />
            </li>
            <li>
              <MyProjectPost />
            </li>
          </ul>
          <div>
            <Button title="Edit Profile" action={e => this.handleEdit(e)} />
            {this.state.showEditComponent ? <SignUp /> : null}
          </div>
        </Container>
      </div>
    );
  }
}

export default MyUserProfile;
