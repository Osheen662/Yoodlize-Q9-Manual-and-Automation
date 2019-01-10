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
        bucket.searchBar('House', 'House')
        bucket.searchBar('martial art', 'Martial Arts')
        bucket.searchBar('Pickaxe', 'Pickaxe')

    },
    'searching for product in a diffrent state not using filters': browser =>{
        bucket.searchBar('WELDER','Welder')
        bucket.searchBar('Funny Cat','Funny Cat')
        bucket.searchBar('Mountain Bike','Mountain Bike')
        bucket.searchBar('Disco', 'Disco Ball')
    },
    'using See All next to category': browser => {
        bucket.usingSeeAll('@seeAllSports', '76', 'Sporting Equipment')
        bucket.usingSeeAll('@seeAllToys', '87', 'Toys and Games')
        bucket.usingSeeAll('@seeAllElectronics', '85', 'Electronics')
        bucket.usingSeeAll('@seeAllFashion', '74', 'Fashion')
        bucket.usingSeeAll('@seeAlllocalExperts', '90', 'Local Experts')
        bucket.usingSeeAll('@seeAllVenues', '92', 'Venues')
    },
    'search using category filters on browse page': browser => {
        bucket.searchFiltersCategory('@toolsFilter', '86')
        bucket.searchFiltersCategory('@homeFilter', '77')
        bucket.searchFiltersCategory('@localExpFilter', '90')
    },
    'search using price filter on browse page': browser => {
        bucket.searchFiltersPrice('5', '10')
        bucket.searchFiltersPrice('50', '10000')
    },

}