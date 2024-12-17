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

And('I should see the error message', () => {
  loginpage.getErrorMessage().should('have.text','Kullanıcı adı ya da parolanız hatalı!')
})

And('I log the error message to loginError.txt', () => {
  //cy.writeFile("cypress/support/loginError.txt",loginpage.getErrorMessage().invoke('text'))
  loginpage.getErrorMessage().invoke('text').then((errorMessageDetail) => {
    
    const newEntry = `Login Error Message: ${errorMessageDetail}\n`;

    cy.readFile('cypress/support/loginError.txt', { timeout: 1000, failOnNonExisting: false })
        .then((content) => {
            cy.writeFile('cypress/support/loginError.txt', (content || '\n') + newEntry);
        });
});
})