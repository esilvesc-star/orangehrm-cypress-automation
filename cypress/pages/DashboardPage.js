class DashboardPage {

  validarDashboard() {
    cy.url().should('include', '/dashboard')
    cy.contains('h6', 'Dashboard').should('be.visible')
  }

}

export default new DashboardPage()