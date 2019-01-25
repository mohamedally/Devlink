import gql from "graphql-tag";

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      email
      github
      bio
      city
      country
      zipcode
      projects {
        id
        title
        description
        leader
        requests {
          user {
            id
            name
            github
          }
        }
      }
    }
  }
`;

export default GET_USER;
