var gulp,
    sourcemaps,
    source,
    buffer,
    browserify,
    babel,
    uglify,
    config,
    gutil;

gulp       = require('gulp');
sourcemaps = require('gulp-sourcemaps');
source     = require('vinyl-source-stream');
buffer     = require('vinyl-buffer');
browserify = require('browserify');
babel      = require('babelify');
uglify     = require('gulp-uglify');
config     = require('../config').scripts;
gutil      = require('gulp-util');

gulp.task('scripts', ['clean-scripts'], function() {
    var bundler = browserify(config.src, { debug: true })
            .transform(babel.configure(
                {
                    plugins: ['transform-inline-environment-variables'],
                    presets: ['es2015']
                }));

    return bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source(config.outputName))
        .pipe(buffer())
        .pipe(process.env.NODE_ENV === 'production' ? uglify() : gutil.noop())
        .pipe(process.env.NODE_ENV !== 'production' ? sourcemaps.init({ loadMaps: true }) : gutil.noop())
        .pipe(process.env.NODE_ENV !== 'production' ? sourcemaps.write('./') : gutil.noop())
        .pipe(gulp.dest(config.dest));
});
