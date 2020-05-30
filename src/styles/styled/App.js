import styled from 'styled-components'

const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.contentTextColor};

  *::-webkit-scrollbar {
    width: 1vh;
    height: 1vw;
  }

  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarColor};
    border-radius: 100vw;
    border: 3px solid rgba(255, 255, 255, 0);
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.scrollbarColor} rgba(255, 255, 255, 0);
  }

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
    scroll-behavior: smooth;

    a {
      color: ${({ theme }) => theme.linkColor};
    }
  }

  .markdown-body {
    max-width: 1000px;
    background-color: ${({ theme }) => theme.contentBG};
    color: ${({ theme }) => theme.contentTextColor};
    scroll-behavior: smooth;
    font-variant-ligatures: none;
    font-size: 0.85rem;

    .table-of-contents {
      margin-bottom: 2vh;
      border-bottom: 1px solid ${({ theme }) => theme.markdownSeparator};
      a {
        color: ${({ theme }) => theme.tocColor};
        transition-duration: 275ms;
        &:hover {
          text-decoration: none;
          filter: invert(50%);
        }
      }

      ol {
        padding-left: 1em;
        counter-increment: ol-index;
        counter-reset: li-index;
        list-style: none;

        &:before {
          content: ' ';
        }

        li {
          counter-increment: li-index;
          &:before {
            content: counter(li-index) '. ';
          }
        }

        li > ol {
          counter-increment: ol-index;
          padding-left: 1.5em;
          counter-reset: li-index;
          li {
            &:before {
              content: counter(li-index, lower-alpha) '. ';
            }
          }
        }
      }
    }

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

  @media (min-width: 1300px) {
    .markdown-body {
      max-width: 1250px;
      font-size: 0.75rem;
    }
  }

  @media (min-width: 3000px) {
    .markdown-body {
      max-width: 1500px;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 767px) {
    height: 100%;
    .Container {
      flex-direction: column;
    }

    .markdown-body {
      font-size: 0.65rem;
    }

    .Content {
      overflow-y: initial;
      padding: 1vh 4vw;
    }
  }
`

export default AppStyled
