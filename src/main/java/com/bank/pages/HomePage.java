package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Home')]")
    WebElement homePageButton;

    @FindBy(xpath = "//button[contains(text(),'Customer Login')]")
    WebElement customerLoginLink;

    @FindBy(xpath = "//button[contains(text(),'Bank Manager Login')]")
    WebElement managerLoginLink;

    public void setClickOnHomePageButton() {
        clickOnElement(homePageButton);
        log.info("Clicking on Home Page : " + homePageButton.toString());
    }

    public void setClickOnCustomerLoginLink() {
        clickOnElement(customerLoginLink);
        log.info("Clicking on Customer Log In Link : " + customerLoginLink.toString());
    }

    public void setClickOnbankManagerLoginLink() {
        clickOnElement(managerLoginLink);
        log.info("Clicking on Bank Manager Login Link : " + managerLoginLink.toString());
    }


}
