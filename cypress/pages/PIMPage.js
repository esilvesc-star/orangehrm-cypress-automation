class PIMPage {
  // Validações de páginas
  validarPaginaPIM() {
    cy.url().should('include', '/pim')
    cy.contains('h6', 'PIM').should('be.visible')
  }

  validarListaDeFuncionarios() {
    cy.url().should('include', '/pim/viewEmployeeList')
    cy.contains('h5', 'Employee Information').should('be.visible')
  }

  // Navegação
  clicarAddEmployee() {
    cy.contains('a', 'Add Employee').click()
  }

  acessarListaFuncionarios() {
    cy.contains('a', 'Employee List').click()
    this.validarListaDeFuncionarios()
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

  // Pesquisa de funcionário
  pesquisarFuncionarioPorId(id) {
    cy.contains('label', 'Employee Id')
      .parents('.oxd-input-group')
      .find('input')
      .clear()
      .type(id)

    cy.contains('button', 'Search').click()
  }

  validarFuncionarioPorId(id) {
    cy.get('.oxd-table-body .oxd-table-card').should(($linhas) => {
      const encontrouId = [...$linhas].some((linha) => {
        const celulas = linha.querySelectorAll('.oxd-table-cell')
        const idEncontrado = celulas[1]?.textContent.trim()

        return idEncontrado === String(id)
      })

      expect(encontrouId, `Funcionário com ID exato ${id}`).to.be.true
    })
  }
}

export default new PIMPage()
