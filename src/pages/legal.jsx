import React, { useState, useEffect } from 'react'

/**
 * legal landing page
 */
const HomePage = () => {
  /**
   * raw html content for the page
   */
  const [content, setContent] = useState('')

  /**
   * loads the README file
   */
  useEffect(() => {
    ;(async () => {
      setContent(await (await fetch('/static/legal.html')).text())
    })()
  }, [])

  // eslint-disable-next-line react/no-danger
  return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
}

export default HomePage
