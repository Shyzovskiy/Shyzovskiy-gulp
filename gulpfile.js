// Импорт модулей
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js";

// Импорт плагинов
import { plugins } from "./gulp/config/plugins.js"

// Глобальная переменная
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";

// Наблюдатели
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
}

// Основные задачи
const mainTasks = gulp.parallel(copy, html, scss);

// Сценарий
const dev = gulp.series(reset, mainTasks, watcher);

// Сценарий по умолчанию
gulp.task("default", dev);