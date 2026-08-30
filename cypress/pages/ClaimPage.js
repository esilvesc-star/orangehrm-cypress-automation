class ClaimPage {

  validarClaim() {
    cy.url().should('include', '/claim')
    cy.contains('h6', 'Claim').should('be.visible')
  }

}

export default new ClaimPage()