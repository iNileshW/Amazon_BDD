@LoginFunctionality
Feature: Validation of login functionality

@SmokeTest @RegressionTest 
Scenario: Launch Browser


Given User is launching Chrome browser
When The user enters "https://www.amazon.co.uk/" website in address bar
Then The user is presented amazon website

@SmokeTest @RegressionTest 
Scenario: Signin page validation


Given User is on Amazon website
When The user moves mouse on Account
And The user clicks on signin button
Then The user presented with login page
 
@SmokeTest @RegressionTest 
Scenario Outline: Error message displayed for ivalid login credentials 

Given The user is on login page
When The user enters the "<username>" and "<password>"
And Clicks on Sign in button 
Then The user is presented with validation message

Examples:
|	username			|	password	|
|	abcd@efg.com		|	123456		|
|	hij@klm.com			|	789010		|
|	nopqrstuvwxyz		|	111213		|
|	07582320507			|	sdk32!		|

