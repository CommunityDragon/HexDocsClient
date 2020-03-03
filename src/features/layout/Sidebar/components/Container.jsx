import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PepegaStatic from './PepegaStatic'
import PepegaDynamic from './PepegaDynamic'
import { Sidebar } from './styled'

/**
 * main sidebar of the application
 */
const Container = () => (
  <Sidebar>
    <div className="sidebar__item-list">
      <Switch>
        <Route path="/:category" exact component={PepegaDynamic} />
        <Route path="/:category/:subcategory" exact component={PepegaStatic} />
        <Route path="/:category/:subcategory/:document" exact component={PepegaStatic} />
      </Switch>
    </div>
    <div className='sidebar__disclaimer'>
      Hextech Docs was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.
      Riot Games does not endorse or sponsor this project.
    </div>
  </Sidebar>
)

export default Container
