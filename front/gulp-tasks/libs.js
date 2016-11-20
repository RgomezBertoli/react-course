var gulp = require('gulp'),
    concat = require('gulp-concat');

module.exports = function(){
    
    var sources = [
        './node_modules/react/dist/react.min.js',
        './node_modules/react-dom/dist/react-dom.min.js'
    ];

    return gulp.src(sources)
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('./www/build/libs'));
}