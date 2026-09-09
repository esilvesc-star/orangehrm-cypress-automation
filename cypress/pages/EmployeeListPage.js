class EmployeeListPage {
  validarListaDeFuncionarios() {
    cy.url().should('include', '/pim/viewEmployeeList')
    cy.contains('h5', 'Employee Information').should('be.visible')
  }

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

export default new EmployeeListPage()
