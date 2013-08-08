var test = require('tap').test;
var localStorage = require('localStorage')

var fs = require('../')

/*
test('Event "drain"', {skip:true}, function (t) {
  t.plan(1)
  localStorage.setItem('/quoin', 'abc')
  var writeable = fs.createWriteStream('/quoin')
  writeable.on('drain', function() {
    // This doesn't need to do anything, but it should not error.
    t.ok(true)
  })
})

test('Event "finish"', {skip:true}, function (t) {
  t.plan(1)
  localStorage.setItem('/wildebeest', '0123456789')
  var writeable = fs.createWriteStream('/wildebeest')
  writeable.on('finish', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})

test('Event "unpipe"', {skip:true}, function (t) {
  t.plan(1)
  localStorage.setItem('/hamster', '0123456789')
  var writeable = fs.createWriteStream('/hamster')
  writeable.on('unpipe', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})

test('Event "pipe"', {skip:true}, function (t) {
  t.plan(1)
  localStorage.setItem('/hamster', '0123456789')
  var writeable = fs.createWriteStream('/hamster')
  writeable.on('pipe', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})
*/

test('writeable.write', function (t) {
  t.plan(1)
  var writeable = fs.createWriteStream('/hamster')
  writeable.write('abcdefg', function() {
    t.check(localStorage.getItem('/hamster'), 'abcdefg')
  })
})
test('writeable.write', function (t) {
  t.plan(1)
  var writeable = fs.createWriteStream('/piano')
  writeable.write('abcdefg', function() {
    t.check(localStorage.getItem('/piano'), 'abcdefg')
  })
})
