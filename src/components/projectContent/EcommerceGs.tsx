import React from 'react'
import GifEcommerceGS from '../../assets/gifs/gs-ecommerce.gif'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ContainerText } from '../slide/Slide.styled'

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
        <Button variant="outlined" onClick={handleClickOpen}>
          Abrir descrição da aplicação
        </Button>
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
