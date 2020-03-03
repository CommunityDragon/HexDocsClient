import { gql } from 'apollo-boost'

/**
 * fetches category data for the navbar
 */
export const GET_CATEGORIES = gql`
  query Categories {
    getMenuItems {
      name
      id
      iconUrl
      slug
      subcategories {
        name
        id
        slug
      }
    }
  }
`
