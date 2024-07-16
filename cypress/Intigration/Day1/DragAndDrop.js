///<reference types="cypress"/>


describe('Drag And Drop test', () => {
    it('test1', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');
        

        // which :1 means --> i want to work with left button of mouse.
        // which :2 means --> is for center button of the mouse
        // which :2 means --> is for right button of the mouse
        
        cy.get('#draggable').trigger('mousedown',{which : 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true}) // realse the left button of mouse.
        cy.get('#draggable').trigger('mousedown',{which : 1});
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true}) 

    });
});