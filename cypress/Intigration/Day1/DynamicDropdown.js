describe('Dynamic dropdown example ', () => {
    it('test11', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.ui-autocomplete-input').type('in')

        
        cy.get('.ui-menu-item').each(($option)=>{
            if($option.text()=='India'){
                cy.wrap($option).click();
            }
        })
    });
    it.only('Test 2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('an');
        cy.get('.ui-menu-item').contains('Poland').click();
    
    });
});