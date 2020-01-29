package step_definitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.xmlbeans.impl.jam.JElement;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import pages.HomePage;
import pages.PassportPage;
import step_definitions.step_impl.PassportPage_impl;
import util.Driver;
import util.SeleniumUtils;

public class PassportPage_STEPS {
    private static WebDriver driver = Driver.getDriver();
    PassportPage_impl passportPage = new PassportPage_impl();

    @When("User navigates Passports page")
    public void user_navigates_Passports_page() {
        passportPage.navigateToPassport();
    }

    @Then("Verifies title is U.S. Passports")
    public void verifies_title_is_U_S_Passports() {
        Assert.assertEquals("U.S. Passports",driver.getTitle());
    }

    @Then("User selects United States")
    public void userSelectsUnitedStates() throws InterruptedException {
        Thread.sleep(2000);
        passportPage.selectUsa();
    }

    @Then("User enters DOB")
    public void userEntersDOB() throws InterruptedException {
        Thread.sleep(2000);
        passportPage.enterDOB();

    }

    @Then("User selects passport history")
    public void userSelectsPassportHistory() throws InterruptedException {
        Thread.sleep(2000);
        passportPage.passportHistory();
    }

    @Then("User click Next")
    public void userClickNext() {
        passportPage.clickNext();
    }
}
