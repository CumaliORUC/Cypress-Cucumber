import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';
import { SignPage }  from '../Pages/SignIn';


Given('I navigate to {string}', (url) => {
  //cy.viewport('iphone-xr')
  cy.viewport(1024, 768)
  cy.visit('/'); // This will navigate to the URL
  cy.url().should('eq','https://www.sefamerve.com/');
  cy.title().should('include', 'Sefamerve');
});

