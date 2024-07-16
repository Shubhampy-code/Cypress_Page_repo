Feature: Simple form

Scenario: to Validate simple form

Given user opena the Simple form url

When user entere firstname, lastname, email, message

And clicks on submit

Then An alert saying sucessfil message has to be displayed