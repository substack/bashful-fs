var test = require('tap').test;
var localStorage = require('localStorage')

var fs = require('../')

test('/dev/null', function (t) {
  t.test('read', function(t) {
    localStorage.removeItem('/dev/null')
    var readable = fs.createReadStream('/dev/null')
    t.equal(readable.read(), '')
    t.end()
  })
  t.test('write', function(t) {
    localStorage.removeItem('/dev/null')
    var writeable = fs.createWriteStream('/dev/null')
    writeable.write('saoehtsaoestnuhasotnehusantoehuatnoeuha', function(){
      t.equal(localStorage.getItem('/dev/null'), null)
      t.end()
    })
  })
})

test('/dev/urandom', function (t) {
  t.test('read', function(t) {
    localStorage.removeItem('/dev/urandom')
    var readable = fs.createReadStream('/dev/urandom')
    t.equal(readable.read(24).length, 24)
    t.end()
  })
  t.test('write', function(t) {
    localStorage.removeItem('/dev/urandom')
    var writeable = fs.createWriteStream('/dev/urandom')
    writeable.write('saoehtsaoestnuhasotnehusantoehuatnoeuha', function(){
      t.equal(localStorage.getItem('/dev/urandom'), null)
      t.end()
    })
  })
})

test('/dev/zero', function (t) {
  t.test('read', function(t) {
    localStorage.removeItem('/dev/zero')
    var zero = String.fromCharCode(0)
    var readable = fs.createReadStream('/dev/zero')
    t.equal(readable.read(3), zero + zero + zero)
    t.end()
  })
  t.test('write', function(t) {
    localStorage.removeItem('/dev/zero')
    var writeable = fs.createWriteStream('/dev/zero')
    writeable.write('saoehtsaoestnuhasotnehusantoehuatnoeuha', function(){
      t.equal(localStorage.getItem('/dev/zero'), null)
      t.end()
    })
  })
})

