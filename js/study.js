require("./../sass/study.scss");
require("jquery");
require("./velocityjs/velocity.min.js"); //动画
require("./velocityjs/velocity.ui.js"); //插件
$(function() {
$(".box")
    .velocity({
        opacity: 0,
        width: "300px"
    }, 500, "swing", function() {
        //alert("erer")
    })
    .velocity({
        width: '200px',
        opacity: 1
    }, 1000); //个体连续动画






//不同个体连续动画采用序列
    // var mySequence = [
    //     { e: $element1, p: { translateX: 100 }, o: { duration: 1000 } },
    //     /* The call below will run at the same time as the first call. */
    //     { e: $element2, p: { translateX: 200 }, o: { duration: 1000, sequenceQueue: false },
    //     /* As normal, the call below will run once the second call is complete. */
    //     { e: $element3, p: { translateX: 300 }, o: { duration: 1000 }
    // ];
    // $.Velocity.RunSequence(mySequence);

//预定义动画
    // $(".box").on('mouseover', function() {
    //     $(this).velocity('callout.shake');
    // });

//自定义动画  一次定义 多次使用  RegisterUI 
$.Velocity.RegisterEffect('ptl.pulse', {
    defaultDuration: 3000,
    calls: [
        [{
            scaleX: 1.1
        }, 0.3],
        [{
            scaleX: 1.0
        }, 0.3],
        [{
            rotateY: 360
        }, 0.4]
    ]
});
$(".box").on('mouseover', function() {
    $(this).velocity('ptl.pulse');
});




});
