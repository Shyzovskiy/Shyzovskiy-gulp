import fileInclude from "gulp-file-include";

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@assets\//g, "./assets/"))
		.pipe(app.plugins.replace(/@images\//g, "./assets/images/"))
		.pipe(app.plugins.replace(/@js\//g, "./js/"))
		.pipe(app.plugins.replace(/@css\//g, "./css/"))
		.pipe(app.plugins.replace(/@scss\//g, "./scss/"))
		.pipe(app.gulp.dest(app.path.build.html))
}