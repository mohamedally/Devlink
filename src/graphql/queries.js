// import gql from "graphql-tag";

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      name
      school
    }
  }
`;

export default GET_USER;
