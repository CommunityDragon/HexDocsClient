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
    
    padding-left: 5%
  }

  .sidebar__disclaimer {
    pointer-events: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;

    color: rgba(111, 111, 111, 0.47);
    font-size: 0.5rem;

    border-top: rgba(0, 0, 0, 0.15) 1px solid;
    padding: 3% 2.5% 7.5%;
    bottom: 0;
  }
  
  .sidebar__disclaimer__link {
    a {
      &:hover {
        color: rgba(111,111,111,1);
        transition: 350ms;
      }
    }
    transition: 350ms;
    color: rgba(111,111,111,0.76);
    font-size: 0.55rem;
    font-weight: normal;
    text-align: center;
    width: 100%;
    padding-bottom: 2%;
  }
  
   .sidebar__disclaimer__link > a {
    pointer-events: all;
    padding: 0 0;
    &::after {
      color: rgba(111,111,111,0.5);
      content: ' ⦁ ';
    }
    
    &:last-child {
      &::after {
        content: '';
      }
    }
  }
`

export default Sidebar
