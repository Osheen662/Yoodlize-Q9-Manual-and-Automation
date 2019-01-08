let httpPost = require('./httpPost')
let containsValue = require('../functions/containsValue')
const baseUrl = require('./data/base')

module.exports = (browser, uploadData) => {
    let employees = []
        browser
            .perform(done => {
                httpPost(baseUrl, uploadData, response => {
                    if (response) {
                        employees = response
                        done()
                    }
                    else
                        browser.assert.ok(false, 'API POST query failed')
                    done()
                })
            })
            .perform(() => {
                browser.assert.ok(containsValue(employees, uploadData.name), `${uploadData.name} posted successfully.`)
            })
}
