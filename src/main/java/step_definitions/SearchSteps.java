package step_definitions;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.Keys;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SearchSteps {
	//Global Variables
	WebDriver driver;
	WebDriverWait wait;
	String homepage_title="Worldwide Tours | STA Travel";
	String tourPage_title="Find Great Adventures at Great Prices on AdventureLink! | STA Travel";
	String country="India";
	
	@Given("^User is on STA Travel website$")
	public void user_is_on_STA_Travel_website() {
		System.setProperty("webdriver.chrome.driver", "C:\\Drivers\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.statravel.co.uk/tours-worldwide.htm");
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		//Accept Cookies
		driver.findElement(By.id("sta-cookie-save-all-button")).click();		
		//Assertion for page opened
		assertEquals(driver.getTitle(),homepage_title);
	}

	@When("^The user selects the country as \"([^\"]*)\"$")
	public void the_user_selects_the_country_as(String arg1) throws InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor)driver;	
		//Textbox for Destination
		WebElement myDynamicElement = (new WebDriverWait(driver, 10))
				  .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='qbtb_2_0_id_0']/div[2]/div[1]/div/div[6]/form/fieldset[1]/div[1]/div/input[2]")));
		js.executeScript("arguments[0].click();", myDynamicElement);
		myDynamicElement.sendKeys(arg1);
		//Wait for AJAX Response
		Thread.sleep(700);
		//Selection of Country
		driver.findElement(By.xpath("//*[@id=\"qbtb_2_0_id_0\"]/div[2]/div[1]/div/div[6]/form/fieldset[1]/div[1]/div/input[2]")).sendKeys(Keys.ARROW_DOWN);
		Thread.sleep(700);
		driver.findElement(By.xpath("//*[@id=\"qbtb_2_0_id_0\"]/div[2]/div[1]/div/div[6]/form/fieldset[1]/div[1]/div/input[2]")).sendKeys(Keys.ARROW_DOWN);
		driver.findElement(By.xpath("//*[@id=\"qbtb_2_0_id_0\"]/div[2]/div[1]/div/div[6]/form/fieldset[1]/div[1]/div/input[2]")).sendKeys(Keys.TAB);
	}

	@When("^The user clicks on Find a tour button$")
	public void the_user_clicks_on_Find_a_tour_button(){
		//Click on Find Tour Button
		driver.findElement(By.xpath("//*[@id=\"qbtb_2_0_id_0\"]/div[2]/div[1]/div/div[6]/form/fieldset[2]/p/button")).click();
	}

	@Then("^The user is presented with results page$")
	public void the_user_is_presented_with_results_page() {
		String current_Title = driver.getTitle();	    
		//Assertion
		assertEquals(current_Title,tourPage_title);
		driver.close();
	}

	@Given("^User is on STA Travel Tour results website$")
	public void user_is_on_STA_Travel_Tour_results_website() throws InterruptedException{
		//Opening website to intended page using previous methods
		user_is_on_STA_Travel_website();
		the_user_selects_the_country_as(country);
		the_user_clicks_on_Find_a_tour_button();
		String current_Title = driver.getTitle();
		//Assertion
		assertEquals(current_Title,tourPage_title);
	}

	@When("^The user selects Price \\(Low-High\\) from dropdown$")
	public void the_user_selects_Price_Low_High_from_dropdown(){
	    Select mySelect = new Select (driver.findElement(By.id("sortSelect")));
	    mySelect.selectByVisibleText("Price (Low-High)");
	    }

	@Then("^The user is presented with Tours sorted in \\(Low-High\\) Order$")
	public void the_user_is_presented_with_Tours_sorted_in_Low_High_Order(){
		//Price of displayed product
		String First_price = driver.findElement(By.xpath("//*[@id='products']/div[1]/div/div[2]/div[2]/p[2]/span[1]/span[2]")).getText();
		String Last_price = driver.findElement(By.xpath("//*[@id='products']/div[36]/div/div[2]/div[2]/p[2]/span[1]/span[2]")).getText();
		//Conversion to integer
		int Firstprice = convert(First_price); 
		int Lastprice = convert(Last_price); 
        //Assertion
		assertTrue(Lastprice>Firstprice);
		driver.close();
	}

	public int convert(String price) {
		StringBuffer fp2 = new StringBuffer();
		StringBuffer alpha = new StringBuffer();
		StringBuffer special = new StringBuffer();
		for (int i=0; i<price.length(); i++) 
        { 
            if (Character.isDigit(price.charAt(i))) 
                fp2.append(price.charAt(i)); 
            else if(Character.isAlphabetic(price.charAt(i))) 
                alpha.append(price.charAt(i)); 
            else
                special.append(price.charAt(i)); 
        }
		int lp = Integer.parseInt(fp2.toString());
		return lp;
	}

	@Given("^User is on STA Travel Tour results website with results displayed in sorted order$")
	public void user_is_on_STA_Travel_Tour_results_website_with_results_displayed_in_sorted_order() throws InterruptedException{
		//Opening website to intended page using previous methods
		user_is_on_STA_Travel_website();
		the_user_selects_the_country_as(country);
		the_user_clicks_on_Find_a_tour_button();
		the_user_selects_Price_Low_High_from_dropdown();
		String current_Title = driver.getTitle();
		//Assertion
		assertEquals(current_Title,tourPage_title);	    
	}

	@When("^The user enters the scrolls down to bottom of page$")
	public void the_user_enters_the_scrolls_down_to_bottom_of_page(){
		//Scroll to bottom of page
		JavascriptExecutor js = ((JavascriptExecutor) driver);
		js.executeScript("window.scrollTo(0,document.body.scrollHeight)");
	}

	@When("^The user clicks on View More button$")
	public void the_user_clicks_on_View_More_button(){
	    driver.findElement(By.id("btnViewMore")).click();
	}

	@Then("^The user is presented with more results on page$")
	public void the_user_is_presented_with_more_results_on_page(){
		//Scroll to bottom of page
		JavascriptExecutor js = ((JavascriptExecutor) driver);
		js.executeScript("window.scrollTo(0,document.body.scrollHeight)");
	}

	@Then("^Validate Count of results displayed at top of page match with total results displayed$")
	public void validate_Count_of_results_displayed_at_top_of_page_match_with_total_results_displayed(){
	    String result_count = driver.findElement(By.id("lblTotalSearchResult")).getText();
	    //Conversion to int
	    int result = convert(result_count);
	    //Getting total results on page
	    List<WebElement> list = driver.findElements(By.xpath("//*[@id='products']/div"));
	    //Assertion
	    assertEquals(result,list.size());
	    driver.close();
	}
}
