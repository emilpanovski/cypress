/// <reference types="Cypress" />

describe('stub', () => {

    it('stub', () => {
        cy.server()
        
        cy.route({
            method: 'POST',
            url: 'https://api.test.grabcab.io/quote',
            status: '200',
            response: 'fixture:ACG'
        })


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
})