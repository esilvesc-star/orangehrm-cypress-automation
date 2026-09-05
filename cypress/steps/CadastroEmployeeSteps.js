import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'

import PIMPage from '../pages/PIMPage'

let employeeData
let employeeId

before(() => {
  cy.fixture('cadastroEmployees').then((dados) => {
    employeeData = dados
  })
})


// ========================================
// Navegação
// ========================================

When('acesso a opção Add Employee', () => {
  PIMPage.clicarAddEmployee()
})

When('acesso a lista de funcionários', () => {
  PIMPage.acessarListaFuncionarios()
})


// ========================================
// Cadastro de funcionário
// ========================================

When('preencho os dados do novo funcionário', () => {
  PIMPage.preencherNomeFuncionario(
    employeeData.funcionarioValido.firstName,
    employeeData.funcionarioValido.lastName
  )
})

When('preencho os dados do novo funcionário completo', () => {
  PIMPage.preencherNomeFuncionarioCompleto(
    employeeData.funcionarioValido.firstName,
    employeeData.funcionarioValido.middleName,
    employeeData.funcionarioValido.lastName
  )
})

When('preencho nome e sobrenome acima do limite permitido', () => {
  PIMPage.preencherNomeFuncionarioAcimaDoLimite(
    employeeData.funcionarioAcimaDoLimite.firstName,
    employeeData.funcionarioAcimaDoLimite.lastName
  )
})

When('informo um Employee ID acima do limite permitido', () => {
  PIMPage.preencherEmployeeIdAcimaDoLimite(
    employeeData.idAcimaDoLimite.employeeId
  )
})

When('armazeno o ID gerado para o funcionário', () => {
  PIMPage.capturarEmployeeId().then((id) => {
    employeeId = id
  })
})

When('clico em salvar o novo funcionário', () => {
  PIMPage.clicarSalvarFuncionario()
})

Then('devo visualizar o funcionário cadastrado com sucesso', () => {
  const nomeCompleto = `${employeeData.funcionarioValido.firstName} ${employeeData.funcionarioValido.lastName}`

  PIMPage.validarFuncionarioCadastrado(nomeCompleto)
})


// ========================================
// Validações do cadastro
// ========================================

When('tento salvar o funcionário sem preencher os campos obrigatórios', () => {
  PIMPage.clicarSalvarFuncionario()
})

Then('devo visualizar a obrigatoriedade dos campos First Name e Last Name', () => {
  PIMPage.validarCamposObrigatorios()
})

Then('devo visualizar a mensagem de limite de 30 caracteres', () => {
  PIMPage.validarLimiteDeCaracteres()
})

Then('devo visualizar a mensagem de limite de 10 caracteres no Employee ID', () => {
  PIMPage.validarLimiteDeCaracteresEmployeeId()
})


// ========================================
// Pesquisa de funcionário
// ========================================

When('pesquiso o funcionário pelo ID gerado', () => {
  PIMPage.pesquisarFuncionarioPorId(employeeId)
})

Then('o funcionário deve ser apresentado na lista de resultados', () => {
  PIMPage.validarFuncionarioPorId(employeeId)
})