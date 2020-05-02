import styled from 'styled-components'

const RenderMD = styled.div`
  width: 100%;
  padding: 1% 0 5% 0;
  .categories {
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }

    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
  }
`

export default RenderMD
