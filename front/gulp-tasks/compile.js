var gulp = require('gulp'),
    browserify = require("browserify"),
    babelify = require('babelify'),
    tsify = require("tsify"),
    source = require("vinyl-source-stream"),
    vBuffer = require('vinyl-buffer'),
    sourcemaps = require("gulp-sourcemaps");

module.exports = function() {

    return browserify({
            entries: [
                'src/index.ts'
            ],
            debug: true,
        })
        .plugin(tsify)
        .transform(babelify, {
            presets: [
                "es2015",
                "react"
            ],
            sourceMaps: false
        })
        .bundle()
        .pipe(source("app.min.js"))
        .pipe(vBuffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./www/build/js/'));
}