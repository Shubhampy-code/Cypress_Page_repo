describe('Google Test Suits', () => {
    it('Test1', () => {
        cy.visit('https://google.com/');
        cy.title().should('include','Google');

    });
});