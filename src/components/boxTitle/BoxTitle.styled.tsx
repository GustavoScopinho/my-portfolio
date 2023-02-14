import styled from 'styled-components'

export const Title = styled.div`
  background-color: #f0f8ff24;
  border-radius: 19px;
  width: 60%;
  height: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;

  h1 {
    color: #fff;

    font-weight: 700;

    font-size: 40px;
  }

  span {
    opacity: 0.1;
  }

  @media (max-width: 760px) {
    height: 78px;
    h1 {
      font-size: 28px;
    }

    span {
      display: none;
    }
  }
`
