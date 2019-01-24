import React from "react";
import { Container, Title, Title2, Name } from "./styles";
import MyProjectPost from "../MyProjectPost";
import SignUp from "../SignUp";
import Button2 from "../../components/Button2";
import { StateProvider } from "react-state-provider";

// import SignUp from "../SignUp";
// import ReactDOM from "react-dom";

class MyUserProfile extends React.Component {
  constructor(props) {
    super(props);

    // this.newUsersState = StateProvider.getState("newUsers");

    this.state = {
      showEditComponent: false
      // name: this.newUsersState.get("name")
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  // componentDidMount() {
  //   this.newUsersState.observe("name");
  // }

  handleEdit = e => {
    e.preventDefault();
    this.setState({
      showEditComponent: !this.state.showEditComponent
    });
  };

  render() {
    console.log("MyUserProfile", this.props);
    return (
      <div>
        {/* to={`/user/${id}`} */}
        <Container>
          <img src="data:image/jpeg;base64,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" />
          <Name>Jordan Lawanson</Name>
          <p />
          <Title>
            Email: {" jordan@me.com "}
            <br /> <br />
          </Title>
          <Title>
            Github: <br /> <br />
            <a
              href="https://github.com/jlawanson"
              style={{ color: "purple", fontWeight: "normal" }}
            >
              https://github.com/jlawanson
            </a>
          </Title>
          <Title>
            Location: <br /> <br />
            <div style={{ fontWeight: "normal" }}>Cambridge, MA</div>
          </Title>
          <Title>Skills:</Title>
          <ul
            style={{
              listStyle: "none",
              margin: "0px",
              padding: "0px",
              textAlign: "center"
            }}
          >
            <li>Developing</li>
            <li>Programming</li>
          </ul>
          <br />
          <Title>
            Bio: <br /> <br />
            <div style={{ fontWeight: "normal" }}>
              This is all you need to know about me
            </div>
          </Title>
          <div style={{ textAlign: "center" }}>
            <Button2 title="Edit Profile" action={e => this.handleEdit(e)} />
            {this.state.showEditComponent ? <SignUp /> : null}
          </div>
          <p />
          <Title2>Projects:</Title2>
          <ul
            style={{
              listStyle: "none",
              margin: "0px",
              padding: "0px",
              textAlign: "center"
            }}
          >
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
