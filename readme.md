# gulp-arnoldc [![Build Status](https://travis-ci.org/mattdsteele/gulp-arnoldc.svg?branch=master)](https://travis-ci.org/mattdsteele/gulp-arnoldc)

> My gnarly gulp plugin


## Install

```
$ npm install --save-dev gulp-arnoldc
```


## Usage

```js
var gulp = require('gulp');
var arnoldc = require('gulp-arnoldc');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(arnoldc())
		.pipe(gulp.dest('dist'));
});
```


## API

### arnoldc(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Matt Steele](http://steele.blue)
