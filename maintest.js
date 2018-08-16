/**
 * Created by pramo_000 on 03-05-2016.
 */
describe('Banking App Login', function () {
    // Section 1 : Required or included the Calsses for Intraction
    var homePage = require('./webpages/homePage.js');
    var customerLogin = require('./webpages/customerLnogin');


    beforeEach(function () {
        console.log('Testcases Started Now');

    });

// Section 2 : Load Homepage Validation
    it('LoadHome Page Validation', function () {
        homePage.loadURL();
        expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
    });

// Section 3 : Select the DropDown Login Button.
    it('Select the Drop Down and Login Button Click', function () {
        customerLogin.clickButton();
        customerLogin.selectLogin();
        //  expect(browser.getTitle().toEqual('Protractor practice website - Banking App'));
    });

// Section 4 : Verify the Correct User
    it('Verify the Correct User', function () {
        customerLogin.checkCorrectLogin();
        customerLogin.accountType();
    });


});




