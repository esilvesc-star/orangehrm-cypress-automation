Feature: Login no OrangeHRM
  
  @regression
  @login
  Scenario: Realizar login com sucesso
    Given que estou na página de login
    When informo usuário e senha válidos
    And clico no botão Login
    Then devo acessar o Dashboard

  @regression
  @login
  Scenario: Login com usuário inválido
   Given que estou na página de login
   When informo um usuário inválido
   And clico no botão Login
   Then devo visualizar a mensagem "Invalid credentials"

  @regression
  @login
  Scenario: Login com senha inválida
    Given que estou na página de login
    When informo uma senha inválida
    And clico no botão Login
    Then devo visualizar a mensagem "Invalid credentials"