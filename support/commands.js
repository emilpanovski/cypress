
Cypress.Commands.add('splashScreen', () => {
    cy.visit('https://acg.test.grabcab.io')
})


Cypress.Commands.add('journeyDetails', () => {
    cy.visit('https://acg.test.grabcab.io')
    cy.get('#start-button').click()
})

Cypress.Commands.add('carSelection', () => {
    cy.visit('https://acg.test.grabcab.io')
    cy.get('#start-button').click()
    cy.get('.pick-up').click()
    cy.get('.search-bar-container').type('London')
    cy.get(':nth-child(1) > .mat-list-item-content').click()
    cy.get('.drop-off').click()
    cy.get('.search-bar-container').type('Glasgow')
    cy.get(':nth-child(1) > .mat-list-item-content').click()
    cy.get('.get-quote-footer > .gc-button').click()
})