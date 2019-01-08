var XMLHttpRequest = require('xhr2');

module.exports = (site, uploadData, callback) => {
    let request = new XMLHttpRequest()
    request.open('POST', site, true)
    request.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify(uploadData)
    request.onload = function () {
        if (request.status == 200) {
            var response = JSON.parse(this.response)
            callback(response)
        }
        else{
            console.log('error ' + request.status)
            callback()
        }
    }
    request.send(data)
}