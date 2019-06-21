const gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  shell = require('gulp-shell'),
  notify = require('gulp-notify'),
  browserSync = require('browser-sync').create(),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify'),
  runSequence = require('run-sequence'),
  replace = require('gulp-replace'),
  autoprefixer = require('autoprefixer'),
  postcss = require('gulp-postcss');

/**
 * This task generates CSS from all SCSS files and compresses them down.
 */
gulp.task('sass', function () {
  var plugins = [autoprefixer()];
  return gulp.src('./assets/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    noCache: true,
    outputStyle: "compact",
    lineNumbers: false,
    includePaths: [
        './node_modules/breakpoint-sass/stylesheets'
    ],
    sourceMap: true
  })).on('error', function (error) {
    gutil.log(error);
    this.emit('end');
  })
  .pipe(postcss(plugins))
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
  gulp.watch(['assets/sass/**/*.scss'], gulp.series('sass'));

  // watch js for changes and clear drupal theme cache on change
  // gulp.watch(['js/js-src/**/*.js'], ['compress']);
});


gulp.task('default', gulp.series('watch'));
