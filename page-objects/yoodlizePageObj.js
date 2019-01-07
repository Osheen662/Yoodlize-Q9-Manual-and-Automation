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
        
        
      }

  }