import React from 'react'

import Load from './styled'

import poroScroll from '../assets/poro_scroll.png'

/**
 * Displayed when loading.
 */
const Container = () => {
  return (
    <Load>
      <img src={poroScroll} className="load-img" alt="Uh Oh!" />
    </Load>
  )
}

export default Container
