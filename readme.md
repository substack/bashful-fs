bashful-fs
============
A filesystem for [bashful](https://github.com/substack/bashful),
implementing `fs.exists`, `fs.createReadStream` and `fs.createWriteStream`

## How to

```sh
npm install bashful-fs
```

```javascript
var bash = require('bashful');
var fs = require('bashful-fs')

var sh = bash({
    env: process.env,
    spawn: require('child_process').spawn,
    write: fs.createWriteStream,
    read: fs.createReadStream,
    exists: fs.exists
});
sh.on('close', process.exit);
```

## Ideas

* Use [riffwave](http://codebase.es/riffwave/) to make `/dev/audio`.
* `/dev/mouse`
* It would be nice to get it working; hilariously, it doesn't seem to work with bashful yet.
