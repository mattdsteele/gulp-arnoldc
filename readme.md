# gulp-arnoldc [![Build Status](https://travis-ci.org/mattdsteele/gulp-arnoldc.svg?branch=master)](https://travis-ci.org/mattdsteele/gulp-arnoldc)

> ArnoldC Gulp Plugin


## Install

```
$ npm i -D gulp-arnoldc
```


## Usage

```js
var gulp = require('gulp');
var arnoldc = require('gulp-arnoldc');

gulp.task('default', function () {
	return gulp.src('src/file.arnoldc')
		.pipe(arnoldc())
		.pipe(gulp.dest('dist'));
});
```


## API

### arnoldc()

## License

MIT © [Matt Steele](http://steele.blue)
