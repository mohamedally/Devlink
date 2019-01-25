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
        requests {
          user {
            id
            name
          }
        }
        collaborators {
          user {
            id
            name
          }
        }
      }
      dist_meters
    }
  }
`;

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      showProjectComponent: false,
      submit: false
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
    // console.log(this.state.search)
    // const variable = this.state.search ? this.state.search : null
    let users = (
      <Query query={GET_USERS} variables={{location: this.state.search}}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error!";
          return data.users.map(user => (
            <li key={user.id}>
              <StyledLink to={`/user/${user.id}`}>{user.name}</StyledLink>
              <div>
                <div>{user.dist_meters}</div>
                <Title3>
                  <b>Projects:</b>
                </Title3>
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0px",
                    padding: "0px"
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
    /*
    if (this.state.search) {
      let matches = (
        <Query query={GET_USERS} variables={ this.state.search }>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error!";
          console.log(data.users)
          return data.users
        }}
      </Query>
      );
      console.log(matches)
      return matches
    } */

    // const matchList = userSearch.map(user => {
    //   return (
    //     <li key={user.id}>
    //       <StyledLink to={`/user/${user.id}`}>{user.name}</StyledLink>
    //       <div>
    //         <Title3>
    //           <b>Projects:</b>
    //         </Title3>
    //         <ul>
    //           {user.projects.map(project => (
    //             <div key={project.id}>
    //               <li>
    //                 {this.state.showProjectComponent ? (
    //                   <ProjectPost data={project} />
    //                 ) : (
    //                   project.title
    //                 )}
    //               </li>{" "}
    //             </div>
    //           ))}
    //           <p />
    //         </ul>
    //       </div>
    //     </li>
    //   );
    // });

    // console.log(matchList);

    /*
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
        {/*<Button2 title="Search" action={e => this.handleSearch(e)} />*/}
        <div>
          <Button2
            title="Toggle to Switch Views"
            action={e => this.handleClick(e)}
          />
        </div>
        <React.Fragment>
          <ul>{users}</ul>
      </React.Fragment>
      </React.Fragment>
    );
  }
}

export default Users;
