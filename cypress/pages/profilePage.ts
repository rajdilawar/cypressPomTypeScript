/// <reference types="Cypress" />

const url = Cypress.config().baseUrl;

export class ProfilePage {

    navigateToProfilePage() {
        cy.visit(`${url}/profile`);
      }

      verifyProfilePage() {
        //Assertion to verify the page header
        cy.get('.main-header').should('have.text', 'Profile');
      }

      verifyBookIsPresent () {
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)')
        .should('have.text',"O'Reilly Media");
      }

      removeBookToYourCollection() {
        cy.get('#delete-record-undefined').click();
        cy.get('#closeSmallModal-ok').click();
        cy.get('.rt-noData').should('have.text', 'No rows found');
      }

}