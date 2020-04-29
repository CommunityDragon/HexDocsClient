import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

import SidebarDynamic from 'features/layout/Sidebar/components/SidebarDynamic'
import Disclaimer from '../../Disclaimer/';
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
    <Disclaimer displayOn={'DESKTOP'}/>
  </Sidebar>
)

export default Container
