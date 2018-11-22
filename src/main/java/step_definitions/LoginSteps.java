package step_definitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertSame;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.Keys;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps extends Base_class{
		
	@Given("^User is launching Chrome browser$")
	public void user_is_launching_Chrome_browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
	}

	@When("^The user enters \"([^\"]*)\" website in address bar$")
	public void the_user_enters_website_in_address_bar(String amazon_website) throws Throwable {
		driver.get(amazon_website);
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
	}

	@Then("^The user is presented amazon website$")
	public void the_user_is_presented_amazon_website() throws Throwable {
		assertEquals(driver.getTitle(),homepage_title1);
		driver.close();
	}
	
	@Given("^User is on Amazon website$")
	public void user_is_on_Amazon_website() throws Throwable {
		user_is_launching_Chrome_browser(); 
		the_user_enters_website_in_address_bar(website);
	}

	@When("^The user moves mouse on Account$")
	public void the_user_moves_mouse_on_Account() throws InterruptedException {
	    Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//*[@id='nav-link-yourAccount']/span[1]"))).build().perform();
		Thread.sleep(2000);
	}

	@When("^The user clicks on signin button$")
	public void the_user_clicks_on_signin_button() {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id='nav-flyout-ya-signin']/a/span")).click();
	}

	@Then("^The user presented with login page$")
	public void the_user_presented_with_login_page() {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(driver.getTitle(),loginPage_title);
		driver.close();
	}

	@Given("^The user is on login page$")
	public void the_user_is_on_login_page() throws Throwable {
		user_is_launching_Chrome_browser(); 
		the_user_enters_website_in_address_bar(website);
		the_user_moves_mouse_on_Account();
		the_user_clicks_on_signin_button();
		assertEquals(driver.getTitle(),loginPage_title);
	}

	@When("^The user enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_enters_the_and(String username, String password) throws InterruptedException {
		driver.findElement(By.id("ap_email")).sendKeys(username);
		Thread.sleep(500);
		driver.findElement(By.id("ap_password")).sendKeys(password);
	}

	@When("^Clicks on Sign in button$")
	public void clicks_on_Sign_in_button() {
	    driver.findElement(By.id("signInSubmit")).click();
	}

	@Then("^The user is presented with validation message$")
	public void the_user_is_presented_with_validation_message() {
		String msg = driver.findElement(By.xpath("//h4")).getText();
		//String err_msg = driver.findElement(By.xpath("//*[@id='auth-error-message-box']/div/h4")).getText();
		try
		{
			if (msg == validation_msg1) 		
				assertSame("Problem assertion fail",msg, validation_msg1);
			else if (msg == validation_msg2)
				assertSame("Imp message fail",msg, validation_msg2);
			else if (msg == validation_msg3)
				assertSame("Incorrect Phone assertion", msg, validation_msg3);
			else;
		}
		//assertEquals(driver.findElement(By.xpath("//*[@id='auth-error-message-box']/div/h4")).getText(),validation_msg1);
		
		catch (Exception e){
			//assertEquals(driver.findElement(By.xpath("//*[@id='auth-warning-message-box']/div/h4")).getText(),validation_msg2);
			System.out.println("Login Successful! Error :"+e);
		}
		finally {
			driver.close();
		}
	}
}
