describe('Test Suite - Heroku Test suite', () => {
// describe is a block , where you will write multiple test.
// describe and it block are from Mocha library.
// This is how we write test test in cypress
// this file is alse called as spec.

    it('Test1', () => {
        // it block is your test script - 1 Test
        // cy is my cypress object
        // using cy i can write my cypress command
        // cy.visit is used to enter the URL inside the browser

        cy.visit('https://the-internet.herokuapp.com/login')

        
    });  
});