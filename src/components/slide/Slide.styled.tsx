import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    width: 100%;
    height: 20%;
    border-radius: 5px;
  }
`

export const ContainerText = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const ContainerIcon = styled.div`
  cursor: pointer;
`

export const ButtonDescription = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ffffffb4;
  border-radius: 5px;
  color: #fff;
  background-color: inherit;
  padding: 8px 12px;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    transition: all 0.25s ease;
    border: 1px solid #fff;
  }
`
