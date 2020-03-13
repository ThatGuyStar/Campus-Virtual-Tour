// Include gulp
const gulp = require('gulp');

// Include Our Plugins
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const copy = require('gulp-copy');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');
const svgo = require('gulp-svgo');
const mkdirp = require('gulp-mkdirp');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gulpif = require('gulp-if');
const scsslint = require('gulp-scss-lint');
const watch = require('gulp-watch');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', function(cb){
  runSequence('build');
});

gulp.task('build', function(cb) {
  runSequence('clean',
    ['html', 'style', 'js', 'images', 'php', 'lib'],
    ['js-lint'],
    cb);
});

// Tasks for WordPress theme build
gulp.task('clean', function() {
    return gulp.src('dist/*')
        .pipe(clean());
});

// Building the CSS
gulp.task('style', function () {
  return gulp.src(['app/styles/*.scss', 'app/styles/*.css'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', function(){
  return gulp.src('app/scripts/**/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*')
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
          ]
        })
      ]))
      .pipe(gulp.dest('dist/images'));
});

gulp.task('php', function(){
  return gulp.src('app/php/**/*.php')
      .pipe(gulp.dest('dist/php'));
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
  .pipe(htmlmin({collapseWhitespace: true,
    removeComments: true}))
  .pipe(gulp.dest('dist'))
});

gulp.task('lib', function(cb) {
  runSequence('lib-js', 'lib-style',
    cb);
});

gulp.task('lib-js', function(){
  return gulp.src('app/lib/**/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/lib'));
});

gulp.task('lib-style', function () {
  return gulp.src(['app/lib/**/*.scss', 'app/lib/**/*.css'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('js-lint', function(){
  return gulp.src('app/scripts/**/*.js')
      .pipe(jshint({
        'esversion': 6
      }))
      .pipe(jshint.reporter('default'));
});
