const httpGet = require('./httpGet')
const baseUrl = require('./data/base')

module.exports = (browser, callback) => {
    let employees = []
    browser
        .perform(done => {
            httpGet(baseUrl, response => {
                if (response) {
                    employees = response
                    done()
                }
                else
                    browser.assert.ok(false, 'API GET query failed')
                done()
            })
        })
        .perform(() => {
            if (callback)
                callback(employees)
            return employees
        })
}