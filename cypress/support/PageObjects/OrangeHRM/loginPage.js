class Login_po{
    EnterURl(){
        //  Login Page class - All the method related to login in the class
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    }

    Login(){
        cy.get("Input[name='username']").type('Admin');
        cy.get("Input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();
    }

    clickonforgotpassword(){

        cy.get('.orangehrm-login-forgot-header').click();

    }
}

export default Login_po;