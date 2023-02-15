import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 760px) {
    height: 100%;
    margin-top: 20%;
  }
`
export const ContainerTec = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-left: 8%;

  @media (max-width: 760px) {
    flex-direction: column-reverse;
  }
`
export const ContainerText = styled.div`
  width: 800px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;

  @media (max-width: 760px) {
    margin-top: -10%;
    width: 100%;
    height: 100%;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 760px) {
    margin: -30% 0;
  }
`
