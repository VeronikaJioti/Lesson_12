'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

// function buildStyles() {
//   return gulp.src('scss/style.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('css'));
// };

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('scss/style.scss', ['sass']);
// };

gulp.task('sass', function() {
    return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError)) 
    .pipe(gulp.dest('css'));  
});

gulp.task('watch', function () {
    gulp.watch('scss/style.scss', gulp.parallel('sass'));
  });

