if (typeof(localStorage) === 'undefined') { var localStorage = require('localStorage') }

function Bfs(opts) {
  if (!opts) opts = {};
  if (!opts.localStorage) opts.localStorage = localStorage;

  this.localStorage = opts.localStorage
}

Bfs.prototype.exists = function(path, callback) {
  callback(this.localStorage.getItem(path) !== null)
}

module.exports = Bfs
