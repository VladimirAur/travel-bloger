const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprite');
const imagemin = require('gulp-tinypng');


const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        },
        browser: 'chrome',
    });
});

gulp.task('compress', function () {
  return gulp.src('doc/img/**/*.jpg')
      .pipe(imagemin('GDdff3QrKWvRL1hrqHnvYZyD3y0Q4LXX'))
      .pipe(gulp.dest('src/img/'));
});

gulp.task('sprite', function() {
    return gulp.src('doc/svg/*.svg')
      .pipe(
        svgSprite({
          mode: {
            stack: {
              sprite: '../svg-sprite.svg',               
            }
          }
        })
      )
      .pipe(gulp.dest('src/img/'))
  })

gulp.task('fonts', function(){
    gulp.src(['src/fonts/*.ttf'])
      .pipe(ttf2woff())
      .pipe(gulp.dest('src/fonts/'));
    return gulp.src(['src/fonts/*.ttf'])
      .pipe(ttf2woff2())
      .pipe(gulp.dest('src/fonts/'));
  });

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
            .pipe(sass().on('error', sass.logError))            
            .pipe(autoprefixer({
                cascade: false
            }))            
            .pipe(gulp.dest("src/css"))            
});

gulp.task('watch', function(){
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"))
    gulp.watch("src/*.html").on("change", browserSync.reload)
    gulp.watch("src/css/*.css").on("change", browserSync.reload)
});

gulp.task('default', gulp.parallel('server', 'styles', 'watch'));