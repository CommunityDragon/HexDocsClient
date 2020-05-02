import { gql } from 'apollo-boost'

export const GET_DOCUMENT = gql`
  query pepega($slug: String!) {
    getDocumentBySlug(slug: $slug) {
      title
      createdAt
      updatedAt
      authors {
        name
        github
      }
      content
    }
  }
`
