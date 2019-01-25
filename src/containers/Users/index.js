import React from "react";
import Button2 from "../../components/Button2";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyledLink } from "../../components/Navbar/styles";
import { Title3 } from "../MyUserProfile/styles";

const GET_USERS = gql`
  query users {
    users {
      id
      name
      projects {
        id
        title
      }
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
    this.setState({ search: e.target.value });
  };

  render() {
    let users = (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error!";
          return data.users.map(user => (
            <li key={user.id}>
              <StyledLink to="/user/${user.id}">{user.name}</StyledLink>
              <div>
                <Title3>
                  <b>Projects:</b>
                </Title3>
                <ul>
                  {user.projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                  ))}
                </ul>
              </div>
            </li>
          ));
        }}
      </Query>
    );

    const matches = (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error!";
          return data.users.filter(user =>
            user.name.includes(this.state.search)
          );
        }}
      </Query>
    );

    // console.log(matches);

    const matchList = () => {
      return matches.map(user => {
        return (
          <li key={user.id}>
            <StyledLink to="/user/${user.id}">{user.name}</StyledLink>
          </li>
        );
      });
    };

    if (matches.length === 0) {
      users = "No matches";
    } else if (matches.length > 0) {
      users = matches;
    }

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
        <ul>{users}</ul>
      </React.Fragment>
    );
  }
}

export default Users;
