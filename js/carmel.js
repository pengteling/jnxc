if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../carmel.html');
//require("./../sass/carmel.scss");
}
;



require("jquery");
require("./pJqueryAppearAnimateCSS3/jac.js"); //动画
//require("./smoothscroll/smoothscroll.js");

//require('imports?$=jquery!./smoothscroll/smoothscroll.js');
//require('./waypoints/jquery.waypoints.min.js');


//fullpage 加载列表


require("./../sass/carmel.scss");
$(function() {
$(".togl").click(function() {
    $(this).toggleClass("open");
});
$(".togl").click(function() {
    $("nav ul").toggleClass("show");
});
$(window).scroll(function() {
    $(".togl").removeClass("open");
    $("nav ul").removeClass("show");
});
});

//require("./headroom/headroom.min.js");
require("script!./headroom/headroom.min.js");
( function() {
var header = document.querySelector("header");
new Headroom(header, {
    tolerance: {
        down: 1,
        up: 1
    },
    offset: 10,
    classes: {
        initial: "animated",
        pinned: "slideDown",
        unpinned: "slideUp",
        top: "headroom--top",
        notTop: "headroom--not-top"
    }
}).init();
}());

$(function() {
$(".frm form").submit(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $.post("email.asp", $(".frm form").serialize(), function(data, status) {
        if (status == "success") {
            alert("thanks for your submit, we'll contact you later");
        } else {
            alert("wrong" + status);
        }
    })
});

});

