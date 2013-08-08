var test = require('tap').test;
var localStorage = require('localStorage')

var fs = require('../')

test('Event "readable"', function (t) {
  t.plan(1)
  var readable = fs.readFileStream('/wildebeest')
  readable.on('readable', function() {
    // This doesn't need to do anything, but it should not error.
    t.ok(true)
  })
})

test('Event "data"', function (t) {
  t.plan(1)
  localStorage.setItem('/wildebeest', '0123456789')
  var readable = fs.readFileStream('/wildebeest')
  readable.on('data', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})

test('Event "end"', function (t) {
  t.plan(1)
  localStorage.setItem('/wildebeest', '0123456789')
  var readable = fs.readFileStream('/wildebeest')
  readable.on('end', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})
