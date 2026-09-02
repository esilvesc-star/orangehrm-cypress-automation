class LoginPage {

  acessarPaginaLogin() {
    cy.visit('/web/index.php/auth/login')
  }

  preencherUsuario(usuario) {
    cy.get('input[name="usernami"]').type(usuario)
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
    cy.contains(mensagem).should('be.visible')
  }

}

export default new LoginPage()