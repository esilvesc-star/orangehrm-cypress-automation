class LeavePage
 {

  validarPaginaLeave() {
    cy.url().should('include', '/leave')
    cy.contains('h6', 'Leave').should('be.visible')
  }

}

export default new LeavePage()