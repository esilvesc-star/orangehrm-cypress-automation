@login
Feature: Login no OrangeHRM

  @smoke @regression
  Scenario: Realizar login com sucesso
    Given que estou na página de login
    When informo usuário e senha válidos
    And clico no botão Login
    Then devo acessar o Dashboard

  @negative @regression
  Scenario: Login com usuário inválido
    Given que estou na página de login
    When informo um usuário inválido
    And clico no botão Login
    Then devo visualizar a mensagem "Invalid credentials"

  @negative @regression
  Scenario: Login com senha inválida
    Given que estou na página de login
    When informo uma senha inválida
    And clico no botão Login
    Then devo visualizar a mensagem "Invalid credentials"