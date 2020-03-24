import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import useAxios from 'axios-hooks'

import RenderMD from 'features/layout/Content/components/RenderMD'

import { content } from './styled'
import { GET_CATEGORIES } from '../graphql/queries'

import Loading from 'features/layout/Loading'
import Error from 'features/layout/Error'

/**
 * Display basics of a specific game
 */
const Category = ({ match }) => {

  const GetReadmeUrl = () => {
    const { loading, error, data } = useQuery(GET_CATEGORIES)

    if (loading) return <Loading/>
    if (error) return <Error/>

    const CURRENT_CATEGORY = match.params.category
    const SELECTED_CATEGORY = data.getMenuItems.filter(item => item.slug === CURRENT_CATEGORY)

    if (SELECTED_CATEGORY.length === 0) {
      return <Error/>
    } else {
      return <FetchData url={SELECTED_CATEGORY[0].readmeUrl}/>
    }
  }

  const FetchData = ({ url }) => {
    const [{ data, loading, error }] = useAxios(url)

    if (loading) return <Loading/>
    if (error) return <Error/>

    return (
      <RenderMD md={data}/>
    )
  }

  return (
    <content>
      <GetReadmeUrl/>
    </content>
  )
}

export default Category
