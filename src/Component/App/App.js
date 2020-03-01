import React from 'react'
import Img from 'react-image-fallback'

import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import ApolloClient, { gql } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'

import { v4 as uuid } from 'uuid'

import './stylesheets/App.sass'
import './stylesheets/NavBar.sass'
import './stylesheets/SideBar.sass'

import Logo from './images/logo.webp'

const client = new ApolloClient({
  uri: 'https://hextechdocs-api.celerity.gg/graphql?origin=pepega',
  cache: new InMemoryCache(),
})

const App = () => {

  const CategoriesQuery = gql`
      query Categories {
          getMenuItems {
              name
              iconUrl
              slug
              subcategories {
                  name
                  slug
              }
          }
      }
  `

  const GetCategories = () => {
    const { loading, error, data } = useQuery(CategoriesQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    if (data == null) return <p>Empty :(</p>

    let array = []

    for (let i = 0; i < data.getMenuItems.length; i++) {
      array.push(
        <NavLink className='NavBar-Item' key={uuid()} to={"/"+data.getMenuItems[i].slug}
                 activeClassName='NavBar-Item-Active'>


          <div className='NavBar-Item-Icon'>

            <Img
              src={data.getMenuItems[i].iconUrl}
              fallbackImage="http://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/placeholder/hub-coming-soon.png"
              initialImage="http://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/placeholder/hub-coming-soon.png"
              alt={data.getMenuItems[i].name}
              className="NavBar-Item-Icon-Img"/>

          </div>
          <div className='NavBar-Item-Label'>
            <div className="NavBar-Item-Label-Text">
              {data.getMenuItems[i].name}
            </div>
          </div>
        </NavLink>
      )
    }
    return array
  }

  const TestOne = () => {
    return <p>TestOne</p>
  }

  const TestTwo = () => {
    return <p>TestTwo</p>
  }

  const TestThree = () => {
    return <p>TestThree</p>
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <div className='NavBar-Main'>

            <div className="NavBar-Main-Logo">
              <NavLink to='/' activeClassName='NavBar-Item-Active'>
                <img src={Logo} className="NavBar-Main-Logo-Image" alt=""/>
              </NavLink>
            </div>
            <GetCategories/>
          </div>

          <div className='SideBar-Main'>
            <div className="SideBar-Items">
              <p>Sidebar test</p>
              <Switch>
                <Route path="/:category" exact component={TestOne} />
                <Route path="/:category/:subcategory" exact component={TestTwo} />
                <Route path="/:category/:subcategory/:document" exact component={TestThree} />
              </Switch>
            </div>
            <div className='SideBar-Disclaimer'>
              Hextech Docs was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.
              Riot Games does not endorse or sponsor this project.
            </div>
          </div>

        </div>
      </Router>

    </ApolloProvider>
  )
}

export default App
