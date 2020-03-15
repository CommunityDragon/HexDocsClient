import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { content } from './styled'

import Category from './Category'
import Subcategory from './Subcategory'
import Document from './Document'

import Error from 'features/layout/Error'

import pepegastatic from 'features/layout/Sidebar/components/PepegaStatic'

/**
 * main content of the application
 */
const Container = () => {

  return (
    <content>
      <Switch>
        <Route path='/legal' exact component={pepegastatic}/>
        <Route path="/:category" component={Category}/>
        <Route path="/:category/:subcategory" component={Subcategory}/>
        <Route path="/:category/:subcategory/:document" component={Document}/>
        <Route path="*" component={Error}/>
      </Switch>
    </content>
  )
}

export default Container
