import { NavLink } from 'react-router-dom'
import React from 'react'

import Disclaimer from './styled/Disclaimer'

const Container = ({ displayOn = 'MOBILE' }) => {
  const onTearClick = () => {
    const currentlySetTheme = localStorage.getItem('currentTheme')

    if (currentlySetTheme === 'light') {
      localStorage.setItem('currentTheme', 'dark')
      window.location.reload(false)
    } else {
      localStorage.setItem('currentTheme', 'light')
      window.location.reload(false)
    }
  }

  return (
    <Disclaimer displayOn={displayOn}>
      <div className="disclaimer__link">
        <button type="button" className="iconbutton" onClick={onTearClick}>
          <span className="material-icons icon">invert_colors</span>
        </button>
      </div>
      <div className="disclaimer__link">
        <NavLink to="/legal">Legal</NavLink>
        <a target="_blank" rel="noopener noreferrer"
           href="https://celerity.gg/">
          Celerity
        </a>
        <a target="_blank" rel="noopener noreferrer"
           href="https://communitydragon.org/">
          CDragon
        </a>
      </div>
      Hextech Docs was created under Riot Games' "Legal Jibber Jabber" policy
      using assets owned by
      Riot Games. Riot Games does not endorse or sponsor this project.
    </Disclaimer>
  )
}

export default Container
