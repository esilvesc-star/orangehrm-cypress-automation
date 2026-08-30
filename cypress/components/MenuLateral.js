class MenuLateral {

  clicarAdmin() {
    cy.contains('a', 'Admin').click()
  }

  clicarPIM() {
    cy.contains('a', 'PIM').click()
  }

  clicarLeave() {
    cy.contains('a', 'Leave').click()
  }

  clicarTime() {
    cy.contains('a', 'Time').click()
  }

  clicarRecruitment() {
    cy.contains('a', 'Recruitment').click()
  }

  clicarMyInfo() {
    cy.contains('a', 'My Info').click()
  }           

  clicarPerformance() {
    cy.contains('a', 'Performance').click()
  }

  clicarDashboard() {
    cy.contains('a', 'Dashboard').click()
  }

  clicarDirectory() {
    cy.contains('a', 'Directory').click()
  }

  clicarMaintenance() {
    cy.contains('a', 'Maintenance').click()
  }

  clicarClaim() {
    cy.contains('a', 'Claim').click()
  }

  clicarBuzz() {
    cy.contains('a', 'Buzz').click()
  }

}

export default new MenuLateral()