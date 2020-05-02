import styled from 'styled-components'

/**
 * styling for the navbar container
 */
const Navbar = styled.nav`
  min-height: 55px;
  min-width: 160px;
  width: 100%;
  height: 5%;

  display: inline-flex;
  flex-direction: row;

  background: #141414;
  overflow: hidden;

  .navbar__item {
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    transition-duration: 300ms;
    padding: 0 1%;
    cursor: pointer;

    &:hover {
      transition-duration: 300ms;
      background: #1a1a1a;
    }

    &.navbar__item--active {
      width: auto;
      border-top: red solid 1px;
      cursor: default;
      background: #242424;

      &:hover {
        background: #242424;
      }

      .navbar__item-label {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
      }
    }

    .navbar__item-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: auto;
    }

    .navbar__item-img {
      height: 70%;
      width: auto;

      display: flex;

      align-items: center;
      justify-content: center;
      align-content: center;
    }

    .navbar__item-label {
      padding: 0 5%;
      font-size: 0.8rem;
      display: none;
      height: 100%;
    }

    .navbar__item-content {
      color: whitesmoke;
      white-space: nowrap;
      font-size: 0.8rem;
      height: 100%;
      width: auto;

      display: flex;
      justify-items: center;
      align-items: center;
      padding-bottom: 5%;
    }
  }

  .navbar__logo {
    width: auto;
    height: 100%;
    padding: 0 0.5vw;
    border-right: rgba(255, 255, 255, 0.28) 1px solid;

    .navbar__logo-img {
      width: auto;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  @media (max-width: 767px) {
    overflow-x: auto;
    .navbar__item {
      min-width: 60px;

      .navbar__item-content {
        display: none;
      }
    }
  }
`

export default Navbar
