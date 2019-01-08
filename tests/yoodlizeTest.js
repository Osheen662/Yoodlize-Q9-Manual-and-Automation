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

    'find elements on home page and search local product': browser =>{
        bucket.checkHomePg()
        bucket.searchBar('Pickaxe', 'Pickaxe')
    },
    'searching for product in a diffrent state not using filters': browser =>{
        bucket.searchBar('Welder','Welder')
    },

}