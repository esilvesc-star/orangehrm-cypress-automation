import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

Cypress.Commands.add('loginComSessao', (usuario, senha) => {
  cy.session(
    ['login', usuario],
    () => {
      LoginPage.acessarPaginaLogin()
      LoginPage.preencherUsuario(usuario)
      LoginPage.preencherSenha(senha)
      LoginPage.clicarLogin()

      DashboardPage.validarDashboard()
    },
    {
      validate() {
        cy.request({
          url: '/web/index.php/dashboard/index',
          followRedirect: false
        })
          .its('status')
          .should('eq', 200)
      },
      cacheAcrossSpecs: true
    }
  )
})
