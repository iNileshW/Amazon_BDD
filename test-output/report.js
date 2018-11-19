$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nwairagade/eclipse-workspace/STA/src/main/java/Features/search.feature");
formatter.feature({
  "line": 2,
  "name": "Find Tour \u0026 Sort feature",
  "description": "",
  "id": "find-tour-\u0026-sort-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ResultsFunctionality"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Display tour with valid data",
  "description": "",
  "id": "find-tour-\u0026-sort-feature;display-tour-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SmokeTest"
    },
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on STA Travel website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "The user selects the country as \"India\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user clicks on Find a tour button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The user is presented with results page",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_is_on_STA_Travel_website()"
});
formatter.result({
  "duration": 22921450600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 33
    }
  ],
  "location": "SearchSteps.the_user_selects_the_country_as(String)"
});
formatter.result({
  "duration": 2593879500,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.the_user_clicks_on_Find_a_tour_button()"
});
formatter.result({
  "duration": 8228906700,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.the_user_is_presented_with_results_page()"
});
formatter.result({
  "duration": 2614516200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Sort Displayed tour",
  "description": "",
  "id": "find-tour-\u0026-sort-feature;sort-displayed-tour",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@SmokeTest"
    },
    {
      "line": 12,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is on STA Travel Tour results website",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "The user selects Price (Low-High) from dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The user is presented with Tours sorted in (Low-High) Order",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.user_is_on_STA_Travel_Tour_results_website()"
});
formatter.result({
  "duration": 37623297500,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.the_user_selects_Price_Low_High_from_dropdown()"
});
formatter.result({
  "duration": 663297100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.the_user_is_presented_with_Tours_sorted_in_Low_High_Order()"
});
formatter.result({
  "duration": 704984300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "View more tours",
  "description": "",
  "id": "find-tour-\u0026-sort-feature;view-more-tours",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@SmokeTest"
    },
    {
      "line": 19,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on STA Travel Tour results website with results displayed in sorted order",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "The user enters the scrolls down to bottom of page",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "The user clicks on View More button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The user is presented with more results on page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Validate Count of results displayed at top of page match with total results displayed",
  "keyword": "And "
});
formatter.match({
  "location": "SearchSteps.user_is_on_STA_Travel_Tour_results_website_with_results_displayed_in_sorted_order()"
});
formatter.result({
  "duration": 29630918400,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.the_user_enters_the_scrolls_down_to_bottom_of_page()"
});
formatter.result({
  "duration": 9286300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.the_user_clicks_on_View_More_button()"
});
formatter.result({
  "duration": 420463100,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.the_user_is_presented_with_more_results_on_page()"
});
formatter.result({
  "duration": 163426500,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.validate_Count_of_results_displayed_at_top_of_page_match_with_total_results_displayed()"
});
formatter.result({
  "duration": 471760100,
  "status": "passed"
});
});