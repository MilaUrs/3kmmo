const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
/* const imagemin = require('gulp-imagemin'); */


gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
});



gulp.task('default', gulp.parallel('watch', 'server', 'styles'));

/* , 'html', 'scripts', 'img', 'mailer' */  /* need add to default at the end */

/* need add after watch task at the end 




gulp.task('html', function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function() {
    return gulp.src("src/js/*.js")
    .pipe(gulp.dest("dist/js"));
});

gulp.task('img', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('mailer', function() {
    return gulp.src("src/mailer/*")
        .pipe(gulp.dest("dist/mailer"));
}); 


*/