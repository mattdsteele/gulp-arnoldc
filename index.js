'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var gutil = require('gulp-util');
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
      var mapping = transpile(file.contents.toString(), file.basename);
      var output = mapping.toStringWithSourceMap({ fileName: file.basename + '.map' });
			file.contents = new Buffer(output.code);
      file.path = gutil.replaceExtension(file.path, '.arnoldc.js');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-arnoldc', err));
		}

		cb();
	});
};
