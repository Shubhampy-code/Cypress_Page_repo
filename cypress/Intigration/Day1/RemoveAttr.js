///<reference types="cypress"/>




describe('Remove attribute', () => {
    it('Test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//*[.="Open Tab"]').invoke('removeAttr','target').click();
        
        //origin method --> when we are working n a diffrent url.    
    
        cy.origin('https://www.qaclickacademy.com/',()=>{
            //whatever actio tht i have to perform i this url
            // that code i am goig to write in this function
            cy.visit('')
            cy.contains('Access all our Courses').click();
        })
    });

    it.only('Open new window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath('//*[.="Open Window"]').invoke('removeAttr','onclick').click({force:true});

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('')
            cy.contains('Access all our Courses').click();
            cy.wait(2000);
            //cy.go('back');
            
        })
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath("//*[.='Free Access to InterviewQues/ResumeAssistance/Material']").click();

    
    
    });
});