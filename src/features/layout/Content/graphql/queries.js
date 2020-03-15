import { gql } from 'apollo-boost'

/**
 * fetches category data for the navbar
 */
export const GET_CATEGORIES = gql`
    query GET_CATEGORIES {
        getMenuItems {
            name
            id
            iconUrl
            readmeUrl
            slug
            subcategories {
                name
                id
                slug
            }
        }
    }
`

export const GET_SUBCATECORIES = gql`
    query GET_SUBCATECORIES($ID: ID!) {
        getDocumentsForSubcategory(subcategoryId: $ID) {
            title
            id
            slug
            tags
            createdAt
            authors {
                github
                name
            }
            content
        }
    }
`

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
