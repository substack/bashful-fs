var test = require('tap').test;

var is_path = require('../_is_path.js')

test('Paths must begin with "/"', function (t) {
  t.notOk(is_path('not-a-path'))
  t.end()
})

test('Other paths are fine', function (t) {
  t.ok(is_path('/yes-a-path'))
  t.end()
})
