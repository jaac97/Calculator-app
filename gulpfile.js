const {watch, dest, src, series} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer')
function buildStyles() {
    return gulp.src('./build/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        cascade: false
        }))
      .pipe(gulp.dest('./css'));
};

function detectChanged () {
    watch('./build/sass/**/*.scss', buildStyles);

    return 
}
exports.buildStyles = buildStyles;
exports.default = series(buildStyles,detectChanged);

