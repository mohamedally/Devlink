import React from "react";
<<<<<<< HEAD
import { Container } from "./styles";
=======
import Button2 from "../../components/Button2";
>>>>>>> 588029a682b1da221684cc918efe1d6ab4d5f7bc

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
<<<<<<< HEAD
      <Container>
        <ul
            style={{
              listStyle: "none",
              margin: "0px",
              padding: "0px",
              textAlign: "center"
          }}>
=======
      <React.Fragment>
        <input
          className="form-input"
          type="text"
          name="search"
          value={this.state.search}
          placeholder="Search Users"
          onChange={e => this.handleInput(e)}
        />
        <Button2 title="Search" action={e => this.handleSearch(e)} />
        <ul>
>>>>>>> 588029a682b1da221684cc918efe1d6ab4d5f7bc
          <li>Jordan Lawanson</li>
          <li>Yooni Park</li>
          <li>Rob Walker</li>
          <li>Mohammed Ally</li>
        </ul>
<<<<<<< HEAD
      </Container>
=======
      </React.Fragment>
>>>>>>> 588029a682b1da221684cc918efe1d6ab4d5f7bc
    );
  }
}

export default Users;
