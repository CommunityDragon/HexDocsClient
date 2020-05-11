import styled from 'styled-components'

const RenderMD = styled.div`
  width: 100%;
  padding: 1% 0 5% 0;
  background-color: ${({ theme }) => theme.contentBG};
  color: ${({ theme }) => theme.contentTextColor};
  .Content {
    background-color: ${({ theme }) => theme.contentBG};
    color: ${({ theme }) => theme.contentTextColor};
    .markdown-body {
      background-color: ${({ theme }) => theme.contentBG};
      color: ${({ theme }) => theme.contentTextColor};
    }
  }

  .categories {
    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
  }
`

export default RenderMD
