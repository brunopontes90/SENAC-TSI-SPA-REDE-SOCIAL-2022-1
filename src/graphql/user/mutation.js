import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
mutation UpdateUser{
    update_user(where: {id: {_eq: "$id"}, name: {_eq: "$name"}, image: {_eq: "$image"}}) {
      affected_rows
      returning {
        id
        name
        image
      }
    }
  }
`;