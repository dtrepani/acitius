'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

const dirPaths = {
	js: 'app',
	css: 'app/content/css',
	scss: 'src/content/scss'
};

const filePaths = {
	scss: [`${dirPaths.scss}/app.scss`],
	// Watch for changes in any of the scss partials.
	scssWatch: [`${dirPaths.scss}/**/*.scss`]
};

const onError = $.notify.onError('<%= error.message %>');

gulp.task('css', () => {
	setTimeout(() => {
		gulp.src(filePaths.scss)
			.pipe($.plumber({ errorHandler: onError }))
			.pipe($.sass())
			.pipe(gulp.dest(dirPaths.css))
			.pipe($.rename({ extname: '.min.css' }))
			.pipe($.cssnano())
			.pipe($.sourcemaps.write('.'))
			.pipe(gulp.dest(dirPaths.css));
	}, 500);
});

gulp.task('watch', () => {
	gulp.watch(filePaths.scssWatch, ['css']);
});

gulp.task('default', ['css', 'watch']);
