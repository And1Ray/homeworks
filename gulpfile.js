'use strict';

const gulp        = require('gulp');
const watch       = require('gulp-watch'); // Более умный вотчер
const batch       = require('gulp-batch'); // Пачки задач
const plumber     = require('gulp-plumber'); // Обработка ошибок
const notify      = require('gulp-notify');
const browserSync = require('browser-sync').create();
const minimist    = require('minimist'); // Работа с аргументами команд
//
const twig         = require('gulp-twig');
const beautify     = require('gulp-html-beautify');
//
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
//
const webpack      = require('webpack-stream');
const babel        = require('gulp-babel');
const uglify       = require('gulp-uglify');
//
const imagemin     = require('gulp-imagemin');

// Обработка ошибок
const handleError = err => {
  notify.onError({title: 'Gulp error', message: err.message})(err);
};

// Обработка аргументов
const knownOptions = {
  string:  'env',
  default: {env: process.env.NODE_ENV || 'production'}
};

const options = minimist(process.argv.slice(2), knownOptions);

// 1. Девсервер на build/
gulp.task('server', (done) => {
  browserSync.init({
    server: {
      baseDir: 'build/'
    },
    host:   'localhost',
    port:   9000,
    notify: false
  });
  done();
});
gulp.task('server:refresh', () => {
  browserSync.reload();
});
gulp.task('server:inject', () => {
  gulp.src('build/styles/**/*.*')
    .pipe(browserSync.stream());
});

// 2. Билды
gulp.task('build:html', () => {
  gulp.src([
      'src/pages/*.twig',
      'src/pages/*.html'
    ])
    .pipe(twig())
    .pipe(beautify({indent_char: ' ', indent_size: 2, max_preserve_newlines: 10}))
    .pipe(gulp.dest('build/'));
});
gulp.task('build:styles', () => {
  gulp.src('src/styles/*.scss')
    .pipe(plumber(handleError))
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 version']}),
      cssnano({zindex: false, reduceIdents: false})
    ]))
    .pipe(gulp.dest('build/styles/'));
});
gulp.task('build:scripts', () => {
  gulp.src('src/scripts/vendor/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts/vendor/'));

  gulp.src('src/scripts/index.js')
    .pipe(plumber(handleError))
    .pipe(webpack({
      output:       {filename: 'bundle.js'},
      optimization: {minimize: false},
      mode:         'production'
    }))
    .pipe(babel({presets: ['env']}))
    // .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('build/scripts/'));

  // Простое копирование АПИ
  gulp.src('src/scripts/api.js')
    .pipe(plumber(handleError))
    .pipe(gulp.dest('build/scripts/'));
});
gulp.task('build:assets', () => {
  gulp.src('src/assets/fonts/**/*.*')
    .pipe(gulp.dest('build/assets/fonts/'));

  gulp.src('src/assets/other/**/*.*')
    .pipe(gulp.dest('build/assets/other/'));

  gulp.src('src/assets/img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets/img/'));

  gulp.src('src/assets/favicon/**/*.*')
    .pipe(gulp.dest('build/assets/favicon/'));
});

// Вотчеры
gulp.task('watch:build', ['server', 'build:html', 'build:styles', 'build:assets'],
  () => {
    gulp.watch([
        'src/pages/**/*.twig',
        'src/pages/**/*.html',
        'src/blocks/**/*.twig',
        'src/blocks/**/*.html'
      ],
      ['build:html']);
    gulp.watch([
        'src/styles/**/*.*',
        'src/blocks/**/*.scss'
      ],
      ['build:styles']);
    gulp.watch('src/assets/**/*.*', ['build:assets']);
  });
gulp.task('watch:update', () => {
  gulp.watch([
    'build/**/*.*',
    '!build/styles/**/*.*'
  ], ['server:refresh']);

  gulp.watch(['build/styles/**/*.*', 'src/styles/**/*.*', 'src/blocks/**/*.scss'] ['server:inject']);
});

gulp.task('default', ['watch:build', 'watch:update']);
gulp.task('build', ['build:html', 'build:styles', 'build:scripts', 'build:assets']);
