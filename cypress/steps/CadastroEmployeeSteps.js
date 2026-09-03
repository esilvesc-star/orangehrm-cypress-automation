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

// Cadastro campos obrigatórios
When('tento salvar o funcionário sem preencher os campos obrigatórios', () => {
  PIMPage.clicarSalvarFuncionario()
})

Then('devo visualizar a obrigatoriedade dos campos First Name e Last Name', () => {
  PIMPage.validarCamposObrigatorios()
})


// Cadastro de funcionário
When('acesso a opção Add Employee', () => {
  PIMPage.clicarAddEmployee()
})

When('preencho os dados do novo funcionário', () => {
  PIMPage.preencherNomeFuncionario(
    employeeData.funcionarioValido.firstName,
    employeeData.funcionarioValido.middleName,
    employeeData.funcionarioValido.lastName
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

// Busca de funcionário

When('acesso a lista de funcionários', () => {
    PIMPage.acessarListaFuncionarios()
})

When('pesquiso o funcionário pelo ID gerado', () => {
    PIMPage.pesquisarFuncionarioPorId(employeeId)
})

Then('o funcionário deve ser apresentado na lista de resultados', () => {
    PIMPage.validarFuncionarioPorId(employeeId)
})
