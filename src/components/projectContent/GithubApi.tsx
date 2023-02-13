import React from 'react'
import GifGithubApi from '../../assets/gifs/githubapi.gif'
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

export const GithubApi = () => {
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
        <h3>Buscar usuário Github</h3>
      </ContainerText>
      <img src={GifGithubApi} alt="" />
      <ContainerText>
        <ButtonDescription onClick={handleClickOpen}>
          Abrir descrição da aplicação
        </ButtonDescription>
        <ContainerIcon>
          <a href="https://github.com/GustavoScopinho/api-github">
            <VscGithub size={28} />
          </a>
        </ContainerIcon>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {'Buscar usuário Github'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ marginBottom: 2 }}>
              A aplicação consiste em pesquisar um usuário do Github e assim
              mostrando os repositórios de forma dinâmica, podendo ser
              direcionado para o código apenas clicando em um repositório.
            </DialogContentText>
            <DialogContentText>
              Tecnologias utilizadas: React.js • Typescript • Requisição de API
              (Context) • Testing Library
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </ContainerText>
    </>
  )
}
