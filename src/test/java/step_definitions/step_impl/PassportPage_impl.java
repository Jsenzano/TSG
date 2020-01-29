package step_definitions.step_impl;

import org.openqa.selenium.WebDriver;
import pages.PassportPage;
import util.Driver;
import util.SeleniumUtils;

public class PassportPage_impl {
    private static WebDriver driver = Driver.getDriver();
    PassportPage passportPage = new PassportPage();
    HomePage_impl homePage = new HomePage_impl();

    public void navigateToPassport(){
        SeleniumUtils.click(passportPage.passport_Btn);
    }

    public void selectUsa(){
        SeleniumUtils.click(passportPage.usa_Selection);
    }

    public void enterDOB(){
        SeleniumUtils.sendKeys(passportPage.dateofbirth_Field,"01/01/1990");
    }

    public void passportHistory(){
        SeleniumUtils.click(passportPage.yes_Selection);
    }

    public void clickNext(){
        SeleniumUtils.click(passportPage.next_Btn);
    }

}
