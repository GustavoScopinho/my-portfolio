import React from 'react'
import GifEcommerceLol from '../../assets/gifs/ecommercelol.gif'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import {
  ButtonDescription,
  ContainerIcon,
  ContainerText
} from '../slide/Slide.styled'
import { VscGithub } from 'react-icons/vsc'

export const EcommerceLol = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <ContainerText>
        <h3>E-commerce League of Legends</h3>
      </ContainerText>
      <img src={GifEcommerceLol} alt="" />
      <ContainerText>
        <ButtonDescription onClick={handleClickOpen}>
          Abrir descrição da aplicação
        </ButtonDescription>
        <ContainerIcon>
          <a href="https://github.com/GustavoScopinho/redux-ecommerce">
            <VscGithub size={28} />
          </a>
        </ContainerIcon>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {'E-commerce League of Legends'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: 2 }}>
              O projeto consiste em um e-commerce onde será possível favoritar
              uma skin, adicionar ao carrinho as compras e simular uma compra.
            </DialogContentText>
            <DialogContentText>
              Tecnologias utilizadas: React.js • Javascript • Redux Toolkit
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ContainerText>
    </>
  )
}
