describe('Radio button ', () => {
    it('test radio', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('(//input[@name="radioButton"])[2]').check().should('be.visible').and('be.checked').and('have.attr','type','radio');
        cy.xpath('(//input[@name="radioButton"])[1]').check().should('be.visible').and('be.checked').and('have.attr','type','radio');
        cy.xpath('(//input[@name="radioButton"])[3]').check().should('be.visible').and('be.checked').and('have.attr','type','radio').and('have.attr','name','radioButton').and('have.attr','class','radioButton');
    });
    it('checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // checking on all the checkboxes at once.
        cy.xpath('//label/input[@type="checkbox"]').check().should('be.checked');
        // uncheck on all the checkboxes at once.
        cy.xpath('//label/input[@type="checkbox"]').uncheck().should('not.be.checked');
    });
});