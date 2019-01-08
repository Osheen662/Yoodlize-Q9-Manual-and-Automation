var yoodlizeCommands = {

    checkHomePg: function () {
        this
            .assert.elementPresent('@logo')
            .assert.elementPresent('@searchBar')
            .assert.elementPresent('@searchBtn')
            .assert.elementPresent('@browse')
            .assert.elementPresent('@seeAllTools')
            .assert.elementPresent('@nextToolBtn')
            .assert.elementPresent('@previousToolBtn')
            .assert.elementPresent('@seeAllToys')
            .assert.elementPresent('@nextToysBtn')
            .assert.elementPresent('@previousToysBtn')
            .assert.elementPresent('@seeAllSports')
            .assert.elementPresent('@nextSportsBtn')
            .assert.elementPresent('@reviousSportsBtn')
            .assert.elementPresent('@seeAllBusiness')
            .assert.elementPresent('@nextBusinessBtn')
            .assert.elementPresent('@previousBusinessBtn')
            .assert.elementPresent('@seeAllElectronics')
            .assert.elementPresent('@nextElectronicsBtn')
            .assert.elementPresent('@previousElectronicsBtn')
            .assert.elementPresent('@seeAllHome')
            .assert.elementPresent('@nextHomeBtn')
            .assert.elementPresent('@previousHomeBtn')
            .assert.elementPresent('@seeAllFashion')
            .assert.elementPresent('@nextFashionBtn')
            .assert.elementPresent('@previousFashionBtn')
            .assert.elementPresent('@seeAllGear')
            .assert.elementPresent('@nextGearBtn')
            .assert.elementPresent('@previousGearBtn')
            .assert.elementPresent('@seeAllNavigators')
            .assert.elementPresent('@nextNavigatorsBtn')
            .assert.elementPresent('@previousNavigatorsBtn')
            .assert.elementPresent('@seeAllParty')
            .assert.elementPresent('@nextPartyBtn')
            .assert.elementPresent('@previousPartyBtn')
            .assert.elementPresent('@seeAllVenues')
            .assert.elementPresent('@nextVenuesBtn')
            .assert.elementPresent('@previousVenuesBtn')
            .assert.elementPresent('@seeAllVehicles')
            .assert.elementPresent('@nextVehiclesBtn')
            .assert.elementPresent('@previousVehiclesBtn')
            .assert.elementPresent('@categorySection')
        return this
    },

    searchBar: function (searchInfo, url) {
        this
            .setValue('@searchBar', searchInfo)
            .click('@searchBtn')
            .assert.urlEquals(url)
        return this
    },
}


module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [yoodlizeCommands],
    elements: {
        //Home page
        logo: '[src="/images/logo/blueRaw.png"]',
        searchBar: '[placeholder="Search for an item"]',
        searchBtn: '[class="sc-esjQYD iIXhUv sc-ifAKCX kvYMhQ"]',
        browse: '[actionbuttonlarge="true"]',
        categorySection: '[class="sc-bwzfXH ldxwrS sc-bdVaJa iHZvIS"]',


        //Tools category
        seeAllTools: {
            selector: '(//a[@href="/s?category=86"])[1]',
            locateStrategy: 'xpath'
        },
        nextToolBtn: 'div:nth-child(1) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousToolBtn: 'div:nth-child(1) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        toolCardPickaxe: 'div[id="item-card-561"]', //Eagle Mountain Ut
        toolCardWelder: 'div[id="item-card-44"]', //Kings County Ny

        //Toys category
        seeAllToys: {
            selector: '(//a[@href="/s?category=87"])[1]',
            locateStrategy: 'xpath'
        },
        nextToysBtn: 'div:nth-child(1) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousToysBtn: 'div:nth-child(1) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        toysCardZorb: 'div[id="item-card-47"]', //Kings County Ny
        toysCardTister: 'div[id="item-card-93"]', //Orem Ut


        //Sporting Goods category
        seeAllSports: {
            selector: '(//a[@href="/s?category=76"])[1]',
            locateStrategy: 'xpath'
        },
        nextSportsBtn: 'div:nth-child(1) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousSportsBtn: 'div:nth-child(1) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        sportsCardWiiU: 'div[id="item-card-615"]', //Flushing Ny
        sportsCardSnakeGun: 'div[id="item-card-715"]', //Orem Ut

        //Business Equipment category
        seeAllBusiness: {
            selector: '(//a[@href="/s?category=89"])[1]',
            locateStrategy: 'xpath'
        },
        nextBusinessBtn: 'div:nth-child(5) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousBusinessBtn: 'div:nth-child(5) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        businessCardPhone: 'div[id="item-card-98"]', //Provo Ut
        buisnessCardHitachi: 'div[id="item-card-54"]', //Kings County Ny

        //Electronics category
        seeAllElectronics: {
            selector: '(//a[@href="/s?category=85"])[1]',
            locateStrategy: 'xpath'
        },
        nextElectronicsBtn: 'div:nth-child(5) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousElectronicsBtn: 'div:nth-child(5) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        electronicsCardMacbookPro: 'div[id="item-card-39"]', //Kings County Ny
        electronicsCardPs4: 'div[id="item-card-91"]', //Provo Ut

        //Home, Lawn & Garden
        seeAllHome: {
            selector: '(//a[@href="/s?category=77"])[1]',
            locateStrategy: 'xpath'
        },
        nextHomeBtn: 'div:nth-child(5) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousHomeBtn: 'div:nth-child(5) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        homeCardPoster: 'div[id="item-card-696"]', //Long Island City Ny
        homeCardWacker: 'div[id="item-card-80"]', //Draper Ut

        //Fashion
        seeAllFashion: {
            selector: '(//a[@href="/s?category=74"])[1]',
            locateStrategy: 'xpath'
        },
        nextFashionBtn: 'div:nth-child(9) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousFashionBtn: 'div:nth-child(9) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        fashionCardWeddingDress: 'div[id="item-card-74"]', //Provo Ut
        fashionCardDogpower: 'div[id="item-card-618"]', //Flushing Ny

        //Outdoor Gear
        seeAllGear: {
            selector: '(//a[@href="/s?category=84"])[1]',
            locateStrategy: 'xpath'
        },
        nextGearBtn: 'div:nth-child(9) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousGearBtn: 'div:nth-child(9) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        gearCardHammock: 'div[id="item-card-82"]', //Orem Ut
        gearCardCampingSet: 'div[id="item-card-33"]', //Kings County Ny

        //Navigators
        seeAllNavigators: {
            selector: '(//a[@href="/s?category=90"])[1]',
            locateStrategy: 'xpath'
        },
        nextNavigatorsBtn: 'div:nth-child(9) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousNavigatorsBtn: 'div:nth-child(9) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        navigatorsCardSewing: 'div[id="item-card-102"]', //Spanish Fork Ut
        navigatorsCardOldMan: 'div[id="item-card-187"]', //Elk Grove Ca

        //Party
        seeAllParty: {
            selector: '(//a[@href="/s?category=88"])[1]',
            locateStrategy: 'xpath'
        },
        nextPartyBtn: 'div:nth-child(13) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousPartyBtn: 'div:nth-child(13) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        partyCardMonkey: 'div[id="item-card-656"]', //Orem Ut
        partyCardSnowCone: 'div[id="item-card-50"]', //Kings County Ny

        //Venues
        seeAllVenues: {
            selector: '(//a[@href="/s?category=92"])[1]',
            locateStrategy: 'xpath'
        },
        nextVenuesBtn: 'div:nth-child(13) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousVenuesBtn: 'div:nth-child(13) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
        venuesCardHouse: 'div[id="item-card-107"]', //Provo Ut
        venuesCardDoMyThing: 'div[id="item-card-617"]', //Flushing Ny

        //Recreational Vehicles
        seeAllVehicles: {
            selector: '(//a[@href="/s?category=91"])[1]',
            locateStrategy: 'xpath'
        },
        nextVehiclesBtn: 'div:nth-child(13) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
        previousVehiclesBtn: 'div:nth-child(13) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu'),
        vehiclesCardBike: 'div[id="item-card-105"]', //Provo Ut
        vehiclesCardHorse: 'div[id="item-card-706"]', //Anchorage Ak

        //Browse page
        filters: '[class="fal fa-chevron-circle-up fa-lg"]',
        toolsFilter: 'div:nth-child(6) > div.icheckbox_minimal-blue > ins',
        toysFilter: 'div:nth-child(7) > div.icheckbox_minimal-blue > ins',
        searchFilter: '[placeholder="Search"]',
        cityFilter: '[placeholder="Enter your city"]',
        startDateFilter: '[id="startDate"]',
        endDateFilter: '[id="endDate"]',
        july31Date: 'td.CalendarDay.CalendarDay_1.CalendarDay__defaultCursor.CalendarDay__defaultCursor_2.CalendarDay__default.CalendarDay__default_3.CalendarDay__blocked_minimum_nights.CalendarDay__blocked_minimum_nights_4.CalendarDay__selected_start.CalendarDay__selected_start_5.CalendarDay__selected.CalendarDay__selected_6',
        august01Date: 'div > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td:nth-child(5)',
        ratingsFilter: '[class="sc-bdVaJa eBoTiH"]',
        minPriceFilter: '[name="priceMin"]',
        maxPriceFilter: '[name="priceMax"]',
        clearFiltersBtn: '[class="sc-esjQYD kDoEhs sc-ifAKCX opXhf"]',
        applyFiltersBtn: '[class="sc-esjQYD bCvtjb sc-ifAKCX kvYMhQ"]',



    }

}