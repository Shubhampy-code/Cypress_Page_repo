describe('Orange test suits', () => {
    it('Test suits 1', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get('[name="username"]').then(($username)=>{

                // expect is a method used for assertions

                expect($username).to.have.attr('placeholder','Username')

                // directly if we try to clock on username
                // it will not work - Jquery
                // to convert jquary variable to cypress object we have to wrap it
                cy.wrap($username).type('Admin')
        })

        cy.get('[name="password"]').then(($password)=>{
            expect($password).to.have.attr('placeholder','Password')

            cy.wrap($password).type('admin123')

        });

        cy.get('.oxd-button').then(($submit)=>{
            expect($submit).to.have.text(' Login ')
            //wrap change the jquare to the cypress object
            cy.wrap($submit).click()
        });

        //Logout
        cy.get('.oxd-userdropdown-name').click();

        // using find() i will find my logout from the prent class
        // looping - iterate over each element and check the text of each element
        // using each()
        cy.wait(2000)
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($dropdown_element)=>{

            // looping will start
            if($dropdown_element.text()=='Logout'){
                cy.wrap($dropdown_element).click();
            }
                
        });

    });

    it.only('Admin dynamic test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.get('[name="username"]').type('Admin');
        
        cy.get('[name="password"]').type('admin123');
        
        cy.get('.oxd-button').click();
        cy.contains('Admin').click();

        
    });
});