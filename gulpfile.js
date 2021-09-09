let gulp        = require('gulp');
let deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
let options = {
    force: true
}

gulp.task('deploy', function () {
    return gulp.src("./dist/**/*")
        .pipe(deploy(options))
});