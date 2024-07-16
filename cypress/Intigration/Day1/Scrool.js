describe('Scrool', () => {
    it('google test', () => {
        cy.visit('https://www.google.com/');
        cy.get('[title="Search"]').type('masai{enter}');
        cy.scrollTo(0,500); //(x,y) x is horixontal, y is vertical
        cy.wait(1000)
        cy.scrollTo(0.-500);
        //cy.scrollTo('bottom')
        cy.contains('Maasai people').scrollIntoView().wait(2000).click();
    });
});