var yoodlizeCommands = {

    checkHomePg() {
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
            .assert.elementPresent('@previousSportsBtn')
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
            .assert.elementPresent('@seeAlllocalExperts')
            .assert.elementPresent('@nextlocalExpertsBtn')
            .assert.elementPresent('@previouslocalExpertsBtn')
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

    searchBar(searchInfo, searchResult) {
        this
            .setValue('@searchBar', searchInfo)
            .click('@searchBtn')
            .expect.element('@searchResult').text.to.contain(searchResult).before(7000)
            this.click('@logo')
        return this
    },

    usingSeeAll(categoryLink, categoryNumber, categoryName) {
        this
            .click(categoryLink)
            .assert.urlContains(categoryNumber)
            .expect.element('@filterTag').text.to.contain(categoryName).before(7000)
            this.click('@logo')
            return this
    },
    searchFiltersCategory(category, categoryNumber) {
        this
        .click('@browse')
        .expect.element('@filterDropDownBtn').to.be.present.before(7000)
        this.click('@filterDropDownBtn')
        .expect.element('@toolsFilter').to.be.present.before(7000)
        this.click(category)
        .click('@applyFiltersBtn')
        .assert.urlContains(categoryNumber)
        .click('@filterDropDownBtn')
        .click('@clearFiltersBtn')
    },
    searchFiltersPrice(minDollarAmount, maxDollarAmount) {
        this
        .click('@browse')
        .expect.element('@filterDropDownBtn').to.be.present.before(7000)
        this.click('@filterDropDownBtn')
        .expect.element('@minPriceFilter').to.be.present.before(7000)
        this.setValue('@minPriceFilter', minDollarAmount)
        .setValue('@maxPriceFilter', maxDollarAmount)
        .click('@applyFiltersBtn')
        .assert.urlContains(minDollarAmount, maxDollarAmount)
        .click('@filterDropDownBtn')
        .click('@clearFiltersBtn')
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
        browse: 'div.navbar-collapse.collapse > div > div > ul > li:nth-child(2) > a',
        categorySection: '[class="sc-bwzfXH ldxwrS sc-bdVaJa iHZvIS"]',


        //Tools category
        seeAllTools: {
            selector: '(//a[@href="/s?category=86"])[1]',
            locateStrategy: 'xpath'
          },
          nextToolBtn: {
              selector: '(//div[@class="nextArrow sc-kPVwWT bUUAdh"])[0]',
              locateStrategy: 'xpath'
          },
          previousToolBtn: {
            selector: '(//div[@class="nextArrow sc-kPVwWT bOZYnu"])[0]',
            locateStrategy: 'xpath'
          },
          toolCard: 'div[id="item-card-561"]',
          detailsContainer: 'div#details-container',
          description: {
              selector:'//*[@id="details-container"]/div[1]/div[1]/div[1]/div/div[3]/div[2]/div[1]',
              locateStrategy: 'xpath'
          },
          browseCategories: {
              selector: '//*[text()="Browse Categories"]',
              locateStrategy: 'xpath'
          },
          categoryTag: 'div[class="sc-iSDuPN haMjsI"]',
          startDate: 'input[name="It is Start date id"]',
          endDate: 'input[name= "It is End date id"]',
          calender: 'div[aria-label="Calendar"]',
          requestButton: {
              selector: '//*[text()="Request"]',
              locateStrategy: 'xpath',
          },
          emailInputBox: 'input[name="email"]',
          passwordInputBox: 'input[name="password"]',
          accountLogin: 'button[type="submit"]',
          nextButton: {
            selector: '//*[text()="Next"]',
            locateStrategy: 'xpath',
          },
          aboutYourRental: {
              selector: '//*[text()="About your rental"]',
              locateStrategy: 'xpath',
          },
          rentalMessageInputBox: 'textarea[name="message"]',
          ccNameInput: 'input[name="name"]',
          ccCardNumberInput: 'input[name="cardNumber"]',
          ccCVVInput: 'input[name="cvv"]',
          ccExpiryInput: 'select[name="expiryDate"]',
          ccYearInput: 'select[name="expiryYear"]',
          payNowButton: {
            selector: '//*[text()="Pay now"]',
            locateStrategy: 'xpath',
          },
          reservationCode: {
              selector: '//*[text()="Reservation code:"]',
              locateStrategy: 'xpath',
            },
          viewReceipt: {
                selector: '//*[text()="View Receipt"]',
                locateStrategy: 'xpath',
            },
          viewListing: {
            selector: '//*[text()="View Listing"]',
            locateStrategy: 'xpath',
            },
          messageOwner: {
              selector: '//*[text()="Message Owner"]',
               locateStrategy: 'xpath',
            },

  }
}