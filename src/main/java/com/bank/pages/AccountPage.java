package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    @FindBy(xpath = "//button[@ng-click='deposit()']")
    WebElement deposit;
    @FindBy(xpath = "//input[@placeholder= 'amount']")
    WebElement amount;
    @FindBy(xpath = "//button[text()='Deposit']")
    WebElement depositeButton;
    @FindBy(xpath = "//span[contains(text(),'Deposit Successful')]")
    WebElement verifyDepositeText;
    @FindBy(xpath = "//button[@ng-click='withdrawl()']")
    WebElement withdrawl;
    @FindBy(xpath = "//body/div[3]/div[1]/div[2]/div[1]/div[4]/div[1]/form[1]/button[1]")
    WebElement withdrawlButton;
    @FindBy(xpath = "//span[contains(text(),'Transaction successful')]")
    WebElement verifyWithdrawlText;

    public void setClickOnDepositeTab() {
        clickOnElement(deposit);
        log.info("Clicking on Deposite Tab : " + deposit.toString());
    }
    public void amount100(String name){
        sendTextToElement(amount, name);
        log.info("Enter YourName : " + amount.toString());
    }
    public void setClickOnDepositeButton() {
        clickOnElement(depositeButton);
        log.info("Clicking on Deposite Button : " + depositeButton.toString());
    }
    public String setVerifyDepositeSuccessful(){
        log.info("Verify Deposite Text : " + verifyDepositeText.toString());
        return getTextFromElement(verifyDepositeText);
    }
    public void setClickOnWithdrawlTab() {
        clickOnElement(withdrawl);
        log.info("Clicking on Withdrawl Tab : " + withdrawl.toString());
    }
    public void setClickOnWithdrawlButton() {
        clickOnElement(withdrawlButton);
        log.info("Clicking on Withdrawl Button : " + withdrawlButton.toString());
    }
    public String setVerifyWithdrawlSuccessful(){
        log.info("Verify Withdrawl Text : " + verifyWithdrawlText.toString());
        return getTextFromElement(verifyWithdrawlText);
    }


}
