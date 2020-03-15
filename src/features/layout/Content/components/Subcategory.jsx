import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { NavLink } from 'react-router-dom'

import Loading from 'features/layout/Loading'

import { SubCategories } from './styled'
import { GET_CATEGORIES, GET_SUBCATECORIES } from '../graphql/queries'

/**
 * content from a subcategory
 */
const Container = ({ match }) => {

  function GetCurrentSubCategoryId () {
    const { loading, error, data } = useQuery(GET_CATEGORIES)
    try {
      if (loading) return <Loading/>
      if (error) return <p>Error :(</p>

      const CURRENT_CATEGORY = match.params.category
      const CURRENT_SUBCATEGORY = match.params.subcategory

      const SELECTED_CATEGORY = data.getMenuItems.filter(item => item.slug === CURRENT_CATEGORY)
      const SELECTED_SUBCATEGORY = SELECTED_CATEGORY[0].subcategories.filter(item => item.slug === CURRENT_SUBCATEGORY)

      return <GetDocumentList id={SELECTED_SUBCATEGORY[0].id} cat={CURRENT_CATEGORY} subcat={SELECTED_SUBCATEGORY[0]}/>
    } catch (e) {
      return <p>Error :(</p>
    }
  }

  function GetDocumentList ({ id, subcat }) {
    const { loading, error, data } = useQuery(GET_SUBCATECORIES, {
      variables: {
        ID: id
      }
    })

    if (loading) return <Loading/>
    if (error) return <p>Error :(</p>

    return (
      <div className='docs'>
        {data.getDocumentsForSubcategory.map(val =>
          <NavLink key={val.id} className='link' to={`${subcat.slug}/${val.slug}`}>{val.title}</NavLink>
        )}
      </div>
    )
  }

  return (
    <SubCategories>
      <GetCurrentSubCategoryId/>
    </SubCategories>
  )
}

export default Container
