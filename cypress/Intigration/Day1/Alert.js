///<reference types="cypress"/>

describe('Alert test', () => {
    it('Test1', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();

    cy.on('window:alert',(alertmsg)=>{
        expect(alertmsg).to.equal('Hello , share this practice page and share your knowledge')
        return true; // Here, true will select ok cutton
    })
    });

    it.only('test confirm button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#confirmbtn').click();

        cy.on('window:confirm',(msg)=>{
            expect(msg).to.equal('Hello , Are you sure you want to confirm?')
            // return true; //it will click on ok
            return false; // it will check on cancel
        })

    });
});