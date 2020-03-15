import React from 'react'

import Err from './styled'

const ERROR_IMAGE = 'http://raw.communitydragon.org/latest/plugins/rcp-fe-lol-career-stats/global/default/poro_question.png'

/**
 * Displays when an error has occured can have a custom message
 */
const Container = ({ message }) => {

  return (
    <Err>
      <img src={ERROR_IMAGE} className='error-img' alt='Uh Oh!'/>

      <div className="error-message">
        {message != null ? message : 'We couldn\'t find the page you requested.'}
      </div>
    </Err>
  )
}

export default Container
