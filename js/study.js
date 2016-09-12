require("./../sass/study.scss");
require("jquery");
require("./velocityjs/velocity.min.js"); //动画
require("./velocityjs/velocity.ui.js"); //插件
require("./lettering/jquery.lettering-0.6.1.min.js");
$(function() {
var text = $("#whyGSAP"),
    chars = text.lettering().find("span"),
    centerIndex = Math.floor(chars.length / 2);
for (i = 0; i < chars.length; i++) {

    //tl.from(chars[i], 1.8, {x:(i - centerIndex) * 40, opacity:0, ease:Power2.easeOut}, i * 0.1);
    $(chars[i]).velocity({
        translateX: [0, (i - centerIndex) * 40],
        opacity: [1, 0]
    }, 1800, {
        easing: 'easeOutQuad',
        sequenceQueue: false
    })
        .velocity({
            rotateX: -720,
            colorAlpha: 0,
            scale: 0.3
        }, 1500)
    ;
}


});
// $(function() {
// $(".box")
//     .velocity({
//         opacity: 0,
//         width: "300px"
//     }, 500, "swing", function() {
//         //alert("erer")
//     })
//     .velocity({
//         width: '200px',
//         opacity: 1,
//     //tween: 5 // Optional 初始设置个值 如果不设置 则取得的null
//     }, {
//         duration: 1000
//         //,
//         // progress: function(elements, complete, remaining, start, tweenValue) {

//         //     console.log((complete * 100) + "%");
//         //     console.log(remaining + "ms remaining!");
//         //     console.log("The current tween value is " + tweenValue)

//         // }, //进度  

//         // begin: function() {

//         //     alert("动画我要开始了");

//         // }, //动画开始执行的函数  

//         // complete: function() {

//         //     alert("动画结束了");

//     // }
//     }); //个体连续动画






// //不同个体连续动画采用序列
//     // var mySequence = [
//     //     { e: $element1, p: { translateX: 100 }, o: { duration: 1000 } },
//     //     /* The call below will run at the same time as the first call. */
//     //     { e: $element2, p: { translateX: 200 }, o: { duration: 1000, sequenceQueue: false },
//     //     /* As normal, the call below will run once the second call is complete. */
//     //     { e: $element3, p: { translateX: 300 }, o: { duration: 1000 }
//     // ];
//     // $.Velocity.RunSequence(mySequence);

// //预定义动画
//     // $(".box").on('mouseover', function() {
//     //     $(this).velocity('callout.shake');
//     // });

// //自定义动画  一次定义 多次使用  RegisterUI 
// $.Velocity.RegisterEffect('ptl.pulse', {
//     defaultDuration: 3000,
//     calls: [
//         [{
//             scaleX: 1.1
//         }, 0.3, {
//             progress: function(elements, complete, remaining, start, tweenValue) {

//                 console.log((complete * 100) + "%");
//                 console.log(remaining + "ms remaining!");
//                 console.log("The current tween value is " + tweenValue)

//             }, //进度  
//         }],
//         [{
//             scaleX: 1.0
//         }, 0.3],
//         [{
//             rotateY: 360
//         }, 0.4]
//     ],


//     begin: function() {

//         alert("动画我要开始了");


//     }, //动画开始执行的函数  

//     complete: function() {

//         alert("动画结束了");

//     }
// });
// $(".box").on('mouseover', function() {
//     $(this).velocity('ptl.pulse',
//         {
//             duration: 20000

//         });

// });

// $("#text").velocity({
//     text: "this a text animation"
// }, 500);



//});
