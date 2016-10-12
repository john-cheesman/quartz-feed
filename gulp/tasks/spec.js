var gulp,
    source,
    buffer,
    browserify,
    babel,
    uglify,
    config,
    jasmine,
    reporters;

gulp       = require('gulp');
source     = require('vinyl-source-stream');
buffer     = require('vinyl-buffer');
browserify = require('browserify');
babel      = require('babelify');
uglify     = require('gulp-uglify');
config     = require('../config').spec;
jasmine    = require('gulp-jasmine');
reporters  = require('jasmine-reporters');

gulp.task('spec', ['clean-spec'], function() {
    var bundler = browserify(config.src)
        .transform(babel.configure(
            {
                plugins: ['transform-inline-environment-variables'],
                presets: ['es2015']
            }));

    return bundler.bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source(config.outputName))
        .pipe(buffer())
        .pipe(gulp.dest(config.dest))
        .pipe(jasmine({
            reporter: new reporters.TerminalReporter(config.reporter)
        }));
});
