package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddCustomerPage extends Utility {

    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());


    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement firstName;
    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement lastName;
    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement postCode;
    @FindBy(xpath = "//button[text()='Add Customer']")
    WebElement addCustomer;


    public void setEnterFirstName(String name) {
        sendTextToElement(firstName, name);
        log.info("Enter FirstName : " + firstName.toString());
    }

    public void setEnterLastName(String name) {
        sendTextToElement(lastName, name);
        log.info("Enter lastName : " + lastName.toString());
    }

    public void setEnterPostCode(String name) {
        sendTextToElement(postCode, name);
        log.info("Enter Post Code : " + postCode.toString());
    }

    public void setClickOnAddCustomer() {
        log.info("Click On Add Customer : " + addCustomer.toString());
        clickOnElement(addCustomer);
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
