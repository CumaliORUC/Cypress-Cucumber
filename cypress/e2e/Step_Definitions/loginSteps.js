import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from '../Pages/loginPage';
import testData from '../../fixtures/config.json'


const loginpage = new LoginPage();
 


Given('I navigate to {string}', (url) => {
  //cy.viewport('iphone-xr')
  cy.viewport(1024, 768)
  cy.visit('/'); // This will navigate to the URL
  cy.url().should('eq', 'https://www.sefamerve.com/');
  cy.title().should('include', 'Sefamerve');
});

When('I go to the loginpage', () => {
  loginpage.gotoLoginPage()
  loginpage.clickEmailCheckbox()
})

And ('I log in with {string} credentials', (credentials) => {
  switch (credentials) {
    case 'valid':
      loginpage.enterEmail(testData.validEmail)
      loginpage.enterPassword(testData.validPassword)
      break;

    case 'invalid':
      loginpage.enterEmail(testData.invalidEmail)
      loginpage.enterPassword(testData.invalidPassword)
      break;
  }

})
And ('I click on the giris button', ()=>{
   loginpage.clickGirisButton()
})

Then('I should see the account page', () => {
  loginpage.uyelikBilgilerim()
})

And('I logout successfully', () => {
  loginpage.clickLogout()
})