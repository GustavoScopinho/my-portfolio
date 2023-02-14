import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  @media (max-width: 760px) {
    margin-top: 50%;
  }
`
export const ContainerText = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 50px;
    color: #fff;
    font-weight: 600;
    margin-bottom: -20px;
  }

  @media (max-width: 760px) {
    h1 {
      margin: 0;
    }
  }
`
