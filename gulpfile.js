const gulp = require('gulp');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');

const paths = {
  jsSource: ['./js/app.js', './js/**/*.js'],
  scssSource: './styles/**/*.scss',
  server: './server.js'
};

gulp.task('serve', () => {
  nodemon({
    'script': paths.server
  });
});

gulp.task('js-bundle', () => {
  gulp.src(paths.jsSource)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('styles', () => {
  gulp.src(paths.scssSource)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', () => {
  gulp.watch(paths.jsSource, ['js-bundle']);
  gulp.watch(paths.scssSource, ['styles']);
});

gulp.task('default', ['watch', 'serve', 'js-bundle', 'styles']);
