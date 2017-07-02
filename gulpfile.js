var gulp = require('gulp')
var gutil = require('gulp-util')
var plumber = require('gulp-plumber')
var watch = require('gulp-watch')
var sass = require('gulp-sass')
var ts = require('gulp-typescript')

let _sass = () => {
    gulp.src('src/css/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('static/css'))
        .on('end', () => gutil.log('_sass: done.'))
}

let _tsc = () => {
    gulp.src('src/ts/**/*.ts')
        .pipe(plumber())
        .pipe(ts())
        .pipe(gulp.dest('static/js'))
        .on('end', () => gutil.log('_ts: done.'))
}

gulp.task('sass', _sass)
gulp.task('ts', _tsc)

gulp.task('watch-sass', () => {
    return watch('src/css/**/*.scss', () => _sass())
})

gulp.task('watch-tsc', () => {
    return watch('src/ts/**/*.ts', () => _tsc())
})

gulp.task('default', ['sass', 'ts'])