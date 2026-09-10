import { Given } from '@badeball/cypress-cucumber-preprocessor'
import DashboardPage from '../pages/DashboardPage'

let usuarios

before(() => {
  cy.fixture('users').then((dados) => {
    usuarios = dados
  })
})

// Step comum de autenticação
Given('que estou logado no sistema', () => {
  const { username, password } = usuarios.usuarioValido

  cy.loginComSessao(username, password)

  cy.visit('/web/index.php/dashboard/index')
  DashboardPage.validarDashboard()
})
