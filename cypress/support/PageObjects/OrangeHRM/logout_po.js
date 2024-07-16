class Logout_po{

    // this is my logout page class
    // here only the method wrt logout will be written.

    logout(){
        cy.get('.oxd-userdropdown-icon').click();
        //cy.get('.oxd-dropdown-menu').select('Logout').should('have.length',4);

        cy.get('[href="/web/index.php/auth/logout"]').click();
    }
}

export default Logout_po;