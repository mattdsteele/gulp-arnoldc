'use strict';
var through = require('through2');
var gutil = require('gulp-util');
var applySourceMap = require('vinyl-sourcemaps-apply');
var transpile = require('arnoldc.js/lib/Transpiler').transpile;

module.exports = function (options) {
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-arnoldc', 'Streaming not supported'));
      return;
    }

    try {
      var mapping = transpile(file.contents.toString(), file.relative);
      var output = mapping.toStringWithSourceMap({ file: file.relative + '.js' });
      file.contents = new Buffer(output.code);
      file.path = gutil.replaceExtension(file.path, '.js');

      if (file.sourceMap) {
        applySourceMap(file, output.map.toString());
      }

      this.push(file);

    } catch (err) {
      this.emit('error', new gutil.PluginError('gulp-arnoldc', err));
    }

    cb();
  });
};
