/// <reference types="Cypress" />

import Welcome from '../POM/splashscreen'

const welcome = new Welcome()

    


describe('verify app has correct url', () => {
    
    before(() => {
        cy.splashScreen()  ///

    })
    it('compare url', () => {
        cy.url().should('include', '/welcome')

    })
})
describe('verify splash screen', () => {

    it('verify splash screen has button, button is present and navigates', () => {
        welcome.bookBtn().should('contain', 'Book Now', 'be.visible').and('have.css', 'left', '565px').click()
        cy.url().should('include', '/wizard/journey-details')
    })
})
describe('verify buttons', () => {

    it('verify continue button is disabled without input', () => {
        welcome.ctnBtn().should('be.disabled')

    })

    it('verify later option is disabled', () => {
        welcome.ltrBtn().should('be.disabled')


    })

    it('verify single journey button is presented and is preselected', () => {

        welcome.singlJBtn()
            .should('contain', ' single journey ').and('have.class', 'mat-radio-checked')
    })

    it('verify return journey button is presented is clickable', () => {

        welcome.returnJBtn()
            .should('contain', ' return journey ').click()
            .and('have.class', 'mat-radio-checked')
    })
    it('verify after returin is selected, return option is presented', () => {

        welcome.addDateBtn()
            .should('contain', 'Add Return Trip Details')
    })
})
describe('verify adress finder', () => {
    it('verify address is clickable, finds adresses and adress chosen is correct', () => {


        welcome.pickUpFinderBtn().click()
        welcome.pickUpDialogBtn().should('contain', 'Enter Pick up Address ')
        welcome.searchPfieldBtn().type('London').should('have.value', 'London')
        cy.wait(5000)
        welcome.searchPresultBtn().find('.mat-list-item-content').should('have.length', 5)
        welcome.addressPBtn().click()
        welcome.dropOffFinderBtn().click()
        welcome.dropOffDialogBtn().should('contain', 'Enter Drop off Address ')
        welcome.searchDfieldBtn().type('Glasgow')
        cy.wait(5000)
        welcome.searchDresultBtn().find('.mat-list-item-content').should('have.length', 5)
        welcome.addressDBtn().click()

    })


})

describe('verify time and date', () => {
    it('verify select button is present and clickable', () => {


        welcome.selectBtn().should('contain', 'SELECT', 'be.visible').click()
        welcome.timediaBtn().should('be.visible')

    })
    it('verify date is present and clickable', () => {


        welcome.dateBtn().should('contain', '6', 'be.visible').click()

    })

    it('verify time is present and can be changed', () => {


        welcome.timeBtn().should('be.visible')
        welcome.inMinBtn().should('be.visible').click()
        welcome.deHourBtn().should('be.visible').click()

    })

    it('verify save button is present and clickable', () => {


        welcome.saveBtn().should('contain', 'Save', 'be.visible').click()


    })

    it('verify continue button is enabled and navigates to car selection', () => {

        cy.server()

        cy.route({
            method: 'POST',
            url: 'https://api.test.grabcab.io/quote',
            status: '200',
            response: 'fixture:ACG'
        })
        welcome.ctnBtn().should('be.enabled').click()

        cy.url().should('include', '/wizard/car-selection')



    })


})

describe('verify car selection screen', () => {

    it('verify corect number of cars is presented', () => {


        welcome.swiperBtn().find('.car-item').should('have.length', '9')


    })

    it('verify u can swipe cars', () => {


        welcome.rightBtn().should('be.visible')
        for (let n = 0; n < 6; n++) {
            welcome.rightBtn().click()
        }
        welcome.rightBtn().should('not.be.visible')

        welcome.leftBtn().should('be.visible')
        for (let n = 0; n < 6; n++) {
            welcome.leftBtn().click()
        }
        welcome.leftBtn().should('not.be.visible')


    })
    it('select car', () => {



        welcome.carEmilDetailBtn().eq(0).should('contain', 'Emil')
        welcome.carEmilClickBtn().eq(0).click()
        cy.url().should('include', '/wizard/passenger-details')




    })

})
describe('Passenger screen', () => {

    it('continue button disabled, when first land on screen', () => {



        welcome.ctn2Btn().should('be.disabled')


    })


    it('verify Name field', () => {



        welcome.nameField().should('be.visible').type('Test Booking')

    })


    it('verify Phone field', () => {



        welcome.phoneField().should('be.visible').type('1234567')

    })



    it('country picker', () => {



        welcome.countryField().click()
        cy.get('.mat-form-field-wrapper').should('be.visible').type('mace')
        cy.get('.option-name').click()
        cy.get('.sas-telephone-input').should('have.value', '+389')

    })


    it('verify flight field', () => {



        welcome.flightField().should('be.visible').type('asd123123')


    })

    it('verify email field', () => {



        welcome.emailField().should('be.visible').type('@booking.com')
        welcome.ctn2Btn().should('be.disabled')
        cy.focused().clear()
        welcome.emailField().should('be.visible').type('test@')
        welcome.ctn2Btn().should('be.disabled')
        cy.focused().clear()
        welcome.emailField().should('be.visible').type('testbooking.com')
        welcome.ctn2Btn().should('be.disabled')
        cy.focused().clear()
        welcome.emailField().should('be.visible').type('test@booking')
        welcome.ctn2Btn().should('be.disabled')
        cy.focused().clear()
        welcome.emailField().should('be.visible').type('test@booking.com')
        welcome.ctn2Btn().should('be.enabled').click()
    })
})
describe('verify payment popup', () => {
    it('verify amend button', () => {

        welcome.amendButton().should('contain', 'Amend', 'be.visible')


    })
    it('verify payment button', () => {

        welcome.paymentButton().should('contain', 'Payment', 'be.visible').click()
        cy.wait(5000)
        cy.url().should('include', '/wizard/booking-confirmation')
        

    })




})
describe('Booking confirmation', () => {
    it('Verify finish button', () => {

        welcome.finishButton().should('be.visible').click()
        
    })



})

describe('Verify Rate Journey', () => {
    it('Verify net promoter is present', () => {

        welcome.netpromoterButton().should('be.visible')

    })

    it('Verify net promoter has 10 grades', () => {

        welcome.netpromoterButton().find('button').should('have.length', 10)

    })
    it('Verify grades are clickable and user can rate (click grade 10)', () => {

        welcome.gradeButton().eq(9).click()
        welcome.feedbackTxt().should('contain', 'Thank you for your feedback.', 'be.visible')

    })
    it('I am done button is present and clickable and navigates to splashscreen' , () => {

        welcome.doneBtn().should('contain',  " I'M DONE ", 'be.visible').click()
        cy.url().should('include', '/welcome')

        
    })

    
})







