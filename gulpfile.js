const gulp = require('gulp');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');

const paths = {
  javaScriptSource: ['./js/app.js', './js/**/*.js'],
  stylesSource: './styles/**/*.scss',
  server: './server.js'
};

gulp.task('serve', () => {
  nodemon({
    'script': paths.server
  });
});

gulp.task('scripts', () => {
  gulp.src(paths.javaScriptSource)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('styles', () => {
  gulp.src(paths.stylesSource)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', () => {
  gulp.watch(paths.javaScriptSource, ['scripts']);
  gulp.watch(paths.stylesSource, ['styles']);
});

gulp.task('default', ['watch', 'serve', 'scripts', 'styles']);
