// imports always go at the top
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass'; 
import dart from 'sass'; // this is the dart-sass compiler

const sassify = sass(dart); // configure the sass plugin to work with the dart sass compiler

function compileSass(done) {
    return (
        gulp.src('sass/**/*.scss') // get every scss file in the sass directory
        .pipe(sassify({outputStyle: "compressed"}).on('error', sassify.logError)) // run it thru the compiler, and also compress it
        .pipe(gulp.dest('public/css')) // save the compiled file to the CSS directory
    ) 
  };

function squashImages(done) {
    gulp.src('assets/**') // grab everything in the images folder
        .pipe(imagemin()) // run every image through the imagemin engine
        .pipe(gulp.dest('public/images')) // put the optimized images here
        
    done();
}

function watch(done) {
    // run this function with command "gulp"
    console.log('watching files...');
    gulp.watch('sass/**/*.scss', compileSass);
    gulp.watch('assets/**', squashImages);
}

export { 
    watch as default, 
    squashImages as crunch,
    compileSass as compile
}