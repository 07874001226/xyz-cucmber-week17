package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class OpenAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());

    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement customerName;

    @FindBy(xpath = "//select[@id='currency']")
    WebElement currency;

    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement processButton;

    public void setCustomerName(String value) {
        selectByValueFromDropDown(customerName,value);
        log.info("Enter Customer Name : " + customerName.toString());
    }

    public void setEnterCurrency(String value) {
        selectByValueFromDropDown(currency,value);
        log.info("Enter Currency : " + currency.toString());
    }

    public void setclickONProcessButton() {
        log.info("Click ON Process Button : " + processButton.toString());
        clickOnElement(processButton);
    }
    public String verifyCustomerAddedSuccessfullyText() {
        Alert alert = driver.switchTo().alert();
        return alert.getText();
    }

    public void clickOnOkAlert() {
        Alert alert = driver.switchTo().alert();
        alert.accept();
    }


}
