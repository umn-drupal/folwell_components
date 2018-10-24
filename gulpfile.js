const gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  glob = require('gulp-sass-glob'),
  watch = require('gulp-watch'),
  shell = require('gulp-shell'),
  notify = require('gulp-notify'),
  browserSync = require('browser-sync').create(),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  runSequence = require('run-sequence'),
  replace = require('gulp-replace'),
  bourbon = require('bourbon').includePaths,
  autoprefixer = require('gulp-autoprefixer');

/**
 * This task generates CSS from all SCSS files and compresses them down.
 */
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(glob())
  .pipe(sass({
    noCache: true,
    outputStyle: "compact",
    lineNumbers: false,
    includePaths: [
        bourbon,
        './node_modules/breakpoint-sass/stylesheets'
    ],
    sourceMap: true
  })).on('error', function (error) {
    gutil.log(error);
    this.emit('end');
  })
  .pipe(autoprefixer())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./assets/css'))
  .pipe(notify({
    title: "SASS Compiled",
    message: "All SASS files have been recompiled to CSS.",
    onLast: true
  }));
});

/**
 * This task minifies javascript in the js/js-src folder and places them in the js directory.
 */
gulp.task('compress', function () {
  return gulp.src('./js/js-src/*.js')
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('./js'))
  .pipe(notify({
    title: "JS Minified",
    message: "All JS files in the theme have been minified.",
    onLast: true
  }));
});

/**
 * Defines the watcher task.
 */
gulp.task('watch', function () {
  // watch scss for changes and clear drupal theme cache on change
  gulp.watch(['scss/**/*.scss'], ['sass']);

  // watch js for changes and clear drupal theme cache on change
  gulp.watch(['js/js-src/**/*.js'], ['compress']);
});


gulp.task('default', ['watch', 'browser-sync']);
