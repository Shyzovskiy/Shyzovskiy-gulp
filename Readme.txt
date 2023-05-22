npm i

NOTE! Any changes to the project's file structure without duplicating them in path.js and gulp/tasks/*.js can make everything inoperable.
Readme.txt and .gitkeep can be deleted.

stock structure:

├── assets              # folder for storing assets (images, videos, fonts, php, etc)
│ └── images/		# folder for storing images
├── js			# Javascript scripts
├── html			# folder for storing html parts of the page (_head.html, _header.html, ...)
├── css			# CSS components
├── scss			# SCSS components
│ └── base/			# folder for storing base styles (_reset.scss, _base.scss, _vars.scss, ...)
│ └── modules/		# folder for storing modules (_button.scss, _burger.scss, ...)
│ └── sections/		# folder for storing sections (_hero.scss, _features.scss, ...)
│ └── style.scss		# main scss file
└── index.html		# main html file


"devDependencies": {
	"del": "^7.0.0",
	"gulp": "^4.0.2",
	"gulp-file-include": "^2.3.0",
	"gulp-notify": "^4.0.0",
	"gulp-plumber": "^1.2.1",
	"gulp-replace": "^1.1.4",
	"gulp-sass": "^5.1.0",
	"sass": "^1.62.1"
}


---------------------------------------------------------------

// eng
* The "dist" folder actually has the name of the project folder.

Tasks that are performed:
- Copy files from src to dist,
- Cleaning dist from unnecessary files when running gulp,
- Ability to nest html in html @@include("", {}),
- Adaptation of the VS code plugin "path autocomplete" (automatically replaces @img/ @js/ @scss/ @css/ @assets/ with a relative file path),
- Compiling scss to css,
- Outputting errors to Windows notifications (for example, on error converting scss to css, or specifying the wrong path in @@include)



// ua 
* Папка "dist" насправді має назву папки проекту.

Завдання, що виконуються:
- Копіювання файлів з src у dist,
- Очищення dist від непотрібних файлів під час запуску gulp,
- Можливість вкладати html у html @@include("", {}),
- Адаптація плагіна VS code "path autocomplete" (автоматично замінює @img/ @js/ @scss/ @css/ @assets/ на відносний шлях до файлу),
- Компіляція scss у css,
- Виведення помилок у повідомленні Windows (наприклад, при помилках конвертації scss в css, або вказівки неправильного шляху в @@include)




// ru
* Папка "dist" на самом деле имеет название папки проекта.

Выполняемые задачи:
- Копирование файлов с src в dist,
- Очистка dist от ненужных файлов при запуске gulp,
- Возможность вкладывать html в html @@include("", {}),
- Адаптация плагина VS code "path autocomplete" (автоматически заменяет @img/ @js/ @scss/ @css/ @assets/ на относительный путь к файлу),
- Компиляция scss в css,
- Вывод ошибок в удомления Windows (например, при ошибках конвертации scss в css, либо указание неправильного пути в @@include)