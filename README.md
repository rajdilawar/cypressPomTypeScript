# Cypress with TypeScript Boiler plate code following Page Object Model pattern and API testing examples with cypress.

## Overview

This README file provides instructions and guidelines for using Cypress with TypeScript while following the Page Object Model (POM) design pattern. The POM design pattern helps in creating a more maintainable and scalable test automation framework by separating the test code from the page-specific code.

I have implemented Test 1 and Test 2 in BookTest folder and Test 3 in apiTest folder. I have made sure each test is not dependent on other test result and therefore making sure each test is standalone. I have added the assertion for each page. Beside this each page contains action methods which has to be performed on the page. Test can iterate through these methods for each page.

## Prerequisites

Before proceeding, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- Cypress
- TypeScript

## Setup

1. Clone or create a new project repository for your Cypress test automation framework.
2. Install Cypress by running the following command in your project root directory:

   ```
   npm install --save-dev typescript

   ```

3. Initialize Cypress by running the following command:
   ```
   npx cypress open
   ```
4. Configure TypeScript for Cypress:

   - Update your `tsconfig.json` file to include the necessary TypeScript configuration for Cypress.

## Project Structure

The project structure should follow the POM design pattern. Here's an example structure:

```
├── cypress/
│   ├── fixtures/
│   ├── e2e/
│   │   ├── BookTest/
│   │   │   ├── addBookToProfile.cy.ts
│   │   │   ├── removeBookFromProfile.cy.ts
│   │   │
│   │   └── apiTest
|   |       ├── addBookToProfile.cy.ts
│   ├── pages/
|   |      ├── bookPage.ts
|   |      ├── loginPage.ts
|   |      ├── profilePage.ts
│   ├── support/
│   └── ...
├── cypress.config.ts
├── package.json
├── tsconfig.json
└── ...
```

## Writing Tests

1. Create a new TypeScript file under the `e2e/` directory for each test script. For example, `editProfile.cy.ts`.
2. Import the necessary Cypress and page object modules at the top of your test script.
3. Write your test using Cypress commands and assertions, utilizing page objects for interacting with the web elements.
4. Export the test or group of tests if needed.

## Page Objects

1. Create a TypeScript file for each page object under the corresponding feature or page folder. For example, `profilePage.ts`.
2. Define a class for each page object.
3. Declare the necessary web elements as class properties, using Cypress' `cy.get()` or `cy.contains()` commands to locate the elements.
4. Define methods for each action or interaction on the page, utilizing Cypress commands.
5. Export the page object class.

## Running Tests

- To run all tests:
  ```
  npx cypress run
  ```
- To open the Cypress Test Runner and select specific tests:

  ```
  npx cypress open
  ```
