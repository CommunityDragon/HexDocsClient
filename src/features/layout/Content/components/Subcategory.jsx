import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { NavLink } from 'react-router-dom'
import { v4 } from 'uuid'

import Loading from 'features/layout/Loading'
import Error from 'features/layout/Error'

import { SubCategories } from './styled'
import { GET_CATEGORIES, GET_MARKERS, GET_SUBCATEGORIESONLY } from '../graphql/SubcategoryQueries'

/**
 * content from a subcategory
 */
const Container = ({ match }) => {
  const GetCurrentSubCategoryId = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES)
    if (loading) return <Loading />
    if (error) return <Error />

    const CURRENT_CATEGORY = match.params.category
    const CURRENT_SUBCATEGORY = match.params.subcategory

    const SELECTED_CATEGORY = data.getMenuItems.filter((item) => item.slug === CURRENT_CATEGORY)
    if (SELECTED_CATEGORY.length === 0) return <Error />

    const SELECTED_SUBCATEGORY = SELECTED_CATEGORY[0].subcategories.filter(
      (item) => item.slug === CURRENT_SUBCATEGORY,
    )

    return (
      <GetDocumentList
        id={SELECTED_SUBCATEGORY[0].id}
        cat={CURRENT_CATEGORY}
        subcat={SELECTED_SUBCATEGORY[0]}
      />
    )
  }

  const RenderMarks = ({ markerName, docs }) => {
    return (
      <div className="subcat__marked-container">
        <hr />
        <h1 className="subcat__marked-h1">{markerName}</h1>
        <div className="subcat__marked-content">{docs}</div>
      </div>
    )
  }

  const SortedListByMarkerID = ({ documents, subcat }) => {
    const { loading, error, data } = useQuery(GET_MARKERS, {
      variables: {
        ID: subcat.id,
      },
    })

    if (loading) return <Loading />
    if (error) return <Error message="Error sorting" />

    const markers = data.getMarkersForSubcategory
    const display = {}
    markers.forEach((mark) => {
      display[mark.id] = []
    })

    documents.getDocumentsForSubcategory.forEach((doc) => {
      doc.markers.forEach((mark) => {
        display[mark.id].push(
          <NavLink key={v4()} className="link" to={`${subcat.slug}/${doc.slug}`}>
            {doc.title}
          </NavLink>,
        )
      })
    })

    const marks = Object.keys(display).map((value) => {
      const markername = markers.filter((val) => val.id === value)[0]
      return <RenderMarks key={v4()} markerName={markername.displayName} docs={display[value]} />
    })

    return <div>{marks}</div>
  }

  const GetDocumentList = ({ id, subcat }) => {
    const { loading, error, data } = useQuery(GET_SUBCATEGORIESONLY, {
      variables: {
        ID: id,
      },
    })

    if (loading) return <Loading />
    if (error) return <Error message="An unexpected error has occurred." />

    return (
      <div>
        <SortedListByMarkerID documents={data} subcat={subcat} />
      </div>
    )
  }

  return (
    <SubCategories>
      <GetCurrentSubCategoryId />
    </SubCategories>
  )
}

export default Container
