var browserify = require('browserify'),
    babelify = require('babelify'),
    gulp = require('gulp'),
    vinylBuffer = require('vinyl-buffer'),
    vinylSourceStream = require('vinyl-source-stream'),
    exorcist = require('exorcist');

module.exports = function () {

    var sources = browserify({
        entries: [
            './src/app/app',
        ],
        debug: true
    })
        .transform(babelify, {
            presets: ["es2015", "react"],
            sourceMaps: false
        });

    return sources.bundle()
        .pipe(exorcist('www/build/js/app.min.js.map'))
        .pipe(vinylSourceStream('app.min.js'))
        .pipe(vinylBuffer())
        .pipe(gulp.dest('./www/build/js/'));
}