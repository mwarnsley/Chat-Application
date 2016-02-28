var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify');

gulp.task('minifycss', function(){
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('minifyjs', function(){
    return gulp.src('src/**/*.js')
            .pipe(uglify())
            .pipe(rename({suffix:'.min'}))
            .pipe(gulp.dest('dist'))
});

gulp.task('default',['minifycss','minifyjs']);