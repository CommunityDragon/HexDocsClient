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

  .anchors {
    color: ${({theme}) => theme.anchorColor} !important;
    transition-duration: 250ms;
    transform: rotate(45deg);
    font-size: 1rem;
    &:hover {
      transition-duration: 250ms;
      opacity: 50%;
      text-decoration: none;
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
