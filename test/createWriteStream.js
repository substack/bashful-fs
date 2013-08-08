var test = require('tap').test;
var localStorage = require('localStorage')

var fs = require('../')

test('Event "writeable"', function (t) {
  t.plan(1)
  localStorage.setItem('/quoin', 'abc')
  var writeable = fs.createWriteStream('/quoin')
  writeable.on('readable', function() {
    // This doesn't need to do anything, but it should not error.
    t.ok(true)
  })
})

test('Event "data"', function (t) {
  t.plan(1)
  localStorage.setItem('/wildebeest', '0123456789')
  var writeable = fs.createWriteStream('/wildebeest')
  writeable.on('data', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})

test('Event "end"', function (t) {
  t.plan(1)
  localStorage.setItem('/hamster', '0123456789')
  var writeable = fs.createWriteStream('/hamster')
  writeable.on('end', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})

test('Dummy functions', function(t) {
  t.end()
})
