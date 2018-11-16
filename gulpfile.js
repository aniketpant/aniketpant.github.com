var gulp = require('gulp');
var sass = require('gulp-sass');
var batch = require('gulp-batch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var prettier = require('gulp-prettier');

var paths = {
  scripts: ['js/src/zepto.min.js', 'js/src/moment.min.js', 'js/src/wubwub.js'],
  stylesheets: ['scss/style.scss', 'scss/custom.scss']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(prettier())
    .pipe(uglify())
    .pipe(concat('zeamus.js'))
    .pipe(gulp.dest('js/dist'));
});

gulp.task('sass', function() {
  return gulp.src(paths.stylesheets)
    .pipe(sass({
      "outputStyle": "compressed",
      "precision": 9,
      "sourceComments": false
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  watch('js/src/*.js', batch(function(events, done) {
    gulp.start('scripts', done);
  }));
  watch('scss/**/*.scss', batch(function(events, done) {
    gulp.start('sass', done);
  }))
});

gulp.task('default', ['scripts', 'sass']);
