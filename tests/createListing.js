//The website is not quite ready for automation.  I have had to actually write some of this automation around bugs that are currently in the software to make it work.

module.exports = {
    beforeEach: browser => {
        browser.url("https://alpha.yoodlize.com/")
            .waitForElementPresent('input[class="form-control"]', 5000)
    },
    after: browser => {
        browser.end()
    },
'Create a new listing' : browser => {
    browser.pause(3000)
    browser.click('a[href="/login?refer=add-listing"]')
    .pause(3000)
    .waitForElementPresent('input[name="email"]', 5000)
    .setValue('input[name="email"]', 'motoxman393@hotmail.com')
    .pause(3000)
    .waitForElementPresent('input[name="password"]', 5000)
    .setValue('input[name="password"]', 'asdf123456')
    .pause(3000)
    .click('button[type="submit"]')
    .waitForElementPresent('[src="/images/logo/blueRaw.png"]', 5000)
    .pause(3000)
    .click('a[href="/add-listing?mode=new"]')
    .pause(3000)
    .waitForElementPresent('button[class="sc-esjQYD iteNRl sc-ifAKCX kvYMhQ"]', 5000)
    .click('button[class="sc-esjQYD iteNRl sc-ifAKCX kvYMhQ"]')
    .waitForElementPresent('input[name="title"]', 5000)
    .setValue('input[name="title"]', 'Armored Car')
    .setValue('textarea[name="description"]', 'One heck of a car! Bullet Proof!')
    .setValue('select[class="sc-dTdPqK RtebY sc-hMqMXs gPMpuy"]', 'Recreational Vehicles')
    .pause(2000)
    .click('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    .pause(1000)
    .waitForElementPresent('input[name="street"]')
    .pause(1000)
    .setValue('input[name="street"]', '560 S 100 W St')
    .pause(1000)
    .setValue('input[name="street"]', '60 S 100 W St')
    .pause(1000)
    browser.keys(browser.Keys.TAB + browser.Keys.TAB + 'PROVO')
    .pause(1000)
    .setValue('input[name="state"]', 'Utah')
    .waitForElementVisible('input[name="zipcode"]', 1000)
    .setValue('input[name="zipcode"]', '84601')
    .pause(1000)
    .click('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    .waitForElementVisible('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    .click('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    .waitForElementVisible('input[name="dailyRate"]')
    .setValue('input[name="dailyRate"]', '100')
    .click('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    .waitForElementVisible('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
    .click('button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]')
}

}
