describe('Adding a product to a cart, checking out as a guest, and registering a new user', () => {
    it('Test 1', () => {

        // Open the URL
        cy.visit('https://automationteststore.com/');


        // Click on the Apparel & Accessories button
        cy.xpath('(//a[@href="https://automationteststore.com/index.php?rt=product/category&path=68"])[1]').click();

        // Click on the T-shirts
        cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-120x120.jpg"])[2]').click();


        //Select third white shirt
        cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"])[1]').click();
        //cy.wait(5000)
        // Change the colour of the Shirt by handling dropdown.
        cy.get('[name="option[350]"]').select('775').should('have.value','775');
        
        // Change the size by handling dropdown
        cy.get('#option351').select('Medium').should('have.value','777');

        //Change the quantity by handling dropdown
        cy.get('#product_quantity').clear().type('2');
        
        // Click on the Add to cart
        cy.xpath('(//a[@href="#"])[1]').click();

        //Close the window of the application.
        cy.contains('ul').end();
    

        //Click on the checkout
        cy.get('#cart_checkout1').click();

        //Select the Guest Checkut
        cy.get('#accountFrm_accountguest').click();
        cy.get('[title="Continue"]').click();
        
        //complete the registration
        cy.get('#guestFrm_firstname').type('Shubham');
        cy.get('#guestFrm_lastname').type('Shrivasava');
        cy.get('#guestFrm_email').type('shubham.159@gmail.com');
        cy.get('#guestFrm_telephone').type('9450067694');
        cy.get('#guestFrm_fax').type('4685648454');
        cy.get('#guestFrm_address_1').type('Lalitpur up');
        cy.get('#guestFrm_city').type('Lalitpur');
        cy.get('#guestFrm_zone_id').select('Aberdeenshire');
        cy.get('#guestFrm_postcode').type('258963');
        cy.get('#guestFrm_country_id').select('United Kingdom')
        
        //Click on continue
        cy.get('[title="Continue"]').click();

        //Click on the confirm order

        cy.get('[title="Confirm Order"]').click();

        //Assert the success message.
        //Your order has been successfully processed!
        cy.title().should('include','Your Order Has Been Processed!');

        //Close the window of the application.
        cy.end();
        


    });
});