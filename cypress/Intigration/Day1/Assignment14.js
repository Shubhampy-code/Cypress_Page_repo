describe('Assignment 14 test cases', () => {
    it('Assert the page title', () => {

        cy.visit(' https://the-internet.herokuapp.com');

        cy.title().should('include','The Internet');
    });

    it(' Handling Invisible Elements', () => {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.get('#finish').should('not.be.visible');
        cy.contains('button','Start').click();
    });

    it('Assert the text value', () => {
        cy.visit('https://www.google.com/');

        cy.get('[aria-label="Search"]').type('Masai{enter}');

        cy.get('[aria-label="Search"]').should('have.value','Masai');
    });
});