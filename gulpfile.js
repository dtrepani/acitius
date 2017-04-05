'use strict';

const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

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
		const plugins = [
			autoprefixer({ browsers: ['last 2 versions', '> 0.1%', 'not ie <= 8'] }),
			cssnano()
		];

		gulp.src(filePaths.scss)
			.pipe($.plumber({ errorHandler: onError }))
			.pipe($.sassLint())
			.pipe($.sass())
			.pipe(gulp.dest(dirPaths.css))
			.pipe($.rename({ extname: '.min.css' }))
			.pipe($.sourcemaps.init())
			.pipe($.postcss(plugins))
			.pipe($.sourcemaps.write('.'))
			.pipe(gulp.dest(dirPaths.css));
	}, 400);
});

gulp.task('watch', () => {
	gulp.watch(filePaths.scssWatch, ['css']);
});

gulp.task('default', ['css', 'watch']);
