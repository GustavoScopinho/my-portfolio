import styled from 'styled-components'

export const Container = styled.section`
  margin-top: -50px;
  width: 100%;
  min-height: calc(100vh - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ContainerImagem = styled.div`
  img {
    width: 450px;
  }
`

export const ContainerBlur = styled.div`
  z-index: 0;
  position: absolute;
  width: 500px;
  height: 400px;
  left: calc(50% - 566px / 2 + 580px);
  top: 300px;

  background: rgba(170, 217, 217, 0.78);
  opacity: 0.25;
  filter: blur(127px);
`

export const ContainerText = styled.div`
  margin-top: -30px;
  line-height: 15px;
  font-weight: 700;
  text-shadow: -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000,
    1px 0px 0px #000;

  color: #fff;

  h1 {
    font-size: 66px;
  }
  h2 {
    font-size: 56px;
  }
`

export const ButtonSC = styled.button`
  width: 180px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #fff;
  background-color: inherit;
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  cursor: pointer;
`
