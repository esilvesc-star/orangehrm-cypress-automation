import {
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'

import PIMPage from '../pages/PIMPage'

let employeeData

before(() => {
  cy.fixture('cadastroEmployees').then((dados) => {
    employeeData = dados
  })
})

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

When('clico em salvar o novo funcionário', () => {
    PIMPage.clicarSalvarFuncionario()
})

Then('devo visualizar o funcionário cadastrado com sucesso', () => {
        const nomeCompleto = `${employeeData.funcionarioValido.firstName} ${employeeData.funcionarioValido.lastName}`
        PIMPage.validarFuncionarioCadastrado(nomeCompleto)
})
