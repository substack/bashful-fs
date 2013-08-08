if (typeof(localStorage) === 'undefined') { var localStorage = require('localStorage') }

function Readable (path) {
  this.path = path
}
Readable.prototype.on = function() {}
Readable.prototype.read = function() {
  return localStorage.getItem(this.path)
}
Readable.prototype.setEncoding = Readable.prototype.resume = Readable.prototype.pause = function () {}

function Writeable (path) {
  this.path = path
}
Writeable.prototype.on = function() {}
Writeable.prototype.write = Writeable.prototype.end = function(chunk, callback) {
  // A race condition. Oh well.
  var old = localStorage.getItem(this.path)
  if (old === null) { old = '' }
  localStorage.setItem(this.path, old + chunk)
  callback()
}




module.exports = fs = {}

fs.exists = function(path, callback) {
  callback(localStorage.getItem(path) !== null)
}

fs.createReadStream = function(path /* no options */ ) {
  return new Readable(path)
}

fs.createWriteStream = function(path /* no options */ ) {
  return new Writeable(path)
}
