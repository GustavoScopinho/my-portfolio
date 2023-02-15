import styled from 'styled-components'

export const Container = styled.section`
  margin-top: -50px;
  width: 100%;
  min-height: calc(100vh - 80px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    min-height: 100%;
  }
`

export const ContainerImagem = styled.div`
  img {
    width: 450px;

    @media (max-width: 800px) {
      width: 280px;
    }
  }
`

export const ContainerBlur = styled.div`
  z-index: 0;
  position: absolute;
  width: 500px;
  height: 300px;
  left: calc(50% - 566px / 2 + 580px);
  top: 250px;
  background: rgba(170, 217, 217, 0.78);
  opacity: 0.25;
  filter: blur(127px);

  @media (max-width: 800px) {
    display: none;
  }
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
  h2,
  h3 {
    font-size: 56px;
  }
  h3 {
    color: #b8dffa;
  }

  @media (max-width: 1040px) {
    h1 {
      font-size: 40px;
    }
    h2,
    h3 {
      font-size: 36px;
    }
  }

  @media (max-width: 800px) {
    margin: 0 0 10% 0;
    h1 {
      font-size: 38px;
    }
    h2,
    h3 {
      font-size: 28px;
    }
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
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    box-shadow: #b9dffb69 0 8px 15px;
    transform: translateY(-2px);
  }

  :disabled {
    pointer-events: none;
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`
