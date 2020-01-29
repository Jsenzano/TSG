package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import util.Driver;

public class PassportPage {
    private static WebDriver driver = Driver.getDriver();

    public PassportPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//*[@class='BusinessUnitsMenu']/li[4]")
    public WebElement passport_Btn;

    @FindBy(xpath = "//*[@id=\"currently_reside_us\"]")
    public WebElement usa_Selection;

    @FindBy(xpath = "//*[@class=\"datepicker hasDatepicker\"]")
    public WebElement dateofbirth_Field;

    @FindBy(xpath = "//*[@id=\"existing_yes\"]")
    public WebElement yes_Selection;

    @FindBy(xpath = "//*[@id=\"passport_eligibility\"]/div[5]/div")
    public WebElement next_Btn;
}
