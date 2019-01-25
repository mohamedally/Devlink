import gql from "graphql-tag"

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(id: $id, email: $email) {
      user {
        id
        name
        email
        github
        bio
        city
        country
        zipcode
      }
      token
      error {
        message
      }
    }
  }
`

export default { LOGIN_USER }
