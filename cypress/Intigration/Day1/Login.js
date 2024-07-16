describe('OrangeHRM Suite', () => {
    it('Login test1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("Input[name='username']").type('Admin');
        cy.get("Input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
    });     
 
});