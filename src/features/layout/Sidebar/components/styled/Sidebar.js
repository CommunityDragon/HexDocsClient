import styled from 'styled-components'

const Sidebar = styled.div`

    min-width: 225px;
    height: 100%;
    width: 15%;
  
    background: whitesmoke;
    display: flex;
    
    flex-direction: column;
    overflow: hidden;

  .sidebar__item-list {
    display: flex;
    flex-direction: column;
    
    padding: 1% 7%;

    width: 100%;
    height: 100%;
  }

  .sidebar__item {
    transition-duration: 350ms;
  
    color: rgb(64, 64, 64);

    font-size: 0.9rem;
    font-weight: 500;

    border-bottom: rgba(41, 41, 41, 0.12) 1px solid;
    padding: 5.5% 0;
  }
  
  .sidebar__item_active {
    font-weight: bolder;
    
    transition-duration: 350ms;
    
    padding-left: 5%;
    
    cursor: default;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 50px;
    overflow-x: auto;
    .sidebar__item-list {
      padding: 0;
      flex-direction: row;
    }
    .sidebar__item {
      padding: 0;
      display: flex;
      border: none;
      height: 100%;
      min-width: 180px;
      align-items: center;
      justify-content: center;
    }
  }
`

export default Sidebar
