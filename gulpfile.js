var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('babel', function() {
  gulp.src('js/*.es6')
    .pipe(babel())
    .pipe(gulp.dest('js/'))
});

gulp.task('watch', function() {
  gulp.watch('js/*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch']);