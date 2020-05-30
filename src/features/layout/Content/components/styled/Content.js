import styled from 'styled-components'

const SubCategories = styled.div`
  font-size: 0.8rem;
  height: 100%;
  width: 100%;
  font-family: 'Inter', sans-serif;
  background-color: ${({ theme }) => theme.contentBG};
  color: ${({ theme }) => theme.contentTextColor}!important;

  .link {
    transition-duration: 450ms;
    cursor: pointer;
    &:hover {
      transition-duration: 350ms;
      filter: invert(35%);
    }
  }

  .docs {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.contentBG};
    color: ${({ theme }) => theme.contentTextColor};
  }

  .subcat__marked-h1 {
    font-size: larger;
    font-weight: bolder;
    margin: 0;
    padding: 0;
  }

  .subcat__marked-content {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 0 0 1rem;

    a {
      line-height: 2vh;
      color: ${({ theme }) => theme.contentTextColor} !important;
    }
  }

  .subcat__marked-container {
    display: flex;
    flex-direction: column;
    margin: 0rem 0;

    &:first-child {
      margin: 0 0;
      padding: 1vh 0 0 0;
    }
  }
  
  @media (max-height: 700px) {
    .subcat__marked-content {
      a {
        line-height: 2vw;
        color: ${({ theme }) => theme.contentTextColor} !important;
      }
    }
  }
  
  @media (max-width: 767px) {
    font-size: 1.75vh;
  }
`

export default SubCategories
