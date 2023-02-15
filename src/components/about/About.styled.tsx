import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;

  @media (max-width: 650px) {
    min-height: 100%;
    margin-top: 12%;
  }
`

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  h1 {
    background: linear-gradient(92deg, #fff 0.7%, #00a3ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    font-weight: 700;

    font-size: 60px;
  }

  span {
    color: #b8dffa;
  }

  @media (max-width: 840px) {
    width: 100%;
    h1 {
      font-size: 36px;
    }
  }
`

export const Content = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #f0f8ff24;
  padding: 0px 50px;

  height: 80%;
  border-radius: 20px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    width: 68%;
    height: 100%;
    margin-top: 20%;
  }
`

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 400px;

    @media (max-width: 1000px) {
      margin-top: 50px;
      width: 280px;
    }
  }
`
export const ContainerText = styled.div`
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    margin-top: -110px;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`

export const ContainerLottie = styled.div`
  position: absolute;
  bottom: -160px;
  right: 100px;
`
