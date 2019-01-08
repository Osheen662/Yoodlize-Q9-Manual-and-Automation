var XMLHttpRequest = require('xhr2');

module.exports = (site, id, callback) => {
    let request = new XMLHttpRequest()
    request.open('DELETE', `${site}/${id}`, true)
    request.onload = function () {
        if (request.status == 200) {
            var data = JSON.parse(this.response)
            callback(data)
        }
        else {
            console.log('error ' + request.status)
            callback()
        }
    }
    request.send()
}