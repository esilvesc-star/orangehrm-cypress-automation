import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import PIMPage from '../pages/PIMPage'
import AddEmployeePage from '../pages/AddEmployeePage'
import EmployeeListPage from '../pages/EmployeeListPage'

function gerarEmployeeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 4)
}

let employeeData
let employeeId

before(() => {
  cy.fixture('funcionarios.json').then((dados) => {
    employeeData = dados
  })
})

// Navegação
When('acesso a opção Add Employee', () => {
  PIMPage.clicarAddEmployee()
  AddEmployeePage.validarPaginaAddEmployee()
})

When('acesso a lista de funcionários', () => {
  PIMPage.acessarListaFuncionarios()
  EmployeeListPage.validarListaDeFuncionarios()
})

// Cadastro de funcionário
When('preencho os dados do novo funcionário', () => {
  const { firstName, lastName } = employeeData.funcionarioValido

  AddEmployeePage.preencherDadosFuncionario({ firstName, lastName })
  AddEmployeePage.preencherEmployeeId(gerarEmployeeId())
})

When('preencho os dados do novo funcionário completo', () => {
  AddEmployeePage.preencherDadosFuncionario(employeeData.funcionarioValido)
  AddEmployeePage.preencherEmployeeId(gerarEmployeeId())
})

When('preencho nome e sobrenome acima do limite permitido', () => {
  AddEmployeePage.preencherDadosFuncionario(
    employeeData.funcionarioAcimaDoLimite
  )
})

When('informo um Employee ID acima do limite permitido', () => {
  AddEmployeePage.preencherEmployeeIdAcimaDoLimite(
    employeeData.idAcimaDoLimite.employeeId
  )
})

When('armazeno o ID gerado para o funcionário', () => {
  AddEmployeePage.capturarEmployeeId().then((id) => {
    employeeId = id
  })
})

When('clico em salvar o novo funcionário', () => {
  AddEmployeePage.salvarFuncionarioComSucesso()
})

Then('devo visualizar o funcionário cadastrado com sucesso', () => {
  const nomeCompleto = `${employeeData.funcionarioValido.firstName} ${employeeData.funcionarioValido.lastName}`

  PIMPage.validarFuncionarioCadastrado(nomeCompleto)
})

// Validações do cadastro
When('tento salvar o funcionário sem preencher os campos obrigatórios', () => {
  AddEmployeePage.clicarSalvarFuncionario()
})

Then(
  'devo visualizar a obrigatoriedade dos campos First Name e Last Name',
  () => {
    AddEmployeePage.validarCamposObrigatorios()
  }
)

Then('devo visualizar a mensagem de limite de 30 caracteres', () => {
  AddEmployeePage.validarLimiteDeCaracteres()
})

Then(
  'devo visualizar a mensagem de limite de 10 caracteres no Employee ID',
  () => {
    AddEmployeePage.validarLimiteDeCaracteresEmployeeId()
  }
)

// Pesquisa de funcionário
When('pesquiso o funcionário pelo ID gerado', () => {
  EmployeeListPage.pesquisarFuncionarioPorId(employeeId)
})

Then('o funcionário deve ser apresentado na lista de resultados', () => {
  EmployeeListPage.validarFuncionarioPorId(employeeId)
})
