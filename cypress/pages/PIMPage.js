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

  // Validação após o cadastro
  validarFuncionarioCadastrado(nomeCompleto) {
    cy.url({ timeout: 15000 }).should('include', '/pim/viewPersonalDetails')

    cy.contains('h6', 'Personal Details', { timeout: 15000 }).should(
      'be.visible'
    )

    cy.get('.orangehrm-edit-employee-name h6', { timeout: 15000 })
      .should('be.visible')
      .and('have.text', nomeCompleto)
  }
}

export default new PIMPage()
