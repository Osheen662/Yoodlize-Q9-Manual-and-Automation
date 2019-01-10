var yoodlizeCommands = {

   }
  
  
  module.exports = {
      url: 'https://alpha.yoodlize.com/',
      commands: [yoodlizeCommands],
      elements: {
          logo: '[src="/images/logo/blueRaw.png"]',
          searchBar: '[placeholder="Search for an item"]',
          searchBtn: '[class="sc-esjQYD iIXhUv sc-ifAKCX kvYMhQ"]',
          browse: '[actionbuttonlarge="true"]',
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