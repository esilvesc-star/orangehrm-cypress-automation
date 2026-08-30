import {
  Given,
  When,
  Then
} from '@badeball/cypress-cucumber-preprocessor'

import DashboardPage from '../pages/DashboardPage'
import MenuLateral from '../components/MenuLateral'
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
  MenuLateral.clicarAdmin()
})  

Then('devo visualizar a página Admin', () => {
  AdminPage.validarPaginaAdmin()
})  

// Menu PIM

When('acesso a opção PIM pelo menu lateral', () => {
  MenuLateral.clicarPIM()
})

Then('devo visualizar a página PIM', () => {
    PIMPage.validarPaginaPIM()
})   

// Menu Leave

When('acesso a opção Leave pelo menu lateral', () => {
  MenuLateral.clicarLeave()
})

Then('devo visualizar a página Leave', () => {
  LeavePage.validarPaginaLeave()
})

// Menu Time

When('acesso a opção Time pelo menu lateral', () => {
  MenuLateral.clicarTime()
})

Then('devo visualizar a página Time', () => {
  TimePage.validarPaginaTime()
})

// Menu Recruitment

When('acesso a opção Recruitment pelo menu lateral', () => {
  MenuLateral.clicarRecruitment()
})

Then('devo visualizar a página Recruitment', () => {
  RecruitmentPage.validarPaginaRecruitment()
})

// Menu My Info

When('acesso a opção My Info pelo menu lateral', () => {
  MenuLateral.clicarMyInfo()
})

Then('devo visualizar a página My Info', () => {
  MyInfoPage.validarPaginaMyInfo()
})

// Menu Performance

When('acesso a opção Performance pelo menu lateral', () => {
  MenuLateral.clicarPerformance()
})

Then('devo visualizar a página Performance', () => {
  PerformancePage.validarPaginaPerformance()
})

// Menu Dashboard

When('acesso a opção Dashboard pelo menu lateral', () => {
  MenuLateral.clicarDashboard()
})

Then('devo visualizar a página Dashboard', () => {
  DashboardPage.validarDashboard()
})

// Menu Directory

When('acesso a opção Directory pelo menu lateral', () => {
  MenuLateral.clicarDirectory()
})

Then('devo visualizar a página Directory', () => {
  DirectoryPage.validarDirectory()
})

// Menu Maintenance

When('acesso a opção Maintenance pelo menu lateral', () => {
  MenuLateral.clicarMaintenance()
})

Then('devo visualizar a página Maintenance', () => {
  MaintenancePage.validarMaintenance()
})

// Menu Claim 

When('acesso a opção Claim pelo menu lateral', () => {
  MenuLateral.clicarClaim()
})

Then('devo visualizar a página Claim', () => {
  ClaimPage.validarClaim()
})  

// Menu Buzz

When('acesso a opção Buzz pelo menu lateral', () => {
  MenuLateral.clicarBuzz()
})      

Then('devo visualizar a página Buzz', () => {
  BuzzPage.validarBuzz()
})  