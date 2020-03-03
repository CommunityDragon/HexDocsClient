import styled from 'styled-components'

/**
 * styling for the navbar container
 */
const Navbar = styled.nav`
  @import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');

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
    display: inline-flex;
    justify-content: center;
    align-content: center;
    transition-duration: 300ms;
    padding: 0.5vh 1vw;
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
      }
    }

    .navbar__item-icon {
      height: 90%;
      width: auto;
    }

    .navbar__item-img {
      height: 100%;
      width: auto;
    }

    .navbar__item-label {
      padding: 0 0.5vw;
      display: none;
    }

    .navbar__item-content {
      color: whitesmoke;
      white-space: pre-wrap;
      font-size: 1em;
      height: 100%;
      display: inline-flex;
      width: auto;
      align-items: center;
      padding-bottom: 1vh;
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
`

export default Navbar
