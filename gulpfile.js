var gulp = require('gulp');
var karma = require('karma').server;
var jasmine = require('gulp-jasmine');

var path = {
  specs: "specs/js/*spec.js"
};


gulp.task('default', function(){

});

var karmaConf = {
  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],
  files: [
    path.specs,
  ],
  singleRun: true
};

gulp.task('test', function(done) {
  gulp.src(path.specs)
        .pipe(jasmine());
});

gulp.task('karma', function(done) {
  karma.start(karmaConf, done);
});