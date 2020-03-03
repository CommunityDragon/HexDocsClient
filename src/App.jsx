import React from 'react'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'

import { Navbar, Sidebar } from 'features/layout'
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
          <Sidebar />
          <div className='Content'>
            <div className="More-Info">
              <div className="Bread-Crumbs">
                <a href="/">LoL</a>  <strong>></strong>  <a href="/">Riot Games API</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  </ApolloProvider>
)

export default App
