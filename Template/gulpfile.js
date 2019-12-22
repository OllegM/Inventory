var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});
// Static Server + watching scss/html files
gulp.task('serve', gulp.series(['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("css/*.scss", gulp.series(['sass']));
    gulp.watch("*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series(['serve']));