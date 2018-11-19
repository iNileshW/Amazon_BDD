package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

	@RunWith(Cucumber.class)
	@CucumberOptions 
	(		
	features = 
	"C:\\Users\\nwairagade\\eclipse-workspace\\STA\\src\\main\\java\\Features\\search.feature"	
	,glue = {"step_definitions"}
	,plugin = {"pretty","html:test-output", "json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
	,dryRun = false
	,tags = {"@RegressionTest"}
	,monochrome = true		
	,strict = true		
			)
public class Testrunner {

}
