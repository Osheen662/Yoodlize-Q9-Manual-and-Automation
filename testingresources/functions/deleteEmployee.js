let httpDelete = require('./httpDelete')
let containsValue = require('../functions/containsValue')

const baseUrl = require('./data/base')
module.exports = (browser, id) => {
    let employees = []
        browser
            .perform(done => {
                httpDelete(baseUrl, id, response => {
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
                browser.assert.ok(!containsValue(employees, id), `Employee ${id} was deleted.`)
            })
}
