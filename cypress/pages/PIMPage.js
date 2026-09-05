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

  capturarEmployeeId() {
    return cy.contains('label', 'Employee Id')
      .parents('.oxd-input-group')
      .find('input')
      .invoke('val')
  }

  clicarSalvarFuncionario() {
    cy.contains('button', 'Save').click()
  }

  validarFuncionarioCadastrado(nomeCompleto) {
    cy.url().should('include', '/pim/viewPersonalDetails')
    cy.contains(nomeCompleto).should('be.visible')
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
      .type(id)

    cy.contains('button', 'Search').click()
  }

  validarFuncionarioPorId(id) {
    cy.get('.oxd-table-body')
      .contains(id)
      .should('be.visible')
  }

}

export default new PIMPage()