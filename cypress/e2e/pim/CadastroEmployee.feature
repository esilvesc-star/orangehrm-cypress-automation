Feature: Gerenciamento de funcionários

@cadastro @regression @only
  Scenario: Cadastrar um novo funcionário com sucesso
    Given que estou logado no sistema
    And acesso a opção PIM pelo menu lateral
    And acesso a opção Add Employee
    When preencho os dados do novo funcionário
    And clico em salvar o novo funcionário
    Then devo visualizar o funcionário cadastrado com sucesso

@cadastro @negative
  Scenario: Validar campos obrigatórios no cadastro de funcionário
    Given que estou logado no sistema
    And acesso a opção PIM pelo menu lateral
    And acesso a opção Add Employee
    When tento salvar o funcionário sem preencher os campos obrigatórios
    Then devo visualizar a obrigatoriedade dos campos First Name e Last Name

@cadastro @negative 
  Scenario: Validar limite de caracteres no nome do funcionário
    Given que estou logado no sistema
    And acesso a opção PIM pelo menu lateral
    And acesso a opção Add Employee
    When preencho nome e sobrenome acima do limite permitido
    Then devo visualizar a mensagem de limite de 30 caracteres

@cadastro @negative
Scenario: Validar limite de caracteres no Employee ID
  Given que estou logado no sistema
  And acesso a opção PIM pelo menu lateral
  And acesso a opção Add Employee
  When preencho os dados do novo funcionário
  And informo um Employee ID acima do limite permitido
  Then devo visualizar a mensagem de limite de 10 caracteres no Employee ID   

  @e2e @regression
  Scenario: Cadastrar e buscar funcionário pelo ID
    Given que estou logado no sistema
    And acesso a opção PIM pelo menu lateral
    And acesso a opção Add Employee
    When preencho os dados do novo funcionário completo
    And armazeno o ID gerado para o funcionário
    And clico em salvar o novo funcionário
    Then devo visualizar o funcionário cadastrado com sucesso

    When acesso a lista de funcionários
    And pesquiso o funcionário pelo ID gerado
    Then o funcionário deve ser apresentado na lista de resultados