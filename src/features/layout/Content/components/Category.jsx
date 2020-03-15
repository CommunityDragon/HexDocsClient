import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import useAxios from 'axios-hooks'

import 'highlight.js/styles/github-gist.css'
import 'github-markdown-css'

import RenderMD from 'features/layout/Content/components/RenderMD'

import { content } from './styled'
import { GET_CATEGORIES } from '../graphql/queries'

import Loading from 'features/layout/Loading'

/**
 * Display basics of a specific game
 */
const Category = ({ match }) => {

  function GetReadmeUrl () {
    const { loading, error, data } = useQuery(GET_CATEGORIES)

    if (loading) return <Loading/>
    if (error) return <p>Error :(</p>

    const CURRENT_CATEGORY = match.params.category
    const SELECTED_CATEGORY = data.getMenuItems.filter(item => item.slug === CURRENT_CATEGORY)
    const README_URL = SELECTED_CATEGORY[0].readmeUrl

    return <FetchData url={README_URL}/>
  }

  function FetchData (props) {
    const [{ data, loading, error }] = useAxios(props.url)

    if (loading) return <Loading/>
    if (error) return (<p>Error!</p>)

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
