class PerformancePage
 {

  validarPaginaPerformance() {
    cy.url().should('include', '/performance')
    cy.contains('Performance').should('be.visible')
  }

}

export default new PerformancePage()