const gulp = require('gulp');
const batch = require('gulp-batch');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const prettier = require('gulp-prettier');

const paths = {
  scripts: ['src/zepto.min.js', 'src/moment.min.js', 'src/wubwub.js'],
  stylesheets: ['src/input.css'],
};

gulp.task('scripts', () => {
  return gulp
    .src(paths.scripts)
    .pipe(prettier())
    .pipe(uglify())
    .pipe(concat('zeamus.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', () => {
  watch(
    'src/*.js',
    batch(function (events, done) {
      gulp.start('scripts', done);
    })
  );
});

gulp.task('default', gulp.series(['scripts']));
