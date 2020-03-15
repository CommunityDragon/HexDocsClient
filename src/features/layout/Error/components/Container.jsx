import React from 'react'

import Err from './styled'

const ERROR_IMAGE = 'http://raw.communitydragon.org/latest/plugins/rcp-fe-lol-career-stats/global/default/poro_question.png'

/**
 * main content of the application
 */
const Container = () => {

  return (
    <Err>
      <img src={ERROR_IMAGE} className='error-img' alt='Uh Oh!'/>
    </Err>
  )
}

export default Container
