import Login_po from "../../support/PageObjects/OrangeHRM/loginPage";
import Link_po from "../../support/PageObjects/OrangeHRM/link_po";
import Logout_po from "../../support/PageObjects/OrangeHRM/logout_po";

describe('', () => {

    const login_po = new Login_po();
    const logout_po = new Logout_po();
    const link_po = new Link_po();

    it('test1', () => {
        
        // login
        login_po.EnterURl();
        login_po.Login();

        //clicking on admi link

        link_po.linkclick('Admin');

        //logging out
        logout_po.logout();



    });
    
});