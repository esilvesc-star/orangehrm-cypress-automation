Feature: Cadastro de funcionário


  @only
Scenario: Cadastrar e buscar funcionário pelo ID
    Given que estou logado no sistema
    And acesso a opção PIM pelo menu lateral
    And acesso a opção Add Employee
    When preencho os dados do novo funcionário
    And armazeno o ID gerado para o funcionário
    And clico em salvar o novo funcionário
    Then devo visualizar o funcionário cadastrado com sucesso

    When acesso a lista de funcionários
    And pesquiso o funcionário pelo ID gerado
    Then o funcionário deve ser apresentado na lista de resultados