import { gql } from 'apollo-boost'

/**
 * fetches category data for the sidebar
 */
export const GET_CATEGORIES = gql`
  query Categories {
    getMenuItems {
      slug
      subcategories {
        name
        id
        slug
      }
    }
  }
`
