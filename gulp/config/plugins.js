import replace from "gulp-replace"; // Конвертация @img в нормальный путь
import plumber from "gulp-plumber"; // Обработка ошибок
import notify from "gulp-notify"; // Вывод ошибки в уведомление

// Экспорт объекта
export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
}