var gulp = require('gulp')
var gutil = require('gulp-util')
var plumber = require('gulp-plumber')
var watch = require('gulp-watch')
var sass = require('gulp-sass')
var ts = require('gulp-typescript')
var clean = require('gulp-clean')
// TODO: var webpack = require('webpack-stream')

let _sass = () => {
    gulp.src('src/css/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('static/css'))
        .on('end', () => gutil.log('_sass: done.'))
}

let tsproj = ts.createProject('tsconfig.json')
let _tsc = () => {
    tsproj.src()
        .pipe(plumber())
        .pipe(tsproj())
        .pipe(gulp.dest('static/js'))
        .on('end', () => gutil.log('_ts: done.'))
}

gulp.task('build:sass', _sass)
gulp.task('build:ts', _tsc)
gulp.task('clean:sass', () => gulp.src('static/css/**/*').pipe(clean()))
gulp.task('clean:ts', () => gulp.src('static/js/**/*').pipe(clean()))

// TODO: webpack bundling, minifying

gulp.task('watch-sass', () => {
    return watch('src/css/**/*.scss', () => _sass())
})

gulp.task('watch-tsc', () => {
    return watch('src/ts/**/*.ts', () => _tsc())
})

gulp.task('watch', ['watch-sass', 'watch-tsc'])

gulp.task('clean', ['clean:sass', 'clean:ts'])
gulp.task('build', ['build:sass', 'build:ts'])
gulp.task('default', ['clean', 'build'])