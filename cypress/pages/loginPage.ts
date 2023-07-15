/// <reference types="Cypress" />

const url = Cypress.config().baseUrl;

export class LoginPage {

      verifyLoginPage() {
        cy.get('.main-header').should('have.text', 'Login')
      }

      loginAsUser () {
        cy.get('#userName').type('ivf');
        cy.get('#password').type('Demoqa@12');
        cy.get('#login').click();
      }

}