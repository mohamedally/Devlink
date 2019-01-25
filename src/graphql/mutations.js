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

const ACCEPT_REQUEST = gql`
  mutation acceptRequest($from: ID!, $projectId: ID!) {
    acceptRequest(from: $from, projectId: $projectId) {
      message
      error {
        message
      }
    }
  }
`

const DECLINE_REQUEST = gql`
  mutation declineRequest($from: ID!, $projectId: ID!) {
    declineRequest(from: $from, projectId: $projectId) {
      message
      error {
        message
      }
    }
  }
`

const COLLABORATE_REQUEST = gql`
  mutation collaborateRequest($projectId: ID!) {
    collaborateRequest(projectId: $projectId) {
      message
      error {
        message
      }
    }
  }
`

const CREATE_PROJECT = gql`
  mutation createProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      project {
        id
        title
        description
      }
      error {
        message
      }
    }
  }
`

export {
  LOGIN_USER,
  EDIT_USER,
  ACCEPT_REQUEST,
  DECLINE_REQUEST,
  COLLABORATE_REQUEST,
  CREATE_PROJECT
}
