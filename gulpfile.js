

/*eslint-env node */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
//var jasmine = require('gulp-jasmine-phantom');
var concat =require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var responsive = require('gulp-responsive');



var htmlmin = require('gulp-html-minifier');

gulp.task('minify', function() {
  gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'))
});




 gulp.task('default',['styles', 'lint'], function () {
  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch('js/**/*.js', ['lint']);

  gulp.watch('./build/index.html').on('change', browserSync.reload);
 });

 browserSync.init({
     server: "./dist"
 });
 browserSync.stream();

gulp.task('dist', [
  // 'copy-html',
  // 'copy-images',
  // 'copy-images/views',
  // 'copy-html/views',
  // 'copy-html/views',
  'styles',
  //'lint',
  'scripts-dist',
  'scripts/views']);

 gulp.task('styles/views', function () {
   gulp.src('views/sass/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 2 versions']}))
  .pipe(gulp.dest('./dist/views/css'));
 });

 gulp.task('styles', function () {
   gulp.src('sass/**/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
            browsers: ['last 2 versions']}))
  .pipe(gulp.dest('./dist/css'));
 });
gulp.task('scripts/views', function() {
  gulp.src('views/js/**/*.js')
  .pipe(uglify())
  //.pipe(concat('all.js'))
  .pipe(gulp.dest('dist/views/js'));
});
gulp.task('scripts-dist', function() {
  gulp.src('js/**/*.js')
  .pipe(uglify())
  //.pipe(concat('all.js'))
  .pipe(gulp.dest('dist/js'));
});



// gulp.task('copy-html', function(){
//   gulp.src('./index.html')
//   .pipe(gulp.dest('./dist'));
// });
// gulp.task('copy-html/views', function(){
//   gulp.src('views/pizza.html')
//   .pipe(gulp.dest('dist/views'));
// });

// gulp.task('copy-images', function(){
//   gulp.src('img/*')
//   .pipe(gulp.dest('dist/img'));
// });
// gulp.task('copy-images/views', function(){
//   gulp.src('views/images/*')
//   .pipe(gulp.dest('dist/views/images'));
// });

gulp.task('images2', function() {
    return gulp.src('dist/views/images/*')
        .pipe(imagemin({
            progressive: true,
            use: [imageminPngquant()]
        }))
        .pipe(gulp.dest('dist/views/images'));
});

gulp.task('images1', function() {
    return gulp.src('dist/img/*')
        .pipe(imagemin({
          progressive: true,
          use: [imageminPngquant()]
        }))


    .pipe(gulp.dest('dist/img'));
});
gulp.task('images', function () {
  return gulp.src('img/*.jpg')
    .pipe(responsive({
      // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
      '*.jpg': [{
        width: 115,
        rename: { suffix: '-115px' },
      }, {
        width: 482,
        rename: { suffix: '-482px' },
      }, {
        // Compress, strip metadata, and rename original image
        rename: { suffix: '-original' },
      }],

    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
    }))
    .pipe(gulp.dest('dist/img'));
});


gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js','!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});



















// //         gulp.src(paths.scripts[0])
// //         .pipe(uglify())
// //         .pipe(concatify())
// //         .pipe(gulp.dest('/dist/img'));
// //         gulp.src(paths.scripts[1])
// //         .pipe(uglify())
// //         .pipe(concatify())
// //         .pipe(gulp.dest('dist/views/images'));









