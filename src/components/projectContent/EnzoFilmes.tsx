import React from 'react'
import GifTopFilmes from '../../assets/gifs/topfilmes.gif'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ContainerText } from '../slide/Slide.styled'

export const EnzoFilmes = () => {
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
        <h3>Enzo Filmes</h3>
      </ContainerText>
      <img src={GifTopFilmes} alt="" />
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
            {'Enzo Filmes'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: 2 }}>
              O projeto consiste em um site de filmes/séries podendo enviar
              sugestões.
            </DialogContentText>
            <DialogContentText>
              Tecnologias utilizadas: React.js • Javascript
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ContainerText>
    </>
  )
}
