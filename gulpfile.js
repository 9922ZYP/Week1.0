/**
 * Created by Administrator on 2017/10/9.
 */
var gulp=require("gulp"),
    minifyCss=require("gulp-minify-css"),
    concat=require("gulp-concat"),
    uglify=require("gulp-uglify"),
    rename=require("gulp-rename"),
    notify=require("gulp-notify");

gulp.task("js",function(){
    gulp.src("./js/*.js")
        .pipe(concat("main.js"))
        .pipe(rename({suffix:".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("./js"))
})



gulp.task("minifyCss",function(){
   return gulp.src(["css/*.css"])
        .pipe(concat("main.css"))
        .pipe(rename({suffix:".min"}))
        .pipe(minifyCss())
        .pipe(gulp.dest("css/"))
        .pipe(notify({messafe:"ok"}))
})