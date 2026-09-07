class LoginPage {
  acessarPaginaLogin() {
    cy.visit('/web/index.php/auth/login')
  }

  preencherUsuario(usuario) {
    cy.get('input[name="username"]').type(usuario)
  }

  preencherSenha(senha) {
    cy.get('input[name="password"]').type(senha)
  }

  clicarLogin() {
    cy.get('button[type="submit"]').click()
  }

  validarPaginaLogin() {
    cy.contains('h5', 'Login').should('be.visible')
  }

  validarMensagemErro(mensagem) {
    cy.get('.orangehrm-login-error [role="alert"] .oxd-alert-content-text')
      .should('be.visible')
      .and('have.text', mensagem)
  }
}

export default new LoginPage()
