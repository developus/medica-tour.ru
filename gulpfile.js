const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sync = require('browser-sync').create();

const scripts = () => {
  return gulp.src([
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'node_modules/@splidejs/splide/dist/js/splide.min.js',
    'node_modules/glightbox/dist/js/glightbox.min.js',
    'node_modules/hc-sticky/dist/hc-sticky.js',
    'node_modules/smooth-scrollbar/dist/smooth-scrollbar.js',
    'src/js/common.js'
    ])
    .pipe(concat('app.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('src/js'))
    .pipe(sync.stream())
}
exports.scripts = scripts;

const styles = () => {
  return gulp.src('src/sass/*.+(scss|sass)')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe(sync.stream());
}
exports.styles = styles;

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'src'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}
exports.server = server;

const watcher = () => {
  gulp.watch('src/js/common.js', gulp.series('scripts'));
  gulp.watch('src/sass/**/*.+(scss|sass)', gulp.series('styles'));
  gulp.watch('src/**/*.html').on('change', sync.reload);
}

exports.default = gulp.series(
  styles, scripts, server, watcher
);
