// Source: [http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/](http://blog.edenmsg.com/angular2-typescript-gulp-and-expressjs/)

var gulp = require('gulp')
var path = require('path')
var sourcemaps = require('gulp-sourcemaps')
var ts = require('gulp-typescript')
var del = require('del')
var concat = require('gulp-concat')

// SERVER
gulp.task('clean', function () {
  return del('public')
})

gulp.task('build:server', ['clean'], function () {
  var tsProject = ts.createProject('server/tsconfig.json')
  var tsResult = gulp.src('server/**/*.ts')
    .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
  return tsResult.js
        .pipe(concat('server.js'))
        .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
})

// CLIENT
/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
  'es6-shim/es6-shim.min.js',
  'systemjs/dist/system-polyfills.js',
  'angular2/es6/dev/src/testing/shims_for_IE.js',

  'angular2/bundles/angular2-polyfills.js',
  'systemjs/dist/system.src.js',
  'rxjs/bundles/Rx.js',
  'angular2/bundles/angular2.dev.js',
  'angular2/bundles/router.dev.js'
]

gulp.task('build:index', ['clean', 'build:css'], function () {
  var mappedPaths = jsNPMDependencies.map(file => { return path.resolve('node_modules', file) })

  // Let's copy our head dependencies into a dist/libs
  var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
      .pipe(gulp.dest('public/libs'))

  // Let's copy our index into dist
  var copyIndex = gulp.src('app/static/index.html')
      .pipe(gulp.dest('public'))
  return [copyJsNPMDependencies, copyIndex]
})

gulp.task('build:app', ['clean'], function () {
  var tsProject = ts.createProject('app/tsconfig.json')
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
  return tsResult.js
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('public'))
})

gulp.task('build:css', ['clean'], function () {
  return gulp.src('app/static/styles.css')
    .pipe(gulp.dest('public'))
})


gulp.task('build', ['build:index', 'build:app'])
gulp.task('default', ['build'])
