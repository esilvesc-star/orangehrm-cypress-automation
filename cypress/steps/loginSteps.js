import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

let usuarios

before(() => {
  cy.fixture('users').then((dados) => {
    usuarios = dados
  })
})

// Steps de acesso

Given('que estou na página de login', () => {
  LoginPage.acessarPaginaLogin()
})

// Steps de credenciais

When('informo usuário e senha válidos', () => {
  LoginPage.preencherUsuario(usuarios.usuarioValido.username)
  LoginPage.preencherSenha(usuarios.usuarioValido.password)
})

When('informo um usuário inválido', () => {
  LoginPage.preencherUsuario(usuarios.usuarioInvalido.username)
  LoginPage.preencherSenha(usuarios.usuarioInvalido.password)
})

When('informo uma senha inválida', () => {
  LoginPage.preencherUsuario(usuarios.senhaInvalida.username)
  LoginPage.preencherSenha(usuarios.senhaInvalida.password)
})

// Steps de ações

When('clico no botão Login', () => {
  LoginPage.clicarLogin()
})

// Steps de validação

Then('devo acessar o Dashboard', () => {
  DashboardPage.validarDashboard()
})

Then('devo visualizar a mensagem {string}', (mensagem) => {
  LoginPage.validarMensagemErro(mensagem)
})