import { faker } from '@faker-js/faker';
import data from '../fixtures/data.json'
class Register {

    get registerButton()  {
        return cy.get('#button')
    }

    get firstNameInput(){
        return cy.get('input[name="first_name"]')
    }

    get lastNameInput(){
        return cy.get('input[name="last_name"]')
    }
   
    get phoneInput(){
        return cy.get('input[name="phone"]')
    }

    get emailInput(){

        return cy.get('input[name="email"]')
}

   

    get passwordInput(){
        return cy.get('input[name="password"]')
    }

    register(){
        this.firstNameInput.type(data.registerCredentials.firstName, {force:true})
        this.lastNameInput.type(data.registerCredentials.lastName, {force:true}) 
        this.phoneInput.type(faker.phone.number(), {force:true})   
        this.emailInput.type(data.registerCredentials.email, {force:true})  
        this.passwordInput.type(data.registerCredentials.password, {force:true})
        this.registerButton.click({force:true})
    }
}

export const register = new Register()