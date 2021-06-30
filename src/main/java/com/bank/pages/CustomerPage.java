package com.bank.pages;

import com.bank.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CustomerPage extends Utility {

    private static final Logger log = LogManager.getLogger(CustomerPage.class.getName());

    @FindBy(xpath = "//thead/tr/td[4]")
    WebElement accountNumber;

    @FindBy(xpath = "//td[contains(text(),'Delete Customer')]")
    WebElement deletCustomer;

    @FindBy(xpath = "//input[@placeholder='Search Customer']")
    WebElement searchCustomer;

    public void setEnterAccountNumber(String name) {
        sendTextToElement(accountNumber, name);
        log.info("Enter Account Number : " + accountNumber.toString());
    }

    public void setDeletCustomer(String name) {
        sendTextToElement(deletCustomer, name);
        log.info("Delet Customer : " + deletCustomer.toString());
    }

    public void setSearchCustomerCustomer(String name) {
        sendTextToElement(searchCustomer, name);
        log.info("Search Customer : " + searchCustomer.toString());
    }


}
