import styled from 'styled-components'

const Disclaimer = styled.div`
  display: ${(props) => (props.displayOn === 'DESKTOP' ? 'flex' : 'none')};
  pointer-events: none;
  text-align: center;
  flex-direction: column;
  width: 100%;

  background-color: ${({ theme }) => theme.sideBarBG};

  color: ${({ theme }) => theme.footerLegal};
  font-size: 0.5rem;

  border-top: ${({ theme }) => theme.footerSeparator} 1px solid;
  padding: 3% 2.5% 7.5%;
  bottom: 0;

  .iconbutton {
    span {
      pointer-events: all;
      user-select: none;
      cursor: pointer;
      transition-duration: 350ms;
      &:hover {
        transition-duration: 350ms;
        filter: invert(75%);
      }
    }
  }

  .disclaimer__link {
    a {
      &:hover {
        color: ${({ theme }) => theme.footerLinkHover};
        transition: 350ms;
      }
    }
    transition: 350ms;
    color: ${({ theme }) => theme.footerLinkColor};
    font-size: 0.55rem;
    font-weight: normal;
    text-align: center;
    width: 100%;
    padding-bottom: 2%;
  }

  .disclaimer__link > a {
    color: ${({ theme }) => theme.footerLegal} !important;
    pointer-events: all;
    padding: 0 0;
    &::after {
      color: rgba(111, 111, 111, 0.5);
      content: ' ⦁ ';
    }

    &:last-child {
      &::after {
        content: '';
      }
    }
  }

  @media (max-width: 767px) {
    display: ${(props) => (props.displayOn === 'MOBILE' ? 'flex' : 'none')};
    height: 60px;
    background-color: ${({ theme }) => theme.contentBG};
    margin-top: 25px;
    padding: 10px 5px;
    border: none;
    font-size: 0.6rem;

    .disclaimer__link {
      padding-bottom: 10px;
      font-size: 0.8rem;
    }

    &--mobile {
      display: none;
    }
  }
`

export default Disclaimer
