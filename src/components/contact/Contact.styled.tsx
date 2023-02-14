import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5%;
`

export const ContainerText = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  h1 {
    font-size: 36px;
  }
`
export const ContainerContent = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  p {
    font-size: 26px;
  }
`
