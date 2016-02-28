var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('minifycss', function(){
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyjs', function(){
    gulp.src('src/**/*.js')
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default',['minifycss','minifyjs']);