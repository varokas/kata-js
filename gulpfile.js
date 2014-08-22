var gulp = require('gulp');
var karma = require('karma').server;
var jasmine = require('gulp-jasmine');
var typescript = require('gulp-tsc');
var rimraf = require('rimraf');
var tsd = require('gulp-tsd');

var path = {
  ts: "src/ts/**/*.ts",
  specs: "specs/js/**/*spec.js",
  build: "build/"
};

gulp.task('tsd', function () {
    return gulp.src('./gulp_tsd.json').pipe(tsd());
});

gulp.task('clean', function(done){
  rimraf(path.build, done);
});

gulp.task('compile', function(){
  gulp.src(path.ts)
    .pipe(typescript({
      "declaration": true,
      "sourcemap": true,
      "sourceRoot": "."
    }))
    .pipe(gulp.dest(path.build))
});


gulp.task('run_test', function(done) {
  gulp.src(path.specs)
        .pipe(jasmine());
});

gulp.task('test', ['clean', 'compile', 'run_test']);

var karmaConf = {
  browsers: ['PhantomJS'],
  frameworks: ['jasmine'],
  files: [
    path.specs,
  ],
  singleRun: true
};


gulp.task('karma', function(done) {
  karma.start(karmaConf, done);
});