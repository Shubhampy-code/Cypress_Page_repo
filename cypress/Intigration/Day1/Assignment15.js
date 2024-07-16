describe('Book test Suits', () => {
    it('Verify Page Title', () => {
        cy.visit('https://books.toscrape.com/');

        cy.title().should('include','All products | Books to Scrape - Sandbox');
    });

    it('Non Fiction Link Click Functionality', () => {
        cy.visit('https://books.toscrape.com/');

        cy.get('[href="catalogue/category/books/fiction_10/index.html"]').click();

        cy.title().should('include','Fiction');

    });

    it('Add to Basket', () => {
        cy.visit('https://books.toscrape.com/');

        cy.contains('button','Add to basket').click();
    });

});