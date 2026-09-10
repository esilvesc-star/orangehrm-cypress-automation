class PIMPage {
  // Validações de páginas
  validarPaginaPIM() {
    cy.url().should('include', '/pim')
    cy.contains('h6', 'PIM').should('be.visible')
  }

  // Navegação
  clicarAddEmployee() {
    cy.contains('a', 'Add Employee').click()
  }

  acessarListaFuncionarios() {
    cy.contains('a', 'Employee List').click()
  }
}

export default new PIMPage()
