var gulp = require('gulp'),
	shell = require('gulp-shell'),
	jade = require('gulp-jade');


// Jade Templates
gulp.task('templates', function() {

	// Angular Templates
  gulp.src('./src/ng/templates/**/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./ng/templates/'));


});