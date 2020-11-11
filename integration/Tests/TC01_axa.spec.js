/// <reference types="Cypress" />

describe('AXA splash screen', () => {

    it('navigates to trip info on click', () => {



        cy.server()
        cy.route('https://acg.test.grabcab.io/welcome')


    })
})