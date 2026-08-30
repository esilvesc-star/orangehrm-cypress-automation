import {
  Given
} from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

let usuarios

before(() => {
  cy.fixture('users').then((dados) => {
    usuarios = dados
  })
})

// Step comum de autenticação
Given('que estou logado no sistema', () => {
  LoginPage.acessarPaginaLogin()
  LoginPage.preencherUsuario(usuarios.usuarioValido.username)
  LoginPage.preencherSenha(usuarios.usuarioValido.password)
  LoginPage.clicarLogin()

  DashboardPage.validarDashboard()
})