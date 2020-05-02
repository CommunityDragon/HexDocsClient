import { gql } from 'apollo-boost'

/**
 * fetches category data for the navbar
 */
export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    getMenuItems {
      name
      slug
      readmeUrl
    }
  }
`
