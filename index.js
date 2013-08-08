if (typeof(localStorage) === 'undefined') { var localStorage = require('localStorage') }

module.exports = fs = {}

fs.exists = function(path, callback) {
  callback(localStorage.getItem(path) !== null)
}

fs.createReadStream = function(path /* no options */ ) {
}

fs.createWriteStream = function(path /* no options */ ) {
}
