class AddEmployeePage {
  validarPaginaAddEmployee() {
    cy.url().should('include', '/pim/addEmployee')
    cy.contains('h6', 'Add Employee').should('be.visible')
  }

  // Preenchimento do formulário
  preencherDadosFuncionario({ firstName, middleName = '', lastName }) {
    cy.get('input[name="firstName"]').clear().type(firstName)

    cy.get('input[name="middleName"]').clear()

    if (middleName) {
      cy.get('input[name="middleName"]').type(middleName)
    }

    cy.get('input[name="lastName"]').clear().type(lastName)
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

  // Salvamento
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

  // Validações do formulário
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
}

export default new AddEmployeePage()
