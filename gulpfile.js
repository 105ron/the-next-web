var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  gulp.src('styles.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('stylesheets'))
  .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
    browser: ["google chrome", "firefox"]
  })
})

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('styles.css', ['styles']);
})
