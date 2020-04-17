/**
 * This file is only here for reference and
 * will be removed at a later date
 *
 * @deprecated
 */

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
            subcategories {
                name
                id
                slug
            }
        }
    }
`

export const GET_SUBCATEGORIES = gql`
    query GET_SUBCATEGORIES($ID: ID!) {
        getDocumentsForSubcategory(subcategoryId: $ID) {
            title
            id
            slug
            markers {
                displayName
                id
            }
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
                displayName
                id
            }
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
