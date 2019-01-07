var bucket = {}

module.exports = {
    beforeEach: browser => {
        bucket = browser.page.yoodlizePageObj()
        bucket.navigate()
            .waitForElementPresent('@logo', 5000)

    },
    after: browser => {
        browser.end()
    },



}