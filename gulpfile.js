var gulp = require('gulp');
var imagemin = require('gulp-imagemin'),
    //确保本地已安装imagemin-pngquant [npm install gulp-imagemin imagemin-pngquant@4 --save-dev]
    pngquant = require('imagemin-pngquant'); //imagemin-pngquant 最新版本会报错 安装时后加@4   npm i imagemin-pngquant@4

gulp.task('image', function() {
    gulp.src('./images/fy11/*.{png,jpg,gif,ico,svg}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }], //不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('fy11/images'));
});

// var htmlmin = require('gulp-htmlmin'); //压缩html
// gulp.task('html', function() {
//     return gulp.src('*.html')
//         .pipe(htmlmin({
//             collapseWhitespace: true
//         }))
//         .pipe(gulp.dest('dist'))
// });


// var pngout = require('imagemin-pngout');

// gulp.task('image', function () {
//     return gulp.src('images/*.png')
//         .pipe(pngout({ strategy: 1 })())
//         .pipe(gulp.dest('dist/images'));
// });


// var rev = require('gulp-rev');

// gulp.task('rev', function () {
//     return gulp.src(['css/*.css','js/*.js'])
//         .pipe(rev())
//         .pipe(gulp.dest('dist'))
//             .pipe(rev.manifest())
//         .pipe(gulp.dest('dist/rev')); // write manifest to build dir ;
// });


// var revCollector = require('gulp-rev-collector');


// gulp.task('replace', function() {
//     return gulp.src(['dist/rev/*.json', './*.html'])
//         .pipe(revCollector({
//             replaceReved: true,
//             dirReplacements: {
//                 'dist/css/': 'css/',
//                 'dist/js/': 'js/'
//             }
//         }))
//         //.pipe(htmlmin({collapseWhitespace: true}))
//         .pipe(gulp.dest('dist'));
// });