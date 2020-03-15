import React from 'react'

import Load from './styled'

const LOADING_IMAGE = 'http://raw.communitydragon.org/latest/plugins/rcp-fe-lol-missions/global/default/missiontracker_poro.png'

/**
 * main content of the application
 */
const Container = () => {

  return (
    <Load>
      <img src={LOADING_IMAGE} className='load-img' alt='Uh Oh!'/>
    </Load>

  )
}

export default Container
