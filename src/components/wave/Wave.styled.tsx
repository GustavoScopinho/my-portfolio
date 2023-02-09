import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: absolute;
  margin-top: -10px;
  transform: rotate(180deg);

  @media (max-width: 1040px) {
    position: static;
  }

  svg {
    width: calc(100% + 1.3px);
    height: 217px;
    transform: rotateY(180deg);
  }
  .shape-fill {
    fill: #071a51;
  }
`
