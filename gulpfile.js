var gulp = require('gulp'),
	shell = require('gulp-shell'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber');


// Jade Templates
gulp.task('jade', function() {

	// Angular Templates
  return gulp.src('./src/ng/templates/**/**/*.jade')
  	.pipe(watch('./src/ng/templates/**/**/*.jade'))
  	.pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./ng/templates/'));

});


// Stylus Rendering
gulp.task('stylus', function(){

	return gulp.src('./src/styl/*.styl')
		.pipe(watch('./src/styl/*.styl'))
	  	.pipe(plumber())
	    .pipe(stylus())
	    .pipe(gulp.dest('./ng/css/'));
});


// Default
gulp.task('default', ['jade', 'stylus']);




