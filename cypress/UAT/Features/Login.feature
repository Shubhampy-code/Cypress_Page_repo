Feature: Login

Scenario Outline: Validting the Login page of HRM.

Given User enters the url

When enter username as <username>
And enter password as <password>
And click on submit
Then Login should be sucessful

Examples: 
    | username | password |
    | ADmin    | Admin123 |
    | admin    | passs1   |
    | Admin    | admin123 |
    | admin    | Admin123 |
    |          |          |

    