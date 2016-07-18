if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../index.html');
    require("./../sass/style.scss");
}
;

//require("./pJqueryAppearAnimateCSS3/jac.js"); //动画
// require("./rotate3d/do.js");
//require("imports?$=jquery!./superslide/jquery.SuperSlide.2.1.1.js");
//require("./superslide/TouchSlide.1.1.js");
//require("./../css/style.css");
//require("./../sass/style.scss");
//require("./../sass/style.less");


//require('imports?$=jquery!./waypoints/jquery.waypoints.min.js');

require("jquery");
require("./pJqueryAppearAnimateCSS3/jac.js"); //动画

//require('./waypoints/jquery.waypoints.min.js');


//fullpage 加载列表
require("./fullpage/jquery.fullpage.css");

require("script!./fullpage/vendors/scrolloverflow.min.js"); //使用script-loader，它可以在全局环境下执行一次指定的脚本 在node.js环境下，script-loader什么都不做。
//require("imports?$=jquery!./fullpage/vendors/scrolloverflow.min.js");
// require("imports?$=jquery,jQuery=jquery!./fullpage/vendors/jquery.easings.min.js");
// require("imports?$=jquery,jQuery=jquery!./fullpage/jquery.fullpage.js");


//require("./fullpage/vendors/scrolloverflow.min.js");
require("./fullpage/vendors/jquery.easings.min.js");
require("./fullpage/jquery.fullpage.js");




require("./../sass/style.scss");


require("./movingboxes/movingboxes.css");

require("./movingboxes/jquery.movingboxes.js");

require("./movingboxes/slider.js");


$(document).ready(function() {
    $('#fullpage').fullpage({
        lockAnchors: false, // true 锁定网址 不显示后面的 #page1 
        anchors: ['page1', 'page2', 'page3', 'page4'], //锚链接  #page1
        sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'], //各屏背景色


        menu: '#menu', //绑定锚链接

        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'], //各屏 浮动的标题文字
        showActiveTooltip: true, //当前屏的标题一直显示
        navigationColor: "#f58220",

        paddingTop: "30px", //每屏的上边距 适合导航
        paddingBottom: "130px",
        responsiveHeight: "200",


        loopTop: true, //是否循环
        loopBottom: true, //是否循环

        // onLeave: function(index, nextIndex, direction) {
        //     if (index == 4) {
        //         alert(index);
        //     }
        //     if (index == 4 && direction == "down") {
        //         $.fn.fullpage.moveTo(1);
        //     }
        // }
        afterLoad: function(anchorLink, index) {
            if (index == 3) {
                //alert(index);
                $(".content").animateCss("fadeInUp"); //滚动过程 使用animate.css 动画 也可以自定义Css3动画
            }
        },

        //Scrolling
        css3: false,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutExpo',
        easingcss3: 'ease-in-out',


        scrollOverflow: true,
        scrollOverflowOptions: {
            mouseWheel: true,
            scrollbars: false,
            startX: 0,
            startY: 0

        },
        responsiveHeight: 600,




    });

    $("#scrollup").on("click", function() {
        //$.fn.fullpage.moveSectionUp();
        $.fn.fullpage.moveTo(3);
    });
});



// $(function() {
// var waypoints = $('#handler-first').waypoint(function(direction) {
//     alert(direction);
//     console.log(this.element.id + ' hit 25% from top of window')
// });
// })


//固定头部 导航 插件
// require("./tmstickup/tmstickup.js");
// $(function() {
// $("#menu").TMStickUp({});
// });


require("./tweenmax/tweenmax.min.js");
// $(function() {
// TweenMax.from($('.section2'), 0.25, {
//     delay: 1,
//     css: {
//         left: '-100%',
//         immediateRender: true
//     },
//     ease: Expo.easeOut
// })
// })


require("./superScrollorama/jquery.superScrollorama.js");

$(document).ready(function() {

    // TweenMax.to($('.section2'), 1, {
    //     delay: 2,
    //     css: {
    //         opacity: 0
    //     }
    // });

    var controller = $.superscrollorama({ //平时滚动条才触发 fullpage不触发
        isVertical: true,
        triggerAtCenter: false,
        playoutAnimations: true,
        reverse: true
    });
    controller.addTween('.section2',
        TweenMax.to($('.section2'), 1, {
            delay: 0,
            css: {
                opacity: 0
            }
        }));
});
