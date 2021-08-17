// Include gulp
var gulp = require( 'gulp' );

// Include Our Plugins
var sass = require( 'gulp-sass' );
var pref = require( 'gulp-autoprefixer' )
// var uglify = require( 'gulp-uglify' );
// var rename = require( 'gulp-rename' );
var cleanCSS = require( 'gulp-clean-css' );



// Compile Our Sass
gulp.task( 'sass', function() {
    return gulp.src( './scss/*.scss' )
        .pipe( sass( { errLogToConsole: true } ) )
        .pipe( pref( 'last 4 versions' ) )
        .pipe( cleanCSS() )
        .pipe( gulp.dest( 'css' ) );
});

// Watch Files For Changes
gulp.task( 'watch', function() {
    gulp.watch( './scss/**/*.scss', gulp.series( 'sass' ) );
});
