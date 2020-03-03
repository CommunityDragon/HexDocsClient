import React, { useState, useEffect } from 'react'

/**
 * main landing page
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
    (async () => {
      setContent(await (await fetch('/static/readme.html')).text())
    })()
  }, [])


  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default HomePage