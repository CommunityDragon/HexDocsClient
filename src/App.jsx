import React from 'react'
import CookieConsent from 'react-cookie-consent'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Navbar, Sidebar } from 'features/layout'
import Content from 'features/layout/Content'
import AppStyled from 'styles/styled/App'
import DarkTheme from 'styles/themes/Dark'
import LightTheme from 'styles/themes/Light'
import HomePage from './pages/home'

import 'styles/App.sass'

const client = new ApolloClient({
  uri: 'https://api.hextechdocs.dev/graphql?origin=communitydragon',
  cache: new InMemoryCache(),
})

/**
 * main application
 */
const App = () => {
  const getTheme = () => {
    const currentlySetTheme = localStorage.getItem('currentTheme')

    if (!currentlySetTheme) {
      if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          localStorage.setItem('currentTheme', 'dark')
          return DarkTheme
        }
        localStorage.setItem('currentTheme', 'light')
        return LightTheme
      }
      return LightTheme
    }
    if (currentlySetTheme === 'dark') {
      return DarkTheme
    }
    return LightTheme
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={getTheme}>
          <AppStyled>
            <div className="App">
              <Navbar />

              <div className="Container">
                <Sidebar />
                <div className="Content">
                  <Switch>
                    <Route path="/:category" component={Content} />
                    <Route exact path="/" component={HomePage} />
                  </Switch>
                  <CookieConsent
                    location="bottom"
                    buttonText="Let's go!"
                    style={{ background: 'rgba(24,24,26,0.72)' }}
                    buttonStyle={{
                      color: '#ffffff',
                      fontSize: '1rem',
                      padding: '0.5rem',
                      background: 'rgba(0,255,55,0.65)',
                      borderRadius: '0.25rem',
                    }}
                    cookieName="HextechDocsPoroSnax"
                  >
                    This website uses <del>poro snacks</del> cookies to enhance the user experience.
                    See our{' '}
                    <a href="">
                      <u>
                        Cookie
                        <del>recipe</del> policy
                      </u>
                    </a>
                  </CookieConsent>
                </div>
              </div>
            </div>
          </AppStyled>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  )
}

export default App
