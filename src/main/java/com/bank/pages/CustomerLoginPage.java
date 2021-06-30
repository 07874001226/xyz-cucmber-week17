package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CustomerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(CustomerLoginPage.class.getName());

    @FindBy(xpath = "//select[@id='userSelect']")
    WebElement yourName;
    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement logInButton;
    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement logout;
    @FindBy(xpath = "//label[contains(text(),'Your Name :')]")
    WebElement verifyYourNameText;



    public void setEnterYourName(String name) {
        sendTextToElement(yourName, name);
        log.info("Enter YourName : " + yourName.toString());
    }

    public void setClickOnLogInButton() {
        clickOnElement(logInButton);
        log.info("Clicking on Login Button : " + logInButton.toString());
    }
    public String setVerifyLogOutText(){
        log.info("Verify LogOut Text : " + logout.toString());
        return getTextFromElement(logout);
    }
    public void setLogOutButton() {
        clickOnElement(logout);
        log.info("Clicking on Logout Button : " + logout.toString());
    }
    public String setVerifyYourName(){
        log.info("Verify Your Name Text : " + verifyYourNameText.toString());
        return getTextFromElement(verifyYourNameText);
    }

}
