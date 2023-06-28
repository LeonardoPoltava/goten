const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Compile SCSS to CSS
gulp.task('sass', function () {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate and minify JavaScript files
gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch files for changes
gulp.task('watch', function () {
    gulp.watch('css/*.scss', gulp.series('sass'));
    gulp.watch('js/*.js', gulp.series('scripts'));
    // gulp.watch('src/images/*', gulp.series('images'));
});

// Default task
gulp.task('default', gulp.parallel('sass', 'scripts', 'watch'));
