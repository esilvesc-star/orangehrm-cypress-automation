class RecruitmentPage
 {

  validarPaginaRecruitment() {
    cy.url().should('include', '/recruitment')
    cy.contains('h6', 'Recruitment').should('be.visible')
  }

}

export default new RecruitmentPage()