import React from 'react'
import Img from 'react-image-fallback'
import { NavLink } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'

import Logo from '../assets/logo.png'

import { Navbar } from './styled'
import { GET_MENU_ITEMS } from '../graphql/queries'

import placeholderImage from '../assets/hub-coming-soon.png'

/**
 * main navbar of the application
 */
const Container = () => {
  const { data } = useQuery(GET_MENU_ITEMS)

  return (
    <Navbar>
      <div className="navbar__logo">
        <NavLink to="/" activeClassName="navbar__item--active">
          <img src={Logo} className="navbar__logo-img" alt="" />
        </NavLink>
      </div>
      {data &&
        data.getMenuItems.map((item) => (
          <NavLink
            key={item.id}
            to={`/${item.slug}`}
            className="navbar__item"
            activeClassName="navbar__item--active"
          >
            <div className="navbar__item-icon">
              <Img
                className="navbar__item-img"
                src={item.iconUrl}
                alt={item.name}
                fallbackImage={placeholderImage}
                initialImage={placeholderImage}
              />
            </div>
            <div className="navbar__item-label">
              <div className="navbar__item-content">{item.name}</div>
            </div>
          </NavLink>
        ))}
    </Navbar>
  )
}

export default Container
