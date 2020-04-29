import styled from 'styled-components';

const Disclaimer = styled.div`
  display: ${props => props.displayOn === 'DESKTOP' ? 'flex' : 'none'};
  pointer-events: none;
  text-align: center;
  flex-direction: column;
  width: 100%;

  color: rgba(111, 111, 111, 0.47);
  font-size: 0.6rem;

  border-top: rgba(0, 0, 0, 0.15) 1px solid;
  padding: 3% 2.5% 7.5%;
  bottom: 0;
  
  .disclaimer__link {
    a {
      &:hover {
        color: rgba(111,111,111,1);
        transition: 350ms;
      }
    }
    transition: 350ms;
    color: rgba(111,111,111,0.76);
    font-size: 0.80rem;
    font-weight: normal;
    text-align: center;
    width: 100%;
    padding-bottom: 2%;
  }
  
  .disclaimer__link > a {
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

  @media (max-width: 767px) {
    display: ${props => props.displayOn === 'MOBILE' ? 'flex' : 'none'};
    height: 60px;
    background-color: white;
    margin-top: 25px;
    padding: 10px 5px;
    border: none;
    
    .disclaimer__link {
      padding-bottom: 10px;
    }
    
    &--mobile {
      display: none;
    }
  }
`

export default Disclaimer