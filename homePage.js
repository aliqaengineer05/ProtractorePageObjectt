/**
 * Created by pramo_000 on 03-05-2016.
 */

// Get the URL from thi Homepage Function
var homePage = function () {

    this.loadURL = function () {

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');

    };


};

module.exports = new homePage();