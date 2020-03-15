import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import PepegaDynamic from './PepegaDynamic'
import { Sidebar } from './styled'

/**
 * main sidebar of the application
 */
const Container = () => (
  <Sidebar>
    <div className="sidebar__item-list">
      <Switch>
        <Route path='/legal' exact/>
        <Route path="/:category" component={PepegaDynamic}/>
        <Route path="/:category/:subcategory" component={PepegaDynamic}/>
        <Route path="/:category/:subcategory/:document" component={PepegaDynamic}/>
      </Switch>
    </div>
    <div className='sidebar__disclaimer'>
      <div className='sidebar__disclaimer__link'>
        <NavLink to='/legal'>Legal</NavLink>
        <a href="https://celerity.gg/">Celerity</a>
        <a href="https://communitydragon.org/">CDragon</a>
      </div>
      Hextech Docs was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.
      Riot Games does not endorse or sponsor this project.
    </div>
  </Sidebar>
)

export default Container
