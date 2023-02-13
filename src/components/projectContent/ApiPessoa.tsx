import React from 'react'
import GifApiPessoa from '../../assets/gifs/api-pessoa.gif'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { ContainerText } from '../slide/Slide.styled'

export const ApiPessoa = () => {
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
        <h3>Aplicação Gestão de Pessoas</h3>
      </ContainerText>
      <img src={GifApiPessoa} alt="" />
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
            {'Aplicação Gestão de Pessoas'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: 2 }}>
              Aplicação consumindo api de usuários, contendo página de login,
              cadastro, logout e lista de usuários, podendo adicionar uma nova
              pessoa, adicionar um contato ou endereço a ela, editar e
              deletar(CRUD).
            </DialogContentText>
            <DialogContentText>
              Tecnologias utilizadas: React.js • Typescript • Requisição de API
              (Context) • Login LocalStore(JWT)
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ContainerText>
    </>
  )
}
