class PIMPage {
  // ========================================
  // Validações de páginas
  // ========================================

  validarPaginaPIM() {
    cy.url().should('include', '/pim')
    cy.contains('h6', 'PIM').should('be.visible')
  }

  validarPaginaAddEmployee() {
    cy.url().should('include', '/pim/addEmployee')
    cy.contains('h6', 'Add Employee').should('be.visible')
  }

  validarListaDeFuncionarios() {
    cy.url().should('include', '/pim/viewEmployeeList')
    cy.contains('h5', 'Employee Information').should('be.visible')
  }

  // ========================================
  // Navegação
  // ========================================

  clicarAddEmployee() {
    cy.contains('a', 'Add Employee').click()
  }

  acessarListaFuncionarios() {
    cy.contains('a', 'Employee List').click()
    this.validarListaDeFuncionarios()
  }

  // ========================================
  // Cadastro de funcionário
  // ========================================

  preencherNomeFuncionario(nome, sobrenome) {
    cy.get('input[name="firstName"]').type(nome)
    cy.get('input[name="lastName"]').type(sobrenome)
  }

  preencherNomeFuncionarioCompleto(nome, nomeMeio, sobrenome) {
    cy.get('input[name="firstName"]').type(nome)
    cy.get('input[name="middleName"]').type(nomeMeio)
    cy.get('input[name="lastName"]').type(sobrenome)
  }

  preencherNomeFuncionarioAcimaDoLimite(nome, sobrenome) {
    cy.get('input[name="firstName"]').type(nome)
    cy.get('input[name="lastName"]').type(sobrenome)
  }

  preencherEmployeeIdAcimaDoLimite(employeeId) {
    cy.contains('label', 'Employee Id')
      .parents('.oxd-input-group')
      .find('input')
      .clear()
      .type(employeeId)
  }

  preencherEmployeeId(employeeId) {
    cy.contains('label', 'Employee Id')
      .parents('.oxd-input-group')
      .find('input')
      .clear()
      .type(employeeId)
      .blur()
  }

  capturarEmployeeId() {
    return cy
      .contains('label', 'Employee Id')
      .parents('.oxd-input-group')
      .find('input')
      .invoke('val')
  }

  clicarSalvarFuncionario() {
    cy.contains('button', 'Save').click()
  }

  salvarFuncionarioComSucesso() {
    cy.intercept('POST', '**/api/v2/pim/employees').as('cadastrarFuncionario')

    this.clicarSalvarFuncionario()

    cy.wait('@cadastrarFuncionario')
      .its('response.statusCode')
      .should('eq', 200)
  }

  validarFuncionarioCadastrado(nomeCompleto) {
    cy.url({ timeout: 15000 }).should('include', '/pim/viewPersonalDetails')

    cy.contains('h6', 'Personal Details', { timeout: 15000 }).should(
      'be.visible'
    )

    cy.contains(nomeCompleto, { timeout: 15000 }).should('be.visible')
  }

  // ========================================
  // Validações do cadastro
  // ========================================

  validarCamposObrigatorios() {
    cy.get('input[name="firstName"]')
      .parents('.oxd-input-group')
      .contains('Required')
      .should('be.visible')

    cy.get('input[name="lastName"]')
      .parents('.oxd-input-group')
      .contains('Required')
      .should('be.visible')
  }

  validarLimiteDeCaracteres() {
    cy.get('input[name="firstName"]')
      .parents('.oxd-input-group')
      .contains('Should not exceed 30 characters')
      .should('be.visible')

    cy.get('input[name="lastName"]')
      .parents('.oxd-input-group')
      .contains('Should not exceed 30 characters')
      .should('be.visible')
  }

  validarLimiteDeCaracteresEmployeeId() {
    cy.contains('label', 'Employee Id')
      .parents('.oxd-input-group')
      .contains('Should not exceed 10 characters')
      .should('be.visible')
  }

  // ========================================
  // Pesquisa de funcionário
  // ========================================

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
