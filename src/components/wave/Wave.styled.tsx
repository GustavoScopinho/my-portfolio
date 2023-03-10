import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;

  @media (max-width: 1040px) {
    position: static;
  }

  svg {
    width: calc(100% + 1.3px);
    height: 230px;
    transform: rotateY(180deg);
    margin-bottom: -4px;
  }
  .shape-fill {
    fill: #f0f8ff24;
  }
`
export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  p {
    color: #fff;
    text-align: center;
  }

  @media (max-width: 640px) {
    p {
      width: 150px;
    }
  }
`
