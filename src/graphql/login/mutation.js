import { gql } from '@apollo/client'

export const ADD_USER = gql `
mutation MyMutation($name: String!, $username: String!, $password: String!) {
    insert_user(objects: {email: "emai@email.com", name: $name, username: $username, password: $password}) {
      returning {
        id
        name
        username
      }
    }
  }
`