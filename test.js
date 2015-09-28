'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var arnoldc = require('./');
var expect = require('chai').expect;

let data;
beforeEach(done => {
  var stream = arnoldc();

  stream.on('data', file => { data = file });
  stream.on('end', done);

  stream.write(new gutil.File({
    base: __dirname,
    path: __dirname + '/file.arnoldc',
    contents: new Buffer(`
      IT'S SHOWTIME
      TALK TO THE HAND "Hello World!!!"
      YOU HAVE BEEN TERMINATED`
    )
  }));

  stream.end();

});
it('should parse arnoldc properly', function() {
  expect(data.contents.toString()).to.contain('Hello World!!!');
});

it('renames to .js', () => {
  expect(data.extname).to.equal('.js');
});
