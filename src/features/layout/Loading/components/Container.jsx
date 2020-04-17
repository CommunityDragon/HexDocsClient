import React from 'react'

import Load from './styled'

import Poro_Scroll from '../assets/poro_scroll.png'

/**
 * Displayed when loading.
 */
const Container = () => {

  return (
    <Load>
      <img src={Poro_Scroll} className='load-img' alt='Uh Oh!'/>
    </Load>
  )
}

export default Container
