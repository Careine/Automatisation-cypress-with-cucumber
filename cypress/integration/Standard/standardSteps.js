import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps' 

Given("I launch the SwagLabs site", () => {
    cy.visit("https://www.saucedemo.com/")
})

When("I submit login", () => {
    //fill username
    cy.get('[data-test="username"]').should('exist').and('be.visible').clear().type('standard_user')
    //fill password 
    cy.get('#password').should('exist').and('be.visible').clear().type('secret_sauce')
    //fill login button
    cy.get('[data-test="login-button"]').should('exist').and('be.visible').click()
})

Then('I should see the products page', () => {
    cy.location('pathname').should('eq', '/inventory.html')
})