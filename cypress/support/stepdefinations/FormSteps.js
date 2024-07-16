import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('user opena the Simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('user entere firstname, lastname, email, message',()=>{
    cy.get('#firstName').type('Shubham');
    cy.get('#lastName').type('Shrivastava');
    cy.get('#email').type('shubham.sds@gmail.com');
    cy.get('#number').type('9450067694');
    cy.xpath('//textarea').type('hi');

})
And('clicks on submit',()=>{
    cy.xpath('//input[@value="submit"]').click();

})

Then('An alert saying sucessfil message has to be displayed',()=>{
    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us, Shubham Shrivastava')
        return true;
    })

})