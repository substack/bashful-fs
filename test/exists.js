var test = require('tap').test;
var localStorage = require('localStorage')

var Bfs = require('../')
fs = new Bfs(localStorage)

test('A normal file should exist when it is an empty string in localStorage', function (t) {
  t.plan(1)
  localStorage.setItem('chainsaw', '')
  fs.exists('chainsaw', function(result){
    t.ok(result)
  })
})

test('A normal file should exist when it is in localStorage', function (t) {
  t.plan(1)
  localStorage.setItem('chainsaw', 'chickenkiller')  
  fs.exists('chainsaw', function(result){
    t.ok(result)
  })
})

test('A normal file should not exist when it is null in localStorage', function (t) {
  t.plan(1)
  fs.exists('chainsaw', function(result) {
    t.notOk(result)
  })
})
