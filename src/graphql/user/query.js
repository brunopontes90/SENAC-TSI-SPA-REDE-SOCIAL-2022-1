import { gql } from '@apollo/client';
export const UPDATE_USER = gql `
query User {
    update user set (id, name, imagem) where $id = id,
  }
`