var test = require('tap').test;

test('A normal file should exist when it is in localStorage', function (t) {
});

test('A normal file should not exist when it is null in localStorage', function (t) {
});

fs.exists('/etc/passwd', function (exists) {
  util.debug(exists ? "it's there" : "no passwd!");
});
