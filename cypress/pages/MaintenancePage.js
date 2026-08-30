class MaintenancePage {

  validarMaintenance() {
    cy.url().should('include', '/maintenance')
    cy.contains('h6', 'Administrator Access').should('be.visible')
  }

}

export default new MaintenancePage()