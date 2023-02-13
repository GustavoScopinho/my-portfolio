import React from 'react'
import GifEcommerceGS from '../../assets/gifs/gs-ecommerce.gif'

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

export const EcommerceGs = () => {
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
        <h3>E-commerce GS</h3>
      </ContainerText>
      <img src={GifEcommerceGS} alt="" />
      <ContainerText>
        <ButtonDescription onClick={handleClickOpen}>
          Abrir descrição da aplicação
        </ButtonDescription>
        <ContainerIcon>
          <a href="https://github.com/GustavoScopinho/gs-ecommerce">
            <VscGithub size={28} />
          </a>
        </ContainerIcon>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {'E-commerce GS'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: 2 }}>
              O projeto consiste em um e-commerce onde será possível adicionar
              ao carrinho os produtos sendo uma quantidade ou mais e simular uma
              compra.
            </DialogContentText>
            <DialogContentText>
              Tecnologias utilizadas: React.js • Typescript • Material-UI •
              Requisição de API (Redux Toolkit)
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ContainerText>
    </>
  )
}
