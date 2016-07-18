var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss','./www/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass',function() {
  gulp.src('./scss/basic.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(gulp.dest('./css/'))
  .pipe(minifyCss({
    keepSpecialComments: 0
  }))
  .pipe(rename({ extname: '.min.css' }))
  .pipe(gulp.dest('./css/'))
  
});

gulp.task('watch', ['watch-sass']);

gulp.task('watch-sass',function() {
  gulp.watch(paths.sass, ['sass']);
})
