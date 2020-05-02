import styled from 'styled-components'

const Docs = styled.div`
  height: 100%;
  width: 100%;

  hr {
    border-top: 1px solid rgba(0, 0, 0, 0.11);
  }

  .doc-author {
  }

  .doc-name {
    font-size: 1rem;
  }

  .doc-meta {
    display: flex;
    flex-direction: column;
    color: rgba(0, 0, 0, 0.33);
    padding-bottom: 1vw;
    font-size: 0.7rem;
    line-height: 1rem;
  }
`

export default Docs
