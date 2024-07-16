describe('Facebook Login Suite', () => {
    it('Login test 11', () => {
        cy.visit("https://www.facebook.com/login/");
        cy.get("#email").type("shubham.sds@gmail.com");
        cy.get("#pass").type("");
        cy.get("#loginbutton").click();
    });

    it('Login test123', () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.xpath('//input[@id="username"]').type("tomsmith");
        cy.xpath('//input[@name="password"]').type("SuperSecretPassword!");
        cy.xpath('//button[@type="submit"]').click();
        
    });

    it.only('Ebay test', () => {
      cy.visit("https://www.ebay.com/");
      cy.xpath("//a[text()=' Help & Contact']");
      cy.xpath("//a[text()=' Daily Deals']");
      cy.xpath("//a[text()=' Sell']");
      
    });
});