import React from 'react'

import Err from './styled'

import ERROR_IMAGE from './assets/poro_question.png'

/**
 * Displays when an error has occured can have a custom message
 */
const Container = ({ message }) => {

  return (
    <Err>
      <img src={ERROR_IMAGE} className='error__image' alt='Uh Oh!'/>

      <div className="error__message">
        {message != null ? message : `We couldn't find the page you requested.`}
      </div>
    </Err>
  )
}

export default Container
