if (typeof(localStorage) === 'undefined') { var localStorage = require('localStorage') }

module.exports = fs = {}

fs.exists = function(path, callback) {
  callback(localStorage.getItem(path) !== null)
}

function Readable (path) {
  this.path = path
}
Readable.prototype.on = function() {}

function Writeable (path) {
  this.path = path
}
Writeable.prototype.on = function() {}

fs.createReadStream = function(path /* no options */ ) {
  return new Readable(path)
}

fs.createWriteStream = function(path /* no options */ ) {
  return new Writeable(path)
}
