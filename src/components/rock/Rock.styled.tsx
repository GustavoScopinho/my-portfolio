import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: -70px;
  img {
    width: 40px;
    animation: rock 7s linear infinite;

    @media (max-width: 600px) {
      width: 20px;
    }
  }

  @keyframes rock {
    0% {
      transform: translate(1);
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh);
      opacity: 0;
    }
  }

  img:nth-child(1) {
    animation-delay: -2s;
    width: 25px;
  }
  img:nth-child(2) {
    animation-delay: -1s;
  }
  img:nth-child(3) {
    animation-delay: -3s;
    width: 35px;
  }
  img:nth-child(4) {
    animation-delay: -4.5s;
  }
  img:nth-child(5) {
    animation-delay: -3s;
    width: 30px;
  }
  img:nth-child(6) {
    animation-delay: -6s;
    width: 35px;
  }
  img:nth-child(7) {
    animation-delay: -7s;
  }
`
