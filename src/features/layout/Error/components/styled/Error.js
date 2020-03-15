import styled from 'styled-components'

const error = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .error-img {
    width: 15%;
    height: auto;
    
    margin-bottom: 5vh;
  }
  
  .error-message {
    color: rgba(0,0,0,0.75);
  }
`

export default error
