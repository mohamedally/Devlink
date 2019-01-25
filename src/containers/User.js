import React from "react";
import {
  Container,
  Title,
  Title2,
  Name
} from "../containers/MyUserProfile/styles";
import ProjectPost from "./projectPost";
import { Query } from "react-apollo";
import GET_USER from "../graphql/queries";

// import ReactDOM from "react-dom";

const User = ({ match }) => {
  return (
    <div>
      <Container>
        <Query query={GET_USER} variables={{ id: match.params.id }}>
          {({ loading, error, data }) => {
            if (loading) {
              return "loading ....";
            }
            if (error) {
              return error;
            }
            if (data) {
              return (
                <div>
                  <Name>{data.user.name}</Name>
                  <br />
                  <Title>
                    Email: <br />
                    <br />
                    <div style={{ fontWeight: "normal" }}>
                      {data.user.email}
                    </div>
                  </Title>
                  <Title>
                    Github: <br /> <br />
                    <a
                      href={data.user.github}
                      style={{ color: "purple", fontWeight: "normal" }}
                    >
                      {data.user.github}
                    </a>
                  </Title>
                  <Title>
                    Location: <br /> <br />
                    <div style={{ fontWeight: "normal" }}>{data.user.city}</div>
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
                    <li>
                      {/* {data.user.skills.map(skill => (
                        <li key={skill.id}>{skill.skill}</li>
                      ))} */}
                      Development
                    </li>
                    <li>Programming</li>
                  </ul>
                  <br />
                  <Title>
                    Bio: <br /> <br />
                    <div style={{ fontWeight: "normal" }}>{data.user.bio}</div>
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
                    {data.user.projects.map(project => (
                      <li key={project.id}>
                        <ProjectPost user={match.params.id} data={project} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
          }}
        </Query>
      </Container>
    </div>
  );
};

export default User;
