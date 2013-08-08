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

