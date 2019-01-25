import React from "react";
import Button2 from "../../components/Button2";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { StyledLink } from "../../components/Navbar/styles";
import { Title3 } from "../MyUserProfile/styles";
import ProjectPost from "../projectPost";

const GET_USERS = gql`
  query users($location: String) {
    users(location: $location) {
      id
      name
      projects {
        id
        title
        description
      }
    }
  }
`;

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      showProjectComponent: false
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

  handleClick = e => {
    this.setState({ showProjectComponent: !this.state.showProjectComponent });
  };

  render() {
    let users = (
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error!";
          return data.users.map(user => (
            <li key={user.id}>
              <StyledLink to={`/user/${user.id}`}>{user.name}</StyledLink>
              <div>
                <Title3>
                  <b>Projects:</b>
                </Title3>
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  {user.projects.map(project => (
                    <div key={project.id}>
                      <li>
                        {this.state.showProjectComponent ? (
                          <ProjectPost data={project} />
                        ) : (
                          project.title
                        )}
                      </li>{" "}
                    </div>
                  ))}
                  <p />
                </ul>
              </div>
            </li>
          ));
        }}
      </Query>
    );
    
    let userSearch = ""
    if (this.state.search) {
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
      console.log("HELLO THERE1")
      console.log(matches)
      console.log("HELLO THERE2")
      return userSearch
    }


    // console.log(matches);
/*
    const matchList = () => {
      return matches.map(user => {
        return (
          <li key={user.id}>
            <StyledLink to={`/user/${user.id}`}>{user.name}</StyledLink>
          </li>
        );
      }); 
    };

    if (matches.length === 0) {
      users = "No matches";
    } else if (matches.length > 0) {
      users = matches;
    }
*/

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
        <div>
          <Button2
            title="Toggle to Switch Views"
            action={e => this.handleClick(e)}
          />
        </div>
        {this.state.search ? <ul>{userSearch}</ul> : <ul>{users}</ul>}
        <ul>{users}</ul>
      </React.Fragment>
    );
  }
}

export default Users;
