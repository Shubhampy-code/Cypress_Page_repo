///<reference types="cypress"/>

describe('Iframe test', () => {
    it('Frame test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // step 1 -> Locator fot iframe

        cy.frameLoaded('#courses-iframe');
        
        // to intrect with elements inside the frames use iframe()
        cy.iframe().contains('Blog').click();
    });
});