///<reference types="cypress"/>

describe('Practice', () => {
    it('Test 1  URL assertions', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Assertion URL with the given endpoint
        cy.url().should('include','AutomationPractice');

        cy.title().should('include','Practice Page');

        // Assert the visibility of the below textbox
        cy.get('input[name="show-hide"]').should('be.visible');

        // assertion to check whether an element is invisivle

        cy.get('#hide-textbox').click();
        cy.get('[name="show-hide"]').should('not.be.visible');

        cy.get(".ui-autocomplete-input").type('Wednesday').should('have.value','Wednesday');
        
        //Assertion to check whether checkbox is checked or not
        cy.xpath('//*[@id="checkBoxOption1"]').check().should('be.checked');
        cy.xpath('//*[@id="checkBoxOption2"]').check().should('be.checked');
        cy.xpath('//*[@id="checkBoxOption3"]').check().should('be.checked');
        // uncheck will uncheck on the checkbox
        cy.xpath('//*[@id="checkBoxOption1"]').uncheck().should('not.be.checked');

    });
});