// Hooks in cypress
//before block will be executed before a describe block
before(() => {
    // I have to conigure the example.json file for data driven testing
    cy.fixture('example').then((data)=>{
        globalThis.data = data; // we are initializing the data coming from example.json to the data veriable

    })
});    

describe('data driven testing', () => {
    it('orang hrm login', () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.get("Input[name='username']").type(data.username);
        
        cy.get("Input[name='password']").type(data.password);
        
        cy.get("button[type='submit']").click();

    });
});

