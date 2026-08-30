class BuzzPage {

  validarBuzz() {
    cy.url().should('include', '/buzz')
    cy.contains('h6', 'Buzz').should('be.visible')
  }

}

export default new BuzzPage()