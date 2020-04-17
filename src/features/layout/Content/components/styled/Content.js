import styled from 'styled-components'

const SubCategories = styled.div`
  font-size: 1rem;
  height: 100%;
  max-width: 1000px;
  font-family: 'Inter', sans-serif;
  .link {
    transition-duration: 450ms;
    cursor: pointer;
    &:hover {
      transition-duration: 350ms;
      filter: invert(35%);
    }
  }
  
  .docs {
    line-height: 150%;
    display: flex;
    flex-direction: column;
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
      line-height: 1.5rem
    }
  }
  
  .subcat__marked-container {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    
    &:first-child {
      margin: 0 0;
      padding: 0 0;
    }
  }
`

export default SubCategories
