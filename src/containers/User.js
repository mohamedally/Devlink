import React from "react";
import {
  Container,
  Title,
  Title2,
  Name
} from "../containers/MyUserProfile/styles";
import MyProjectPost from "./MyProjectPost";
import ProjectPost from "./projectPost";
// import ReactDOM from "react-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* to={`/user/${id}`} */}
        <Container>
          <Name>Yooni Park</Name>
          <p />
          <Title>
            Email: {" yooni@me.com "}
            <br /> <br />
          </Title>
          <Title>
            Github: <br /> <br />
            <a
              href="https://github.com/ypark926"
              style={{ color: "purple", fontWeight: "normal" }}
            >
              https://github.com/ypark926
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
              <ProjectPost />
            </li>
            <li>
              <projectPost />
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}

export default User;
