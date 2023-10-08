Feature('search site');

Scenario('test search functionality', async ({ I }) => {
  I.amOnPage("/")
  I.click({ xpath: "//button//span[text()='Accept all cookies']" })
  I.seeInTitle("Bupa.com")
  I.click({ xpath: "//nav[contains(@class,'nav')]//..//a[@class='searchButton']" })
  I.fillField({ css: "input[id=searchTextbox]" }, "Bupa")
  I.click({ css: "input[id=searchButton]" })
  I.waitForEnabled({ css: "div[id=result-summary]" }, 40)
  const allText = await I.grabTextFromAll({ css: "div[id=result-summary]" })
  console.log(`grabbed text from search results: ${allText}`)
  I.see("Bupa", { css: "div[id=result-summary]" })
  const element = locate({ css: "span[class=resultURL]" })
  I.click(element.first())
})
