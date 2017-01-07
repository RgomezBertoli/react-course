var gulp = require('gulp');

var path = {
    ts: 'src/**/*.ts',
    tsx: 'src/**/*.tsx'
};

module.exports = function (){
    gulp.watch(path.ts, ['compile']);
    gulp.watch(path.tsx, ['compile']);
}