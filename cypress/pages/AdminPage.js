class AdminPage {

  validarPaginaAdmin() {
    cy.url().should('include', '/admin')
    cy.contains('h6', 'Admin').should('be.visible')
  }

}

export default new AdminPage()