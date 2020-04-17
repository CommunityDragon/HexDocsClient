import styled from 'styled-components'

const Loading = styled.div`
  @keyframes breath {
    0% {
      opacity: 100%;
    }
    
    50% {
      opacity: 25%;
    }
    
    100% {
      opacity: 100%;
    }
  }

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  
  .load-img {
    width: 10rem;
    height: auto;
    animation-name: breath;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    filter: invert(75%);
    user-select: none;
    pointer-events: none;
  }
`

export default Loading
