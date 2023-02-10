import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #1e1e1e; */
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
`

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;

  @media (max-width: 760px) {
    width: 95%;
  }
  h1 {
    color: #fff;

    font-weight: 700;
    text-shadow: -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000,
      1px 0px 0px #000;
    font-size: 60px;
  }

  span {
    color: #b8dffa;
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

  @media (max-width: 1040px) {
    flex-direction: column;
  }
`

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 400px;

    @media (max-width: 760px) {
      margin-top: 50px;
      width: 280px;
    }
  }
`
export const ContainerText = styled.div`
  /* width: 450px;
  background: linear-gradient(
    106.51deg,
    rgba(255, 255, 255, 0.2) 3.44%,
    rgba(255, 255, 255, 0.085) 64.82%
  );
  backdrop-filter: blur(15px);
  height: 350px;
  padding: 30px;
  border-radius: 10px;
  display: flex; */

  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    margin-top: -110px;
  }

  p {
    color: #c4c4c4;
    font-size: 18px;
  }
`

export const ContainerLottie = styled.div`
  position: absolute;
  bottom: -160px;
  right: 100px;
`
