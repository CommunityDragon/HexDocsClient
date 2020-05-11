import styled from 'styled-components'

const error = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .error__image {
    width: 10rem;
    height: auto;

    margin-bottom: 5vh;
  }

  .error__message {
    color: ${({ theme }) => theme.contentTextColor};
  }
`

export default error
