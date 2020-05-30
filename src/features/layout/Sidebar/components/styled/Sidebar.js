import styled from 'styled-components'

const Sidebar = styled.div`
  min-width: 225px;
  height: 100%;
  width: 15%;

  background: ${({ theme }) => theme.sideBarBG};
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

    color: ${({ theme }) => theme.sidebarTextColor};

    font-size: 0.7rem;
    font-weight: 500;

    border-bottom: ${({ theme }) => theme.sidebarSeparator} 1px solid;
    padding: 5.5% 0;
  }

  .sidebar__item_active {
    font-weight: bolder;

    transition-duration: 350ms;

    padding-left: 5%;

    cursor: default;
  }

  .sidebar__item-back {
    color: ${({ theme }) => theme.sidebarTextColor};
    cursor: pointer;
    display: flex;
    align-content: center;
    vertical-align: center;
    transition-duration: 350ms;
    &:after {
      display: flex;
      align-content: center;
      vertical-align: middle;
      transition-duration: 350ms;
      line-height: 1rem;
      content: 'Go back';
    }
    &:hover {
      filter: invert(50%);
      transition-duration: 350ms;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 50px;
    overflow-x: auto;
    .sidebar__item-back {
      display: none !important;
    }
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
