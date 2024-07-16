///<reference types="cypress"/>

describe('table fatch', () => {
    it('Test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('(//table[@id="product"])[2]/tbody/tr[8]/td[2]').should('include.text','Sportsman');
    });

    it('test2', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('(//table[@id="product"])[2]/tbody/tr[8]/td').each(($ele)=>{
            if($ele.text().includes('Sportsman')){
                cy.wrap($ele).next().then((city)=>{
                    cy.log(city.text);
                })
            }
        })

    });

    
    it('test3', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('(//table[@id="product"])[2]/tbody/tr[8]/td').each(($ele1)=>{
            if($ele1.text().includes('Chennai')){
                cy.wrap($ele1).next().then((num)=>{
                    cy.log(num.text)
                })
            }
        })    
    })

});