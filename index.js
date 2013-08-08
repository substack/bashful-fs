if (typeof(localStorage) === 'undefined') { var localStorage = require('localStorage') }

function Readable (path) {
  this.path = path
}
Readable.prototype.on = function() {}
Readable.prototype.read = function() {
  return localStorage.getItem(this.path)
}
Readable.prototype.setEncoding = Readable.prototype.resume = Readable.prototype.pause = function () {}
Readable.prototype.pipe = function(writeable) {
  writeable.end(this.read())
}

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

function PseudoWriteable () {}
PseudoWriteable.prototype.on = PseudoWriteable.prototype.write = PseudoWriteable.prototype.end = function() {}

function PseudoReadable () {}
PseudoReadable.prototype.on = PseudoReadable.prototype.read = PseudoReadable.prototype.end = function() {}

function DevZero () {}
DevZero.prototype.on = DevZero.prototype.end = function() {}
DevZero.prototype.read = function (size) {
  var out = ''
  for (var i = 0; i < size; i ++) {
    out += String.fromCharCode(0)
  }
  return out
}

function DevUrandom () {}
DevUrandom.prototype.on = DevUrandom.prototype.read = DevUrandom.prototype.end = function() {}
DevUrandom.prototype.read = function (size) {
  var out = ''
  for (var i = 0; i < size; i ++) {
    out += String.fromCharCode(Math.round(Math.random() * (Math.pow(2,16)-1)))
  }
  return out
}


module.exports = fs = {}

fs.exists = function(path, callback) {
  callback(localStorage.getItem(path) !== null)
}

fs.createReadStream = function(path /* no options */ ) {
  if (path === '/dev/null') {
    return new PseudoReadable()
  } else if (path === '/dev/urandom') {
    return new DevUrandom()
  } else if (path === '/dev/zero') {
    return new DevZero()
  } else {
    return new Readable(path)
  }
}

fs.createWriteStream = function(path /* no options */ ) {
  if (path === '/dev/null' || path === '/dev/urandom' || path === '/dev/zero') {
    return new PseudoWriteable()
  } else {
    return new Writeable(path)
  }
}
