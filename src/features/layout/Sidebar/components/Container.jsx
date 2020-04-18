import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import SidebarDynamic from 'features/layout/Sidebar/components/SidebarDynamic'
import { Sidebar } from './styled'

/**
 * main sidebar of the application
 */
const Container = () => (
  <Sidebar>
    <div className="sidebar__item-list">
      <Switch>
        <Route path='/legal' exact/>
        <Route path="/:category" component={SidebarDynamic}/>
        <Route path="/:category/:subcategory" component={SidebarDynamic}/>
        <Route path="/:category/:subcategory/:document" component={SidebarDynamic}/>
      </Switch>
    </div>
    <div className='sidebar__disclaimer'>
      <div className='sidebar__disclaimer__link'>
        <NavLink to='/legal'>Legal</NavLink>
        <a target="_blank" rel="noopener noreferrer" href="https://celerity.gg/">Celerity</a>
        <a target="_blank" rel="noopener noreferrer" href="https://communitydragon.org/">CDragon</a>
      </div>
      Hextech Docs was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.
      Riot Games does not endorse or sponsor this project.
    </div>
  </Sidebar>
)

export default Container
