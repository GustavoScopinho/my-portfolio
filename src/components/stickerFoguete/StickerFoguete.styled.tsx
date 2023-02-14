import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;

  img {
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  :hover {
    transform: scale(1.03);
  }
`
