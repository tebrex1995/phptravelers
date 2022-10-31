/// <reference types="Cypress" />

describe ('Register page for PHP travels', () => {
    
    before('Visit home page', () => {

        cy.visit ('')
        
    })

    it('Should be on the right website', () => {
        cy.url('').should('contain', 'https://phptravels.net')
    })
    



})