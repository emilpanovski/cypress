/// <reference types="Cypress" />


/// <reference types="Cypress" />

describe('my form', () => {

    before(() => {
        cy.splashScreen()  ///

    })
    it('verify correct url', () => {
        cy.url().should('include', '/welcome')

    })
    it('verify version', () => {
        cy.get('.version-info').should('contain', '50')

    })


    it('verify splash screen has button, button is present and navigates', () => {
        cy.get('#start-button').should('contain', 'Book Now').click()
        cy.url().should('include', '/wizard/journey-details')
    })

    it('verify continue button is disabled without input', () => {
        cy.get('.get-quote-footer > .gc-button').should('be.disabled')

    })
    it('verify later option is disabled', () => {
        cy.get('#mat-button-toggle-2-button').should('be.disabled')


    })

    it('verify single journey button is presented and is preselected', () => {

        cy.get('.mat-radio-group')
            .find('.mat-radio-label')
            .should('be.checked')
            .and('not.be.disabled')
    })
})