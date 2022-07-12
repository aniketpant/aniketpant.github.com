const gulp = require('gulp');
const batch = require('gulp-batch');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const prettier = require('gulp-prettier');
const sass = require('gulp-sass')(require('sass'));

const paths = {
  scripts: ['js/src/zepto.min.js', 'js/src/moment.min.js', 'js/src/wubwub.js'],
  stylesheets: ['scss/style.scss', 'scss/custom.scss'],
};

gulp.task('scripts', () => {
  return gulp
    .src(paths.scripts)
    .pipe(prettier())
    .pipe(uglify())
    .pipe(concat('zeamus.js'))
    .pipe(gulp.dest('js/dist'));
});

gulp.task('sass', () => {
  return gulp
    .src(paths.stylesheets)
    .pipe(
      sass({
        outputStyle: 'compressed',
        precision: 9,
        sourceComments: false,
      })
    )
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
  watch(
    'js/src/*.js',
    batch(function (events, done) {
      gulp.start('scripts', done);
    })
  );
  watch(
    'scss/**/*.scss',
    batch(function (events, done) {
      gulp.start('sass', done);
    })
  );
});

gulp.task('default', gulp.series(['scripts', 'sass']));
