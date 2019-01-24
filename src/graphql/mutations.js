import gql from "graphql-tag"

const LOGIN_USER = gql`
  mutation loginUser($id: ID!) {
    user(id: $id) {
      id
      name
      school
    }
  }
`

export default { LOGIN_USER }
