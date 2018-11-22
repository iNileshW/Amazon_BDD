package step_definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Base_class {
	//Global Variables
	WebDriver driver;
	WebDriverWait wait;	
	String website = "https://www.amazon.co.uk";
	String homepage_title1="Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more";
	String loginPage_title="Amazon Sign In";
	String btn_signin = "Sign in";
	String validation_msg1 = "There was a problem";
	String validation_msg2 = "Important Message!";
	String validation_msg3 = "Incorrect phone number";
	
}
