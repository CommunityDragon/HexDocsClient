import { gql } from 'apollo-boost'

export const GET_MARKERS = gql`
    query GET_MARKERS($ID: ID!) {
        getMarkersForSubcategory(subcategoryId: $ID) {
            id
            displayName
        }
    }
`

export const GET_SUBCATEGORIESONLY = gql`
    query GET_SUBCATECORIES($ID: ID!) {
        getDocumentsForSubcategory(subcategoryId: $ID) {
            title
            id
            slug
            markers {
                id
            }
        }
    }
`

export const GET_CATEGORIES = gql`
    query GET_CATEGORIES {
        getMenuItems {
            slug
            subcategories {
                id
                slug
            }
        }
    }
`
