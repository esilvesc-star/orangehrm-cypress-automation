class PIMPage {

  validarPaginaPIM() {
    cy.url().should('include', '/pim')
    cy.contains('h6', 'PIM').should('be.visible')
  }

  clicarAddEmployee() {
    cy.contains('a', 'Add Employee').click()
  }

  validarPaginaAddEmployee() {
    cy.url().should('include', '/pim/addEmployee')
    cy.contains('h6', 'Add Employee').should('be.visible')
  }

  validarListaDeFuncionários() {
    cy.url().should('include', '/pim/viewEmployeeList')
    cy.contains('h5', 'Employee Information').should('be.visible')
  }

  preencherNomeFuncionario(nome, nomeMeio, sobrenome) {
    cy.get('input[name="firstName"]').type(nome)
    cy.get('input[name="middleName"]').type(nomeMeio)
    cy.get('input[name="lastName"]').type(sobrenome)
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

  // Cadastro

preencherNomeFuncionario(nome, nomeMeio, sobrenome) {
    cy.get('input[name="firstName"]').type(nome)
    cy.get('input[name="middleName"]').type(nomeMeio)
    cy.get('input[name="lastName"]').type(sobrenome)
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

// Busca por ID

acessarListaFuncionarios() {
    cy.contains('a', 'Employee List').click()
    cy.url().should('include', '/pim/viewEmployeeList')
    cy.contains('h5', 'Employee Information').should('be.visible')
}

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

//Validar campos obrigatórios no cadastro de funcionário
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

}

export default new PIMPage()