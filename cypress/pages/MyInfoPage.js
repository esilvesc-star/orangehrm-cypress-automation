class MyInfoPage
 {

  validarPaginaMyInfo() {
    cy.url().should('include', '/pim/viewPersonalDetails')
    cy.contains('Personal Details').should('be.visible')
  }

}

export default new MyInfoPage()