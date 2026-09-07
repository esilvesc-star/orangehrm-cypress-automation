import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import MenuLateral from '../components/MenuLateral'
import DashboardPage from '../pages/DashboardPage'
import AdminPage from '../pages/AdminPage'
import PIMPage from '../pages/PIMPage'
import LeavePage from '../pages/LeavePage'
import TimePage from '../pages/TimePage'
import RecruitmentPage from '../pages/RecruitmentPage'
import MyInfoPage from '../pages/MyInfoPage'
import PerformancePage from '../pages/PerformancePage'
import DirectoryPage from '../pages/DirectoryPage'
import MaintenancePage from '../pages/MaintenancePage'
import ClaimPage from '../pages/ClaimPage'
import BuzzPage from '../pages/BuzzPage'

// Menu Admin
When('acesso a opção Admin pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Admin')
})

Then('devo visualizar a página Admin', () => {
  AdminPage.validarPaginaAdmin()
})

// Menu PIM
When('acesso a opção PIM pelo menu lateral', () => {
  MenuLateral.acessarOpcao('PIM')
})

Then('devo visualizar a página PIM', () => {
  PIMPage.validarPaginaPIM()
})

// Menu Leave
When('acesso a opção Leave pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Leave')
})

Then('devo visualizar a página Leave', () => {
  LeavePage.validarPaginaLeave()
})

// Menu Time
When('acesso a opção Time pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Time')
})

Then('devo visualizar a página Time', () => {
  TimePage.validarPaginaTime()
})

// Menu Recruitment
When('acesso a opção Recruitment pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Recruitment')
})

Then('devo visualizar a página Recruitment', () => {
  RecruitmentPage.validarPaginaRecruitment()
})

// Menu My Info
When('acesso a opção My Info pelo menu lateral', () => {
  MenuLateral.acessarOpcao('My Info')
})

Then('devo visualizar a página My Info', () => {
  MyInfoPage.validarPaginaMyInfo()
})

// Menu Performance
When('acesso a opção Performance pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Performance')
})

Then('devo visualizar a página Performance', () => {
  PerformancePage.validarPaginaPerformance()
})

// Menu Dashboard
When('acesso a opção Dashboard pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Dashboard')
})

Then('devo visualizar a página Dashboard', () => {
  DashboardPage.validarDashboard()
})

// Menu Directory
When('acesso a opção Directory pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Directory')
})

Then('devo visualizar a página Directory', () => {
  DirectoryPage.validarDirectory()
})

// Menu Maintenance
When('acesso a opção Maintenance pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Maintenance')
})

Then('devo visualizar a página Maintenance', () => {
  MaintenancePage.validarMaintenance()
})

// Menu Claim
When('acesso a opção Claim pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Claim')
})

Then('devo visualizar a página Claim', () => {
  ClaimPage.validarClaim()
})

// Menu Buzz
When('acesso a opção Buzz pelo menu lateral', () => {
  MenuLateral.acessarOpcao('Buzz')
})

Then('devo visualizar a página Buzz', () => {
  BuzzPage.validarBuzz()
})
