import React from 'react'
import moment from 'moment'

import { useQuery } from '@apollo/react-hooks'

import RenderMD from 'features/layout/Content/components/RenderMD'
import Loading from 'features/layout/Loading'
import Error from 'features/layout/Error'
import { GET_DOCUMENT } from '../graphql/DocumentQueries'
import { Docs } from './styled'

/**
 * specific documents
 */
const Container = ({ match }) => {
  const GetDocument = () => {
    const CURRENT_DOCUMENT_SLUG = match.params.document

    const { loading, error, data } = useQuery(GET_DOCUMENT, {
      variables: {
        slug: CURRENT_DOCUMENT_SLUG,
      },
    })

    if (loading) return <Loading />
    if (error) return <Error />

    const document = data.getDocumentBySlug

    if (document) {
      return (
        <div>
          <div>
            {document.authors.length > 0 ? (
              <h2 className="doc-author">
                Created by:
                {document.authors.map((val) => (
                  <div>
                    <a href={`https://github.com/${val.github}`}>
                      {val.name == null ? val.name : val.github}
                    </a>
                    <br />
                  </div>
                ))}
              </h2>
            ) : null}
            <div className="doc-meta">
              <div>
                Created:
                {moment(document.createdAt).fromNow()}
              </div>
              {document.createdAt !== document.updatedAt && (
                <div>
                  Last updated:
                  {moment(document.updatedAt).fromNow()}
                </div>
              )}
            </div>
            <hr />
            <RenderMD md={document.content} />
          </div>
        </div>
      )
    }
    return <Error />
  }

  return (
    <Docs>
      <GetDocument />
    </Docs>
  )
}

export default Container
