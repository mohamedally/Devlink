import gql from "graphql-tag"

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
        collaborators {
          user {
            id
            name
            github
          }
        }
      }
    }
  }
`

const GET_PROJECTS = gql`
  query projects {
    projects {
      id
      title
      description
      leader
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
      skills {
        skill
      }
    }
  }
`

export { GET_USER, GET_PROJECTS }
