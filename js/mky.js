

require("./../sass/mky.scss");

require("jquery");
require("./tweenmax/tweenmax.min.js");
$(function() {



TweenMax.to($('.head .guan'), 4, {
    repeatDelay: 2,
    opacity: "1",
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut
});

// TweenMax.to($('.head .layer1'), 4, {

//     top: "-155px",
//     repeat: -1,
//     yoyo: true,
//     ease: Power2.easeInOut
// });



var tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 0,
    yoyo: false
});
tl
    .to($('.head .layer1'), 5, {
        top: "-236px",
        ease: Linear.easeNone
    })
    .to($('.head .layer1'), 0, {
        top: "0px",

        ease: Linear.easeNone
    })
;

var t2 = new TimelineMax({
    repeat: -1,
    repeatDelay: 0,
    yoyo: false
});
// t2
//     .to($('.head .layer2'), 0, {
//         top: "-236px",
//         ease: Linear.easeNone
//     })
//     .to($('.head .layer2'), 7, {
//         top: "0px",
//         ease: Linear.easeNone
//     })
//     // .to($('.head .layer2'), 0, {
//     //     top: "81px",

// //     ease: Linear.ease
// // })
// ;



t2
    .to($('.head .layer2'), 8, {
        top: "-236px",
        ease: Linear.easeNone
    })
    .to($('.head .layer2'), 0, {
        top: "0px",

        ease: Linear.easeNone
    })
;


});
