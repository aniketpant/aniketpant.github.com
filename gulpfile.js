var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

var paths = {
    scripts: ['js/zepto.min.js', 'js/moment.min.js', 'js/wubwub.js'],
    stylesheets: ['scss/style.scss', 'scss/custom.scss']
};

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('zeamus.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('sass', function () {
  return gulp.src(paths.stylesheets)
    .pipe(sass({ "outputStyle": "compressed", "precision": 9, "sourceComments": false }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  return watch(paths.scripts, ['scripts'])
    .pipe(watch(paths.stylesheets, ['sass']));
});

gulp.task('default', ['scripts', 'sass']);
