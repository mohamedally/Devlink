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
      tokenxs
      error {
        message
      }
    }
  }
`
const EDIT_USER = gql`
  mutation editUser($input: EditUserInput!) {
    editUser(input: $input) {
      id
      name
      email
      github
      bio
      city
      country
      zipcode
    }
  }
`

export default LOGIN_USER, EDIT_USER
