/// <reference types="Cypress" />


import cypress from 'cypress'
import { navigation } from '../page_objects/navigation'
import { register } from '../page_objects/register'


describe ('Register page for PHP travels', () => {
    
    before('Visit home page', () => { 
        cy.visit ('')
    })

    it.only('Go to register page', () => {
        // cy.intercept({
        //     method: 'GET',
        //     url: ''
        // })
       navigation.goToRegisterPage()
       cy.url().should('contain', '/signup')
       cy.wait()
        
        
    })

    it('Register successfully', () =>{
        register.register()

    })

    
    



})