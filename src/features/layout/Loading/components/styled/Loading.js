import styled from 'styled-components'

const Loading = styled.div`
  @keyframes wiggle {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .load-img {
    width: 15%;
    height: auto;
  }
`

export default Loading
