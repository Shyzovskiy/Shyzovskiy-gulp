import dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error <%= error.message %>"
			})
		))
		.pipe(sass({
			outputStyle: "expanded"
		}))
		.pipe(app.plugins.replace(/@assets\//g, "./../assets/"))
		.pipe(app.plugins.replace(/@images\//g, "./../assets/images/"))
		.pipe(app.gulp.dest(app.path.build.css))
}