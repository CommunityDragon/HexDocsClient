import { gql } from 'apollo-boost'

/**
 * fetches category data for the navbar
 */
export const GET_MENU_ITEMS = gql`
    query Menu_Items {
        getMenuItems {
            name
            id
            iconUrl
            slug
        }
    }
`
