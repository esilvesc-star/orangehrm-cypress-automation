class MenuLateral {
  clicarAdmin() {
    cy.get('.oxd-sidepanel').contains('a', 'Admin').click()
  }

  clicarPIM() {
    cy.get('.oxd-sidepanel').contains('a', 'PIM').click()
  }

  clicarLeave() {
    cy.get('.oxd-sidepanel').contains('a', 'Leave').click()
  }

  clicarTime() {
    cy.get('.oxd-sidepanel').contains('a', 'Time').click()
  }

  clicarRecruitment() {
    cy.get('.oxd-sidepanel').contains('a', 'Recruitment').click()
  }

  clicarMyInfo() {
    cy.get('.oxd-sidepanel').contains('a', 'My Info').click()
  }

  clicarPerformance() {
    cy.get('.oxd-sidepanel').contains('a', 'Performance').click()
  }

  clicarDashboard() {
    cy.get('.oxd-sidepanel').contains('a', 'Dashboard').click()
  }

  clicarDirectory() {
    cy.get('.oxd-sidepanel').contains('a', 'Directory').click()
  }

  clicarMaintenance() {
    cy.get('.oxd-sidepanel').contains('a', 'Maintenance').click()
  }

  clicarClaim() {
    cy.get('.oxd-sidepanel').contains('a', 'Claim').click()
  }

  clicarBuzz() {
    cy.get('.oxd-sidepanel').contains('a', 'Buzz').click()
  }
}

export default new MenuLateral()