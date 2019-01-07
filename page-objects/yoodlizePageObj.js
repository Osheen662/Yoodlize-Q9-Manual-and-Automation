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

          //tools category
          seeAllTools: {
            selector: '(//a[@href="/s?category=86"])[1]',
            locateStrategy: 'xpath'
          },
          nextToolBtn: 'div:nth-child(1) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousToolBtn: 'div:nth-child(1) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          toolCardPickaxe: 'div[id="item-card-561"]',
          
          //toys category
          seeAllToys: {
            selector: '(//a[@href="/s?category=87"])[1]',
            locateStrategy: 'xpath'
          },
          nextToysBtn: 'div:nth-child(1) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousToysBtn: 'div:nth-child(1) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          toysCardZorb: 'div[id="item-card-47"]',

          //Sporting Goods category
          seeAllSports: {
            selector: '(//a[@href="/s?category=76"])[1]',
            locateStrategy: 'xpath'
          },
          nextSportsBtn: 'div:nth-child(1) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousSportsBtn: 'div:nth-child(1) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          sportsCardWiiU: 'div[id="item-card-615"]',

          //Business Equipment category
          seeAllBusiness: {
            selector: '(//a[@href="/s?category=89"])[1]',
            locateStrategy: 'xpath'
          },
          nextBusinessBtn: 'div:nth-child(5) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousBusinessBtn: 'div:nth-child(5) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          businessCardBooth: 'div[id="item-card-97"]',

          //Electronics category
          seeAllElectronics: {
            selector: '(//a[@href="/s?category=85"])[1]',
            locateStrategy: 'xpath'
          },
          nextElectronicsBtn: 'div:nth-child(5) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousElectronicsBtn: 'div:nth-child(5) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          electronicsCardMacbookPro: 'div[id="item-card-39"]',

          //Home, Lawn & Garden
          seeAllHome: {
              selector: '(//a[@href="/s?category=77"])[1]',
              locateStrategy: 'xpath'
          },
          nextHomeBtn: 'div:nth-child(5) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousHomeBtn: 'div:nth-child(5) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          homeCardPoster: 'div[id="item-card-696"]',

          //Fashion
          seeAllFashion: {
              selector: '(//a[@href="/s?category=74"])[1]',
              locateStrategy: 'xpath'
          },
          nextFashionBtn: 'div:nth-child(9) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousFashionBtn: 'div:nth-child(9) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          fashionCardDress: 'div[id="item-card-594"]',

          //Outdoor Gear
          seeAllGear: {
            selector: '(//a[@href="/s?category=84"])[1]',
            locateStrategy: 'xpath'
        },
          nextGearBtn: 'div:nth-child(9) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousGearBtn: 'div:nth-child(9) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          gearCardHammock: 'div[id="item-card-82"]',

          //Navigators
          seeAllNavigators: {
            selector: '(//a[@href="/s?category=90"])[1]',
            locateStrategy: 'xpath'
        },
          nextNavigatorsBtn: 'div:nth-child(9) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousNavigatorsBtn: 'div:nth-child(9) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          navigatorsCardSewing: 'div[id="item-card-102"]',

          //Party
          seeAllParty: {
            selector: '(//a[@href="/s?category=88"])[1]',
            locateStrategy: 'xpath'
        },
          nextPartyBtn: 'div:nth-child(13) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousPartyBtn: 'div:nth-child(13) > div:nth-child(2) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          partyCardMonkey: 'div[id="item-card-656"]',

          //Venues
          seeAllVenues: {
            selector: '(//a[@href="/s?category=92"])[1]',
            locateStrategy: 'xpath'
        },
          nextVenuesBtn: 'div:nth-child(13) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousVenuesBtn: 'div:nth-child(13) > div:nth-child(5) > div > div.nextArrow.sc-kPVwWT.bOZYnu',
          venuesCardHouse: 'div[id="item-card-107"]',
          
          //Recreational Vehicles
          seeAllVehicles: {
            selector: '(//a[@href="/s?category=91"])[1]',
            locateStrategy: 'xpath'
        },
          nextVehiclesBtn: 'div:nth-child(13) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bUUAdh',
          previousVehiclesBtn: 'div:nth-child(13) > div:nth-child(8) > div > div.nextArrow.sc-kPVwWT.bOZYnu'),
          vehiclesCardBike: 'div[id="item-card-105"]',
      }

  }