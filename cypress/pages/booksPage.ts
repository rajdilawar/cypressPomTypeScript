/// <reference types="Cypress" />

const url = Cypress.config().baseUrl;

export class BooksPage {

     navigateToBooksPage() {
        cy.visit(`${url}/books`);
      }

      verifyBooksPage() {
        //Assertion to verify the page header
        cy.contains('Book Store');
        cy.get('.main-header').should('have.text', 'Book Store');

      }

      navigateToLoginPage() {
        cy.get('#login').click();
      }

      verifyUserAfterLogin() {
        cy.get('#userName-value').should('have.text', 'ivf');
      }

      getFourthBookFromList () {
        // cy.scrollTo(0, 1000);
        // cy.get('div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(4)' ).contains("O'Reilly Media");
        // cy.get('div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(2) a' ).click();

        cy.get('div.rt-table > div.rt-tbody > div:nth-child(4) > div > div:nth-child(4)')
        .contains("O'Reilly Media")
        .parent()
        .as('bookRow')
        .find('div:nth-child(2) a')
        .invoke('text')
        .as('bookTitle');
        cy.get('@bookTitle').then((bookTitle) => {
          cy.log('Title of the 4th book:', bookTitle);
        });
        cy.get('@bookRow')
        .find('div:nth-child(2) a')
        .click();
      }

      addBookToYourCollection() {
        cy.xpath("(//button[@id='addNewRecordButton'])[2]").click();
      }

}