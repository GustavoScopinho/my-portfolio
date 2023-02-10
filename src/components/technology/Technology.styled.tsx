import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ContainerTec = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-left: 8%;
`
export const ContainerText = styled.div`
  width: 800px;
  color: #c4c4c4;
  font-size: 18px;
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-between;
`
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
    opacity: 0.7;
    font-weight: 700;

    font-size: 40px;
  }

  span {
    color: #b8dffa;
  }
`
