$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nwairagade/eclipse-workspace/Vocalink/src/main/java/Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Validation of login functionality",
  "description": "",
  "id": "validation-of-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFunctionality"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Error message displayed for ivalid login credentials",
  "description": "",
  "id": "validation-of-login-functionality;error-message-displayed-for-ivalid-login-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@SmokeTest"
    },
    {
      "line": 21,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "The user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "The user enters the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "The user is presented with validation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "validation-of-login-functionality;error-message-displayed-for-ivalid-login-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "validation-of-login-functionality;error-message-displayed-for-ivalid-login-credentials;;1"
    },
    {
      "cells": [
        "abcd@efg.com",
        "123456"
      ],
      "line": 31,
      "id": "validation-of-login-functionality;error-message-displayed-for-ivalid-login-credentials;;2"
    },
    {
      "cells": [
        "nsw_2001@yahoo.com",
        "Ind!r@29a"
      ],
      "line": 32,
      "id": "validation-of-login-functionality;error-message-displayed-for-ivalid-login-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Error message displayed for ivalid login credentials",
  "description": "",
  "id": "validation-of-login-functionality;error-message-displayed-for-ivalid-login-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@RegressionTest"
    },
    {
      "line": 1,
      "name": "@LoginFunctionality"
    },
    {
      "line": 21,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "The user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "The user enters the \"nsw_2001@yahoo.com\" and \"Ind!r@29a\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "The user is presented with validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.the_user_is_on_login_page()"
});
formatter.result({
  "duration": 29330166200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nsw_2001@yahoo.com",
      "offset": 21
    },
    {
      "val": "Ind!r@29a",
      "offset": 46
    }
  ],
  "location": "LoginSteps.the_user_enters_the_and(String,String)"
});
formatter.result({
  "duration": 1577865300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicks_on_Sign_in_button()"
});
formatter.result({
  "duration": 5817366200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.the_user_is_presented_with_validation_message()"
});
formatter.result({
  "duration": 30280575100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h4\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027UKLONDLP64\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\NWAIRA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 89554a21ea1fbd89b83e4ffdd1671ac4\n*** Element info: {Using\u003dxpath, value\u003d//h4}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat step_definitions.LoginSteps.the_user_is_presented_with_validation_message(LoginSteps.java:97)\r\n\tat ✽.Then The user is presented with validation message(C:/Users/nwairagade/eclipse-workspace/Vocalink/src/main/java/Features/login.feature:27)\r\n",
  "status": "failed"
});
});