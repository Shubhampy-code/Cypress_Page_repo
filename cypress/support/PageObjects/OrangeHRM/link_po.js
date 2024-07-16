class Link_po{
// method to click on any link in the webpage
// pararmeter is pased, the text in the parameter

// generic method to click on any link

linkclick(link){
cy.contains(link).click();

//this will check on any link with the text being passed from mt test case

}
}

export default Link_po;