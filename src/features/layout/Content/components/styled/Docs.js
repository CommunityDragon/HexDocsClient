import styled from 'styled-components'

const Docs = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.contentBG};
  color: ${({ theme }) => theme.contentTextColor};
  .markdown-body {
    hr {
      background-color: ${({ theme }) => theme.markdownHr};
    }

    h1,
    h2,
    h3,
    h4 {
      border-bottom: 1px solid ${({ theme }) => theme.markdownSeparator};
      padding-bottom: 0.3em
    }

    code,
    pre {
      font-family: JetBrainsMono, source-code-pro, Menlo, Monaco, Consolas, monospace;
      background-color: ${({ theme }) => theme.contentCodeBG};
    }

    pre > code {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  hr {
    border-color: ${({ theme }) => theme.contentMetaSeparator};
  }

  .doc-author {
  }

  .doc-name {
    font-size: 1rem;
  }

  .doc-meta {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.contentMetaColor};
    padding-bottom: 1vh;
    font-size: 0.7rem;
    line-height: 1rem;
  }
`

export default Docs
