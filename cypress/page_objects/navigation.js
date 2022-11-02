
import { faker } from '@faker-js/faker';

class Navigation {

    get accountButton() {
        return cy.get('#ACCOUNT')
    }

    get signUpButton(){
        return cy.get('a[href="https://phptravels.net/signup"]')
    }

    get signInButton(){
        return cy.get('a[href="https://phptravels.net/login"]')
    }


    goToRegisterPage(){

       this.accountButton.click()
       this.signUpButton.click() 
        
    }

    


}

export const navigation = new Navigation()