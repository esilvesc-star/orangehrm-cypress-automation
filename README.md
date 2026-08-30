# Testes Automatizados com Cypress + Cucumber

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-17202C?logo=cypress)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

Framework de automação de testes Web desenvolvido com **Cypress, JavaScript e Cucumber BDD**, utilizando o **OrangeHRM** como aplicação de demonstração.

O projeto foi estruturado aplicando conceitos de **Page Object Model (POM)**, componentes reutilizáveis, separação das Step Definitions e gerenciamento de massas de dados através de Fixtures.

---

## 🎯 Principais Recursos

- Cypress para automação Web E2E
- Cucumber integrado ao Cypress
- Cenários escritos em Gherkin
- Page Object Model (POM)
- Componentes reutilizáveis
- Steps compartilhados entre diferentes Features
- Massa de dados utilizando Fixtures JSON
- Separação entre cenários, regras de negócio e interação com elementos
- Validações de URL e elementos da interface
- Execução de testes através de tags
- Estrutura preparada para evolução da suíte automatizada

---

## 🚀 Visão Geral

Este projeto foi desenvolvido com o objetivo de demonstrar uma arquitetura organizada e escalável para automação de testes Web utilizando Cypress.

A estrutura busca separar claramente as responsabilidades do framework, facilitando manutenção, reutilização de código e evolução da suíte de testes.

A aplicação utilizada é o **OrangeHRM Demo**, permitindo automatizar fluxos próximos aos encontrados em sistemas corporativos, como autenticação, navegação entre módulos e cadastro de funcionários.

---

## 🛠️ Tecnologias Utilizadas

### Linguagem

- JavaScript

### Automação

- Cypress

### BDD

- Cucumber
- Gherkin
- `@badeball/cypress-cucumber-preprocessor`

### Arquitetura

- Page Object Model (POM)
- Components
- Common Steps

### Massa de Dados

- Cypress Fixtures
- JSON

### Gerenciamento de dependências

- Node.js
- npm

---

## 🏗️ Arquitetura do Framework

O projeto utiliza uma arquitetura baseada em separação de responsabilidades:

```text
Feature
   ↓
Step Definition
   ↓
Page Object / Component
   ↓
Cypress
   ↓
Aplicação Web
```

Cada camada possui uma responsabilidade específica:

**Feature**

Contém os cenários de negócio escritos em Gherkin.

**Step Definition**

Realiza a ligação entre os passos escritos nas Features e as ações implementadas na automação.

**Page Object**

Centraliza elementos, ações e validações específicas de cada página.

**Component**

Centraliza comportamentos compartilhados por diferentes páginas, como o menu lateral.

**Common Steps**

Centraliza Steps reutilizados por diferentes Features, evitando duplicação de Step Definitions.

**Fixtures**

Armazena massas de dados utilizadas durante a execução dos testes.

Essa separação contribui para **reutilização, manutenção e escalabilidade da automação**.

---

## 📂 Estrutura do Projeto

```text
cypress/
│
├── components/
│   └── MenuLateral.js
│
├── e2e/
│   ├── login/
│   │   └── login.feature
│   │
│   ├── menu/
│   │   └── menu.feature
│   │
│   └── pim/
│       └── CadastroEmployee.feature
│
├── fixtures/
│   ├── users.json
│   └── cadastroEmployees.json
│
├── pages/
│   ├── AdminPage.js
│   ├── BuzzPage.js
│   ├── ClaimPage.js
│   ├── DashboardPage.js
│   ├── DirectoryPage.js
│   ├── LeavePage.js
│   ├── LoginPage.js
│   ├── MaintenancePage.js
│   ├── MyInfoPage.js
│   ├── PerformancePage.js
│   ├── PIMPage.js
│   ├── RecruitmentPage.js
│   └── TimePage.js
│
├── steps/
│   ├── commonSteps.js
│   ├── loginSteps.js
│   ├── menuLateralSteps.js
│   └── CadastroEmployeeSteps.js
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
└── screenshots/

cypress.config.js
package.json
package-lock.json
```

---

## ♻️ Reutilização de Steps

Um dos pontos da arquitetura é a utilização de **Steps compartilhados**.

Por exemplo, diferentes funcionalidades precisam iniciar com o usuário autenticado:

```gherkin
Given que estou logado no sistema
```

Em vez de duplicar essa implementação em diferentes arquivos de Steps, o comportamento é centralizado no:

```text
commonSteps.js
```

Isso evita definições duplicadas no Cucumber e melhora a reutilização do código.

---

## 🧩 Componentização

Elementos compartilhados por várias funcionalidades são tratados como componentes.

O menu lateral do OrangeHRM, por exemplo, está centralizado em:

```text
components/MenuLateral.js
```

Dessa forma, operações como:

```text
Admin
PIM
Leave
Time
Recruitment
My Info
Performance
Dashboard
Directory
Maintenance
Claim
Buzz
```

podem ser reutilizadas por diferentes cenários sem duplicar os seletores e comportamentos de navegação.

---

## 💾 Gerenciamento de Massa de Dados

Os dados utilizados pelos testes são mantidos separados da implementação através de **Fixtures JSON**.

Exemplo:

```text
cypress/fixtures/users.json
cypress/fixtures/cadastroEmployees.json
```

Os dados são carregados utilizando:

```javascript
cy.fixture('users')
```

Essa abordagem evita dados de teste espalhados pelas Step Definitions e facilita sua manutenção.

---

## ✅ Cenários Automatizados

### 🔐 Login

- Login com sucesso
- Login com usuário inválido
- Login com senha inválida
- Validação de acesso ao Dashboard após autenticação

### 🧭 Menu Lateral

Validação da navegação para os módulos:

- Admin
- PIM
- Leave
- Time
- Recruitment
- My Info
- Performance
- Dashboard
- Directory
- Maintenance
- Claim
- Buzz

### 👤 PIM — Cadastro de Funcionário

Fluxo automatizado:

```text
Login
  ↓
Acesso ao PIM
  ↓
Add Employee
  ↓
Preenchimento dos dados
  ↓
Salvamento
  ↓
Validação do funcionário cadastrado
```

O cenário valida o cadastro de um novo funcionário utilizando massa de dados externa através de Fixture.

---

## 📝 Exemplo de Cenário BDD

```gherkin
Feature: Cadastro de funcionário

  @regression
  Scenario: Cadastrar um novo funcionário com sucesso
    Given que estou logado no sistema
    And acesso a opção PIM pelo menu lateral
    And acesso a opção Add Employee
    When preencho os dados do novo funcionário
    And clico em salvar o novo funcionário
    Then devo visualizar o funcionário cadastrado com sucesso
```

A utilização de Gherkin mantém os cenários legíveis e aproxima a documentação do comportamento esperado da aplicação.

---

## ▶️ Como Executar

### Pré-requisitos

Antes de executar o projeto é necessário possuir:

- Node.js
- npm
- Git

---

### Clonar o projeto

```bash
git clone URL_DO_REPOSITORIO
```

Acesse o diretório:

```bash
cd NOME_DO_REPOSITORIO
```

---

### Instalar as dependências

```bash
npm install
```

---

### Abrir o Cypress

```bash
npx cypress open
```

Após abrir o Cypress:

```text
E2E Testing
   ↓
Selecionar navegador
   ↓
Selecionar a Feature
```

---

### Executar em modo Headless

```bash
npx cypress run
```

---

## 🏷️ Execução por Tags

Os cenários podem ser classificados através de tags do Cucumber.

Exemplo:

```gherkin
@regression
Scenario: Acessar a página PIM pelo menu lateral
```

Para desenvolvimento e depuração de um cenário específico, o projeto também pode utilizar temporariamente:

```gherkin
@only
```

Isso facilita trabalhar isoladamente em um cenário durante sua implementação.

---

## 🔄 Fluxo da Automação

Um fluxo típico executado pelo framework é:

```text
Feature (.feature)
      ↓
Step Definition
      ↓
Page Object / Component
      ↓
Comandos Cypress
      ↓
OrangeHRM
      ↓
Validação
```

Essa organização evita concentrar regras de negócio, seletores e comandos Cypress no mesmo arquivo.

---

## 🎯 Boas Práticas Aplicadas

O projeto procura aplicar práticas importantes para manutenção de automação:

- Separação de responsabilidades
- Page Object Model
- Reutilização de componentes
- Steps compartilhados
- Massa de dados externa
- Cenários BDD legíveis
- Evitar duplicação de Step Definitions
- Seletores centralizados
- Validações explícitas
- Organização por funcionalidade
- Utilização de tags para classificação dos testes

---

## 🌐 Aplicação de Testes

Os testes utilizam a aplicação pública de demonstração:

**OrangeHRM Demo**

https://opensource-demo.orangehrmlive.com/

> A aplicação é utilizada exclusivamente como ambiente público para demonstração das técnicas de automação implementadas neste projeto.

---

## 📌 Objetivo do Projeto

Este projeto faz parte de um portfólio de automação de testes e tem como objetivo demonstrar conhecimentos em:

**Cypress • JavaScript • Cucumber • BDD • Gherkin • Page Object Model • Fixtures • Componentização • Automação E2E**

A arquitetura foi estruturada pensando em legibilidade, manutenção, reutilização e crescimento da suíte automatizada.