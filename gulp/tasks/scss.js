import darkSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

const sass = gulpSass(darkSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: true})
.pipe(app.plugins.replace(/@img\//g, '../img/'))
.pipe (sass({
  outputStyle: 'expanded'
}))
.pipe(rename({
  extname: '.min.css'
}))
  .pipe(app.gulp.dest(app.path.build.scss))
.pipe(app.plugins.browsersync.stream());

}