var bucket = {}

module.exports = {
    beforeEach: browser => {
        bucket = browser.page.yoodlizePageObj()
        bucket.navigate()
        browser.maximizeWindow()
        bucket.waitForElementPresent('@logo', 10000)

    },
    after: browser => {
        browser.end()
    },

    'Test script 1: Click on a  item and see the description': browser =>{
        //https://dmutah.atlassian.net/browse/UY-18
        
        bucket.api.click('div#item-card-187');
        bucket.waitForElementVisible('@detailsContainer',20000)
        bucket.api.pause(10000)
        bucket.verify.urlContains('187')
        bucket.verify.containsText('@description','Description')
       
    },

    'Test script 2: Browse categories': browser =>{
        //https://dmutah.atlassian.net/browse/UY-19
        
        bucket.waitForElementPresent('@browseCategories', 10000)
        bucket.api.useXpath()
        bucket.api.click('(//*[text()="ELECTRONICS"])[2]')
        bucket.api.useCss()
        bucket.api.pause(5000)
        bucket.verify.containsText('@categoryTag',"Electronics")
          
    },

    'Test script 3: Set Pickup, dropoff dates for the selected rental item.': browser =>{
        //https://dmutah.atlassian.net/browse/UY-20
        
        bucket.api.click('div#item-card-187');
        bucket.waitForElementVisible('@detailsContainer',20000)
        bucket.api.pause(10000)
        bucket.verify.urlContains('187')
        bucket.verify.containsText('@description','Description')
        bucket.api.pause(10000)
        bucket.click('@startDate')
        bucket.waitForElementVisible('@calender', 10000)
       // bucket.api.pause(10000)
        bucket.api.click('td[aria-label="Choose Friday, January 11, 2019 as your check-in date. It’s available."]')
       // bucket.api.pause(10000)
        bucket.click('@endDate')
        bucket.api.click('td[aria-label="Choose Tuesday, January 15, 2019 as your check-out date. It’s available."]')
        bucket.api.pause(10000)
    },

    
    'Test script 4: An account holder can request a item for rental.': browser =>{
        //https://dmutah.atlassian.net/browse/UY-20
        
        bucket.api.click('div#item-card-100');
        bucket.waitForElementVisible('@detailsContainer',20000)
        bucket.api.pause(10000)
        bucket.verify.urlContains('100')
        bucket.verify.containsText('@description','Description')
        bucket.api.pause(10000)
        bucket.click('@startDate')
        bucket.waitForElementVisible('@calender', 10000)
       // bucket.api.pause(10000)
        bucket.api.click('td[aria-label="Choose Monday, March 18, 2019 as your check-in date. It’s available."]')
       // bucket.api.pause(10000)
        bucket.click('@endDate')
        bucket.api.click('td[aria-label="Choose Friday, March 22, 2019 as your check-in date. It’s available."]')
        bucket.api.pause(10000)
        bucket.click('@requestButton')
        bucket.waitForElementVisible('@emailInputBox', 5000)
        bucket.setValue('@emailInputBox','ABRAHAMOSHEEN26@GMAIL.COM')
        bucket.setValue('@passwordInputBox', 'jashdkawedku673eu3h328e09uh')
        bucket.click('@accountLogin')
        bucket.waitForElementVisible('@requestButton',5000)
        bucket.click('@requestButton')
        bucket.waitForElementVisible('@nextButton', 5000)       
        bucket.click('@nextButton')
        bucket.waitForElementPresent('@aboutYourRental',10000)
        bucket.setValue('@rentalMessageInputBox','Gotta play some ball')
        bucket.setValue('@ccNameInput','QAcid Sloth')
        bucket.setValue('@ccCardNumberInput','4242424242424242')
        bucket.setValue('@ccCVVInput','675')
        bucket.setValue('@ccExpiryInput','09')
        bucket.setValue('@ccYearInput','2023')
        bucket.click('@payNowButton')
        bucket.api.pause(20000)
        bucket.waitForElementVisible('@reservationCode',10000)


    },

}