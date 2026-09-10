# Testes Automatizados com Cypress + Cucumber

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-17202C?logo=cypress)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
[![Cypress Tests](https://github.com/esilvesc-star/orangehrm-cypress-automation/actions/workflows/cypress-tests.yml/badge.svg)](https://github.com/esilvesc-star/orangehrm-cypress-automation/actions/workflows/cypress-tests.yml)

Projeto de automação Web desenvolvido com **Cypress, JavaScript e Cucumber**, utilizando o OrangeHRM Demo.

O projeto faz parte de um portfólio de QA e demonstra testes de autenticação, navegação e cadastro de funcionários, com Page Object Model, componentes reutilizáveis e integração contínua no GitHub Actions.

## Tecnologias

- Cypress e JavaScript
- Cucumber e Gherkin
- `@badeball/cypress-cucumber-preprocessor`
- Esbuild
- Node.js e npm
- Prettier
- GitHub Actions

## Cobertura automatizada

A suíte contém **20 cenários**:

| Funcionalidade | Cenários | Cobertura                                                                           |
| -------------- | -------: | ----------------------------------------------------------------------------------- |
| Login          |        3 | Credenciais válidas, usuário inválido e senha inválida                              |
| Menu lateral   |       12 | Navegação e validação das páginas dos módulos                                       |
| PIM            |        5 | Cadastro, campos obrigatórios, limites de caracteres e cadastro com pesquisa por ID |

Os módulos cobertos pelo menu são: Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim e Buzz.

No PIM, são verificados:

- Cadastro com nome e sobrenome.
- Obrigatoriedade de First Name e Last Name.
- Limite de 30 caracteres nos campos de nome e sobrenome.
- Limite de 10 caracteres no Employee ID.
- Cadastro com nome completo e localização do funcionário pelo ID.

## Organização do projeto

| Diretório ou arquivo                          | Responsabilidade                                           |
| --------------------------------------------- | ---------------------------------------------------------- |
| `cypress/e2e/login/login.feature`             | Cenários de autenticação                                   |
| `cypress/e2e/menu/menu.feature`               | Cenários de navegação                                      |
| `cypress/e2e/pim/cadastroFuncionario.feature` | Cenários de cadastro e pesquisa                            |
| `cypress/steps/`                              | Ligação entre os passos Gherkin e as Pages                 |
| `cypress/pages/`                              | Ações, seletores e validações de cada página               |
| `cypress/components/MenuLateral.js`           | Navegação reutilizável pelo menu                           |
| `cypress/fixtures/users.json`                 | Dados dos usuários                                         |
| `cypress/fixtures/funcionarios.json`          | Dados dos funcionários                                     |
| `cypress/support/commands.js`                 | Comandos compartilhados, incluindo autenticação com sessão |
| `cypress/support/e2e.js`                      | Carregamento do suporte aos testes                         |
| `cypress.config.js`                           | Configuração do Cypress e integração com Cucumber          |
| `.github/workflows/cypress-tests.yml`         | Pipeline de integração contínua                            |

### Separação das páginas do PIM

| Page Object              | Responsabilidade                                     |
| ------------------------ | ---------------------------------------------------- |
| `PIMPage.js`             | Validação do módulo e navegação                      |
| `AddEmployeePage.js`     | Preenchimento, salvamento e validações do formulário |
| `EmployeeListPage.js`    | Pesquisa e validação dos resultados                  |
| `PersonalDetailsPage.js` | Validação dos detalhes após o cadastro               |

Os Steps ficam em `cadastroFuncionarioSteps.js`, `loginSteps.js`, `menuLateralSteps.js` e `commonSteps.js`.

## Decisões de implementação

### Autenticação com sessão

O step compartilhado `Given que estou logado no sistema` utiliza o comando `cy.loginComSessao()`.

Esse comando usa `cy.session()` para guardar e restaurar a autenticação nos testes de menu e PIM. A sessão é validada por uma requisição ao Dashboard e pode ser reutilizada entre arquivos durante a mesma execução, na mesma máquina.

Após restaurar a sessão, o teste visita o Dashboard. Os cenários específicos de login continuam exercitando o preenchimento e o envio das credenciais.

### Cadastro e massa de dados

As fixtures JSON mantêm os dados separados das ações de interface.

O método `preencherDadosFuncionario()` recebe um objeto com nome, nome do meio opcional e sobrenome. Os cenários de cadastro geram um Employee ID para reduzir colisões com registros existentes no ambiente público.

O fluxo de sucesso intercepta a requisição de cadastro antes do clique em Save e verifica sua resposta. Os cenários de formulário inválido utilizam somente o clique, seguido da validação da mensagem esperada.

Na pesquisa, o ID é comparado exatamente com o conteúdo da coluna correspondente.

### Menu reutilizável

O componente `MenuLateral` concentra a navegação no método `acessarOpcao(opcao)`, restringindo a busca ao painel lateral.

Exemplo:

```javascript
MenuLateral.acessarOpcao('PIM')
```

## Como executar

### Pré-requisitos

- Node.js 22, utilizado na pipeline
- npm
- Git
- Acesso à internet para acessar o OrangeHRM Demo

### Instalação

```bash
git clone https://github.com/esilvesc-star/orangehrm-cypress-automation.git
cd orangehrm-cypress-automation
npm ci
```

### Comandos disponíveis

| Comando                   | Finalidade                                  |
| ------------------------- | ------------------------------------------- |
| `npm run cy:open`         | Abrir a interface do Cypress                |
| `npm test`                | Executar toda a suíte em modo headless      |
| `npm run test:smoke`      | Executar os cenários com `@smoke`           |
| `npm run test:regression` | Executar os cenários com `@regression`      |
| `npm run test:login`      | Executar os cenários de login               |
| `npm run test:menu`       | Executar os cenários do menu                |
| `npm run test:pim`        | Executar os cenários do PIM                 |
| `npm run format`          | Aplicar a formatação do Prettier            |
| `npm run format:check`    | Verificar a formatação sem alterar arquivos |

### Filtros por tags

Os comandos abaixo utilizam a opção `--expose`, adotada na configuração atual do projeto.

Executar o cenário marcado como E2E:

```bash
npm test -- --expose tags=@e2e
```

Executar menu e PIM:

```bash
npm test -- --expose "tags=@menu or @pim"
```

Executar uma Feature:

```bash
npm test -- --spec "cypress/e2e/pim/cadastroFuncionario.feature"
```

Em execuções filtradas, cenários não selecionados podem aparecer como `Pending`. Isso não representa uma falha de execução.

## Integração contínua

O workflow `Cypress Tests` é executado:

- Em pushes para `main`.
- Em pull requests destinados à `main`.
- Manualmente pela aba Actions, na opção **Run workflow**.

A pipeline:

1. Obtém o código do repositório.
2. Configura o Node.js 22 e o cache do npm.
3. Instala as dependências com `npm ci`.
4. Verifica a formatação com `npm run format:check`.
5. Executa a suíte com `npm test`.
6. Publica as evidências disponíveis.

O job possui limite de 20 minutos. Erros de formatação ou falhas nos testes fazem a execução falhar.

## Evidências

Durante a execução em modo headless:

- Vídeos são gerados em `cypress/videos/`.
- Screenshots de falhas são gerados em `cypress/screenshots/`.

No GitHub Actions, o workflow tenta publicar esses arquivos mesmo quando uma etapa falha. Quando disponíveis, ficam no artefato **`cypress-evidencias`**, com retenção de 7 dias.

Para acessar, abra **Actions → execução desejada → Artifacts**.

## Formatação

O Prettier mantém o padrão de código do projeto:

- Sem ponto e vírgula.
- Aspas simples.
- Indentação de dois espaços.
- Sem vírgulas finais.

Antes de enviar alterações:

```bash
npm run format
npm run format:check
```

## Ambiente de demonstração

Aplicação: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/).

Por ser um ambiente público compartilhado, os dados e a disponibilidade podem variar. Falhas devem ser analisadas com base nas mensagens, nas respostas das requisições e nas evidências geradas.

A aprovação da suíte representa o resultado daquela execução e dos cenários cobertos.
