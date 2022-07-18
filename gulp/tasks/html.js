import fileinclude from "gulp-file-include"

export const html = () =>{
  return app.gulp.src(app.path.src.html)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'HTML',
      messege:`error: <%error.messege %>`

    })
  ))
  .pipe(fileinclude())
  //.pipe(app.plagins.replace())
  .pipe(app.gulp.dest(app.path.build.html))
.pipe(app.plugins.browsersync.stream())


}