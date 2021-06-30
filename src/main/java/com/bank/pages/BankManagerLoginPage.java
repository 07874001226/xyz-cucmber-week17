package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BankManagerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());


    @FindBy(xpath = "//button[@ng-click='addCust()']")
    WebElement addCustomerButton;
    @FindBy(xpath = "//button[@ng-click='openAccount()']")
    WebElement openAccountButton;
    @FindBy(xpath = "//button[@ng-click='showCust()']")
    WebElement customerButton;


    public void setClickOnAddCustomerTab() {
        clickOnElement(addCustomerButton);
        log.info("Clicking on Add Customer Button : " + addCustomerButton.toString());
    }

    public void setClickOnOpenAccountButton() {
        clickOnElement(openAccountButton);
        log.info("Clicking on Open Account Button : " + openAccountButton.toString());
    }

    public void setClickOnAddCustomerButton() {
        clickOnElement(customerButton);
        log.info("Clicking on Customer Button : " + customerButton.toString());
    }

}
