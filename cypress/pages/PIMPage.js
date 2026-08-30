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

  preencherNomeFuncionario(nome, nomeMeio, sobrenome) {
    cy.get('input[name="firstName"]').type(nome)
    cy.get('input[name="middleName"]').type(nomeMeio)
    cy.get('input[name="lastName"]').type(sobrenome)
  }

  clicarSalvarFuncionario() {
    cy.contains('button', 'Save').click()
  }

  validarFuncionarioCadastrado(nomeCompleto) {
    cy.url().should('include', '/pim/viewPersonalDetails')
    cy.contains(nomeCompleto).should('be.visible')
}

}

export default new PIMPage()