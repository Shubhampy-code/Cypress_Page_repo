describe('mouse click test', () => {
    it('right test1', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath('//*[.="right click me"]').rightclick();
        cy.get(".context-menu-item").contains('Quit').click();
        cy.xpath('//*[.="Double-Click Me To See Alert"]').dblclick();
    });

    it('Double click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath('//*[.="Double-Click Me To See Alert"]').dblclick();

    });

    it('Mouse hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // this will invoke the element to show what the element is contains
        cy.get('#mousehover').invoke('show') 
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');
        
    });

    it('mouse hover approach 2 ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force: true});
        cy.url().should('include','top');
        
    });


});