import styled from 'styled-components'

export const ContainerHeader = styled.div`
  height: 100px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  font-weight: 400;

  img {
    position: absolute;
    top: 0;
    left: 0px;
  }

  a {
    z-index: 999;
    text-decoration: none;

    :hover {
      color: #b9e0fb;
    }

    @media (max-width: 760px) {
      display: none;
    }
  }
`
