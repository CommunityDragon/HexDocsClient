import styled from 'styled-components'

const Sidebar = styled.div`
  min-width: 225px;
  max-width: 15%;
  height: 100%;
  width: 15%;

  background: whitesmoke;
  display: flex;
  
  flex-direction: column;
  overflow: hidden;

  .sidebar__item-list {
    flex-direction: column;
    display: flex;
    
    padding: 1vh 1vw;

    width: 100%;
    height: 100%;
  }

  .sidebar__item {
    color: rgb(64, 64, 64);

    font-size: medium;
    font-weight: 500;

    border-bottom: rgba(41, 41, 41, 0.12) 1px solid;
    padding: 1vh 0;
  }

  .sidebar__sub-item {
    padding-left: 0.25vw;
  }

  .sidebar__disclaimer {
    pointer-events: none;
    text-align: center;
    display: flex;
    width: 100%;

    color: rgba(111, 111, 111, 0.47);
    font-size: 0.65rem;

    border-top: rgba(0, 0, 0, 0.15) 1px solid;
    padding: 1vw 0.5vh;
    bottom: 0;
  }
`

export default Sidebar
