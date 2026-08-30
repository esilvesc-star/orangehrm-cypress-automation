class TimePage
 {

  validarPaginaTime() {
    cy.url().should('include', '/time')
    cy.contains('h6', 'Time').should('be.visible')
  }

}

export default new TimePage()