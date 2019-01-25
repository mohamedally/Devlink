import React from "react";
import Button2 from "../../components/Button2";
// import GET_USERS from "../../graphql/queries";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USERS = gql`
  query users {
    users {
      id
      name
    }
  }
`;

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
    this.setState({ [name]: value });
  };

  handleSearch = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  render() {
    // const users = () => (
    //   <Query query={GET_USERS}>
    //     {({ loading, error, data }) => {
    //       if (loading) return "Loading...";
    //       if (error) return "Error!";
    //       return ({data.users.map(user => (<li key={user.id}>{user.name}</li>))})}};
    //   </Query>
    // );

    return (
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
          <Query query={GET_USERS}>
            {({ loading, error, data }) => {
              if (loading) return "Loading...";
              if (error) return "Error!";
              return data.users.map(user => <li key={user.id}>{user.name}</li>);
            }}
          </Query>
        </ul>
      </React.Fragment>
    );
  }
}

export default Users;
