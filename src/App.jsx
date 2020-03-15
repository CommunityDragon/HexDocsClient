import React from 'react'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar, Sidebar } from 'features/layout'
import Content from 'features/layout/Content'
import HomePage from './pages/home'
import './styles/App.sass'

const client = new ApolloClient({
  uri: 'https://hextechdocs-api.celerity.gg/graphql?origin=pepega',
  cache: new InMemoryCache(),
})

/**
 * main application
 */
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Navbar />
        <div className='Container'>
          <Sidebar/>
          <div className='Content'>
            <Switch>
              <Route path='/:category' component={Content}/>
              <Route exact path="/" component={HomePage}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </ApolloProvider>
)

export default App
