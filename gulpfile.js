// var gulp = require('gulp'),
//     sass = require('gulp-sass'); //Подключаем Sass пакет

//     gulp.task('sass', function(){ // Создаем таск "sass"
// 	return gulp.src('app/sass/main.sass') // Берем источник
// 		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
// 		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
// });

// gulp.task('watch', function() {
// 	gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
// });