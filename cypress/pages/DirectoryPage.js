class DirectoryPage {

  validarDirectory() {
    cy.url().should('include', '/directory')
    cy.contains('h6', 'Directory').should('be.visible')
  }

}

export default new DirectoryPage()