var gulp = require('gulp')
var gutil = require('gulp-util')
var plumber = require('gulp-plumber')
var watch = require('gulp-watch')
var sass = require('gulp-sass')
var ts = require('gulp-typescript')
var clean = require('gulp-clean')
var webpack = require('webpack')
var webpack_config = require('./webpack.config.js')
var webpack_stream = require('webpack-stream')


let _sass = () => 
    gulp.src('src/css/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('static/css'))
        .on('end', () => gutil.log('_sass: done'))

let _webpack = () => 
    gulp.src('src/ts/init.ts')
        .pipe(plumber())
        .pipe(webpack_stream(webpack_config, webpack))
        .pipe(gulp.dest('static/js'))
        .on('end', () => gutil.log('_webpack: done'))

gulp.task('build:sass', _sass)
gulp.task('clean:sass', () => gulp.src('static/css/**/*').pipe(clean()))
gulp.task('watch:sass', () => watch('src/css/**/*.scss', () => _sass()))

gulp.task('build:webpack', _webpack)
gulp.task('clean:ts', () => gulp.src('static/js/**/*').pipe(clean()))
gulp.task('watch:webpack', () => watch('src/ts/**/*.ts', () => _webpack()))

gulp.task('watch', ['watch:sass', 'watch:webpack'])
gulp.task('clean', ['clean:sass', 'clean:ts'])
gulp.task('build', ['build:sass', 'build:webpack'])
gulp.task('default', ['clean', 'build'])