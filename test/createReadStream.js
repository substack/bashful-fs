var test = require('tap').test;
var localStorage = require('localStorage')

var fs = require('../')

/*
test('Event "readable"', {skip:true}, function (t) {
  t.plan(1)
  localStorage.setItem('/quoin', 'abc')
  var readable = fs.createReadStream('/quoin')
  readable.on('readable', function() {
    // This doesn't need to do anything, but it should not error.
    t.ok(true)
  })
})

test('Event "data"', {skip:true}, function (t) {
  t.plan(1)
  localStorage.setItem('/wildebeest', '0123456789')
  var readable = fs.createReadStream('/wildebeest')
  readable.on('data', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})

test('Event "end"', {skip:true}, function (t) {
  t.plan(1)
  localStorage.setItem('/hamster', '0123456789')
  var readable = fs.createReadStream('/hamster')
  readable.on('end', function(chunk) {
    t.equal(chunk, '0123456789')
  })
})
*/

test('readable.read', function(t) {
  localStorage.setItem('/a', 'bc')
  var readable = fs.createReadStream('/a')
  t.check(readable.read(), 'bc')
  t.end()
})

test('Dummy functions', function(t) {
  localStorage.setItem('/definitely', '0123456789')
  var readable = fs.createReadStream('/definitely')
  t.check(typeof(readable.setEncoding), 'function')
  t.check(typeof(readable.resume), 'function')
  t.check(typeof(readable.pause), 'function')
  t.end()
})

test('readable.pipe', {skip:true}, function(t) {
  localStorage.setItem('/b', 'b')
  var readable = fs.createReadStream('/b')
  t.end()
})

test('readable.unpipe', {skip:true}, function(t) {
  localStorage.setItem('/b', 'b')
  var readable = fs.createReadStream('/b')
  t.end()
})

test('readable.unshift', {skip:true}, function(t) {
  localStorage.setItem('/b', 'b')
  var readable = fs.createReadStream('/b')
  t.end()
})

test('readable.wrap', {skip:true}, function(t) {
  localStorage.setItem('/b', 'b')
  var readable = fs.createReadStream('/b')
  t.end()
})
