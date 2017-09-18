var gulp = require('gulp');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');

var paths = {
  sass: ['**/*.sass', '**/*.scss', '!node_modules/**'],
  jade: ['**/*.jade', '!node_modules/**']
}

gulp.task('default', ['sass', 'jade']);

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'));
});

gulp.task('jade', function() {
  return gulp.src(paths.jade)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jade, ['jade']);
});
