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
  justify-content: center;
  
  .load-img {
    height: 50%;
    width: auto;
    animation-name: wiggle;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    filter: invert(100%);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`

export default Loading
