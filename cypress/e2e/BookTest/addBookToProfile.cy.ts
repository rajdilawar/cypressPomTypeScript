/// <reference types="Cypress" />
import { BooksPage } from "../../pages/booksPage";
import { LoginPage } from "../../pages/loginPage";
import { ProfilePage } from "../../pages/profilePage";
Cypress.on('uncaught:exception', (err, runnable) => false);

const booksPage = new BooksPage();
const loginPage = new LoginPage();
const profilePage = new ProfilePage();

describe('Test 1', () => {
    it('Should perform login and add 4th book to profile', () => {
        booksPage.navigateToBooksPage();
        booksPage.verifyBooksPage();
        booksPage.navigateToLoginPage();
        loginPage.verifyLoginPage();
        loginPage.loginAsUser();
        booksPage.verifyBooksPage();
        booksPage.getFourthBookFromList();
        booksPage.addBookToYourCollection();
        profilePage.navigateToProfilePage();
        profilePage.verifyProfilePage();
        profilePage.verifyBookIsPresent();
    })
})