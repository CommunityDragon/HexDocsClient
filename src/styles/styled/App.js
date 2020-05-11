import styled from 'styled-components'

const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.contentTextColor};

  h1,
  h2,
  h3,
  h4 {
    border-bottom: 1px solid ${({ theme }) => theme.markdownSeparator};
  }

  hr {
    background-color: ${({ theme }) => theme.markdownHr};
  }

  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .More-Info {
    width: 100%;
    height: 6%;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    border-bottom: rgba(0, 0, 0, 0.14) 1px solid;
  }

  .Bread-Crumbs {
    a {
      color: red;
      font-size: 1.25rem;
      transition-duration: 300ms;

      &:hover {
        transition-duration: 300ms;
        color: orangered;
      }
    }

    strong {
      color: #333333;
      font-size: 1.5rem;
      cursor: default;
    }
  }

  .Container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

  .Content {
    width: 100%;
    height: 100%;
    padding: 1vh 2vw;
    outline: ${({ theme }) => theme.contentOutline} 1px solid;
    background-color: ${({ theme }) => theme.contentBG};
    color: ${({ theme }) => theme.contentTextColor};
    overflow-y: auto;
    overflow-x: hidden;

    a {
      color: ${({ theme }) => theme.linkColor};
    }
  }

  .markdown-body {
    max-width: 1000px;
    background-color: ${({ theme }) => theme.contentBG};
    color: ${({ theme }) => theme.contentTextColor};

    ul {
      list-style: disc outside;
    }

    ol {
      list-style: lower-latin outside;
    }

    table {
      background-color: ${({ theme }) => theme.contentBG};
    }

    th {
      background-color: ${({ theme }) => theme.markdownTableHead};
      border-color: ${({ theme }) => theme.markdownTableBorder};
    }

    td {
      background-color: ${({ theme }) => theme.markdownTableData};
      border-color: ${({ theme }) => theme.markdownTableBorder};
    }
  }

  @media (max-width: 767px) {
    height: 100%;
    .Container {
      flex-direction: column;
    }

    .Content {
      overflow-y: initial;
      padding: 1vh 4vw;
    }
  }
`

export default AppStyled
