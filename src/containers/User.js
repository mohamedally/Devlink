import React from "react";
import {
  Container,
  Title,
  Title2,
  Name
} from "../containers/MyUserProfile/styles";
import ProjectPost from "./projectPost";
// import ReactDOM from "react-dom";

class User extends React.Component {
  render() {
    return (
      <div>
        {/* to={`/user/${id}`} */}
        <Container>
          <img src="data:image/jpeg;base64,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" />
          <Name>Yooni Park</Name>
          <p />
          <Title>
            Email: <br/><br/>
            <div style={{ fontWeight: "normal" }}>yooni@me.com</div>
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
          </ul>
        </Container>
      </div>
    );
  }
}

export default User;
