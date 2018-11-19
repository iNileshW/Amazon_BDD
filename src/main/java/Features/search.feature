@ResultsFunctionality
Feature: Find Tour & Sort feature

@SmokeTest @RegressionTest 
Scenario: Display tour with valid data

Given User is on STA Travel website
When The user selects the country as "India"
And The user clicks on Find a tour button 
Then The user is presented with results page

@SmokeTest @RegressionTest 
Scenario: Sort Displayed tour

Given User is on STA Travel Tour results website 
When The user selects Price (Low-High) from dropdown
Then The user is presented with Tours sorted in (Low-High) Order
 
@SmokeTest @RegressionTest 
Scenario: View more tours

Given User is on STA Travel Tour results website with results displayed in sorted order
When The user enters the scrolls down to bottom of page
And The user clicks on View More button 
Then The user is presented with more results on page
And Validate Count of results displayed at top of page match with total results displayed 