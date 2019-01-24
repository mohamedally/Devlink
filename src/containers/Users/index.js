import React from "react";
import { Container } from "./styles";

class Users extends React.Component {
  render() {
    return (
      <Container>
        <ul
            style={{
              listStyle: "none",
              margin: "0px",
              padding: "0px",
              textAlign: "center"
          }}>
          <li>Jordan Lawanson</li>
          <li>Yooni Park</li>
          <li>Rob Walker</li>
          <li>Mohammed Ally</li>
        </ul>
      </Container>
    );
  }
}

export default Users;
