///<reference types="cypress"/>

describe('Automation store Suits', () => {
    it('Test on store', () => {
        cy.visit('https://automationteststore.com/');
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('input[id="ContactUsFrm_first_name"]').type("Shubham");
        cy.get('input[id="ContactUsFrm_email"]').type('shubham.sds@gmail.com');
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type('ddhgjfdjdfhj');
        cy.get('button[title="Submit"]').click();
        cy.title().should('include','Contact Us');

        cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]").should('include.text','Your enquiry has been successfully sent to the store owner!');

    });
});