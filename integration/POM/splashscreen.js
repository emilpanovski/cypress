class welcome {
    bookBtn() {
        return cy.get('#start-button')
    }
    ctnBtn() {
        return cy.get('.get-quote-footer > .gc-button')
    }

    ltrBtn() {
        return cy.get('#mat-button-toggle-2-button')
    }

    singlJBtn() {
        return cy.get('#mat-radio-2')
    }


    returnJBtn() {
        return cy.get('#mat-radio-3')
    }

    addDateBtn() {
        return cy.get('.pick-up-time > .label')
    }


    pickUpFinderBtn() {
        return cy.get('.pick-up')
    }

    pickUpDialogBtn() {
        return cy.get('.dialog-header > label')
    }

    searchPfieldBtn() {
        return cy.get('.search-bar-container > .ng-untouched > .input-container > .input-form-field > .input')
    }

    searchPresultBtn() {
        return cy.get('#mat-dialog-0')
    }


    addressPBtn() {
        return cy.get(':nth-child(1) > .mat-list-item-content')
    }

    dropOffFinderBtn() {
        return cy.get('.drop-off')
    }

    dropOffDialogBtn() {
        return cy.get('.dialog-header > label')
    }

    searchDfieldBtn() {
        return cy.get('.search-bar-container > .ng-untouched > .input-container > .input-form-field > .input')
    }


    searchDresultBtn() {
        return cy.get('#mat-dialog-1')
    }

    addressDBtn() {
        return cy.get(':nth-child(1) > .mat-list-item-content')
    }

    selectBtn() {
        return cy.get('.return-time > .gc-button')
    }

    timediaBtn() {
        return cy.get('#mat-dialog-2')
    }

    dateBtn() {
        return cy.get('[aria-label="November 6, 2020"]')
    }

    inMinBtn() {
        return cy.get('.minutes-container > [svgicon="arrow-increase"]')
    }

    deMinBtn() {
        return cy.get('.minutes-container > [svgicon="arrow-decrease"]')
    }

    deHourBtn() {
        return cy.get('.hours-container > [svgicon="arrow-decrease"]')
    }

    inHourBtn() {
        return cy.get('.hours-container > [svgicon="arrow-decrease"]')
    }

    saveBtn() {
        return cy.get('.button-container > .gc-button')
    }

    timeBtn() {
        return cy.get('.time-picker')
    }
    
    swiperBtn() {
        return cy.get('.swiper-wrapper')
    }

    rightBtn() {
        return cy.get('.swiper-button-next')
    }
    

    leftBtn() {
        return cy.get('.swiper-button-prev')
    }

    carEmilDetailBtn() {
        return cy.get('.car-details-info-payment')  

            
        
    }
    carEmilClickBtn() {
        return cy.get('.select-btn')  

            
        
    }
    ctn2Btn() {
        return cy.get('.get-booking-btn > .gc-button')
    
    }
    nameField() {
        return cy.get('[formcontrolname="name"] > .input-container')
    
    }

    phoneField() {
        return cy.get('.mobile-input > .ng-invalid > .input-container')
    
    }
    countryField() {
        return cy.get('.telephone-input-container')
    
    }
    flightField() {
        return cy.get('.contact-details > .ng-untouched.ng-pristine > .input-container')
    
    }
    
    emailField() {
        return cy.get('[formcontrolname="email"] > .input-container')
    
    }
    amendButton() {
        return cy.get('.amend-journey')
    
    }
    paymentButton() {
        return cy.get('.payment')
    
    }


    finishButton() {
        return cy.get('.image-container > .confirmation-button-container > .gc-button')
    
    }


    

    netpromoterButton() {
        return cy.get('.scores-container')
    
    }
    gradeButton() {
        return cy.get('.score')
    
    }


    feedbackTxt() {
        return cy.get('.feedback-text')
    
    }

    feedbackTxt() {
        return cy.get('.feedback-text')
    
    }


    doneBtn() {
        return cy.get('.rate-footer > button')
    
    }

    
} 
export default welcome



