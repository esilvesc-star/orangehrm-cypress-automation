class MenuLateral {
  // Acessa uma opção do menu lateral pelo nome exibido na tela.
  // Exemplos: 'Admin', 'PIM' e 'My Info'.

  acessarOpcao(opcao) {
    cy.get('.oxd-sidepanel').contains('a', opcao).click()
  }
}

export default new MenuLateral()
