import React from "react";
import Button2 from "../../components/Button2";
import { Container, Title } from "./styles";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    // console.log("Value", value);
    // console.log("Name", name);
    this.setState({ [name]: value });
  };

  handleSearch = e => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
      <Container>
          <input
            className="form-input"
            type="text"
            name="search"
            value={this.state.search}
            placeholder="Search Users"
            onChange={e => this.handleInput(e)}
          />
          <br></br>
          <Button2 title="Search" action={e => this.handleSearch(e)} />
          <p></p>
          <Title>Current devLinkers</Title>
          <br></br>
          <ul
            style={{
              listStyle: "none",
              margin: "0px",
              padding: "0px",
              textAlign: "center"
            }}
          >
            <li>Jordan Lawanson</li>
            <li>Yooni Park</li>
            <li>Rob Walker</li>
            <li>Mohammed Ally</li>
          </ul>
          </Container>
        </React.Fragment>
    );
  }
}

export default Users;
