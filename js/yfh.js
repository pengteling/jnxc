if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../yfh.html');

}
;
require("./../sass/yfh.scss");
require("jquery");
require("./mousewheel/jquery.mousewheel.js");
require("./jqueryAddress/jquery.address-1.6.js");
require("./TweenMax/tweenmax.min.js");
require("./swiper/css/swiper.min.css");
require("./swiper/js/swiper.jquery.min.js");


$(function() {
//定义ajax数组 ajax网址
var arrSC = [
    {
        cn: "首页",
        en: "cover",
        sub_leng: 1,
        tit: "云峰湖官网	- 首页",
        url: "./ajax_0.html"
    },
    {
        cn: "云峰湖",
        en: "yfh",
        sub_leng: 6,
        tit: "云峰湖官网	- 云峰湖",
        url: "./ajax_1.html"
    },
    {
        cn: "住假",
        en: "holiday",
        sub_leng: 6,
        tit: "云峰湖官网	- 住假",
        url: "./ajax_2.html"
    },
    {
        cn: "体验",
        en: "experience",
        sub_leng: 1,
        tit: "云峰湖官网	- 体验",
        url: "./ajax_3.html"
    },
    {
        cn: "规划",
        en: "plan",
        sub_leng: 3,
        tit: "云峰湖官网	- 规划",
        url: "./ajax_4.html"
    },
    {
        cn: "运营",
        en: "operate",
        sub_leng: 4,
        tit: "云峰湖官网	- 运营",
        url: "./ajax_5.html"
    },
    {
        cn: "招商",
        en: "invest",
        sub_leng: 5,
        tit: "云峰湖官网	- 招商",
        url: "./ajax_6.html"
    }
];
var ww = $(window).width();
var hh = $(window).height();
var e_path = "index"; //当前地址
var e_sec; //当前场景 如 ?sec=0 
var _chapter;


coverEnterAnimation(); //进场动画
initAddress(); //主导航，点击载入子页面

function initAddress() {
    $.address.strict(false); // 否则path前面多个/
    $.address.change(function(e) {
        if ((e.path) == "") {
            console.log("不处理空链接");return false;
        }

        e_path = e.path;
        e_sec = $.address.queryString().substr(4, 1);
        if (e_sec) {
            current_sec = parseInt(e_sec)
        }

        // 通过e.path在上面的数组中匹配到章节号
        $.grep(arrSC, function(val, index) {
            if (val.en == e.path) {
                _chapter = parseInt(index); //切换章节号
                return index;
            }
        });

        $.address.title(arrSC[_chapter].tit); //改变<title>
        // 载入栏目页面
        ajax_target = arrSC[_chapter].url + " .ajax_cont";
        $('.ajax_wrap').load(ajax_target, function() {
            current_chapter = _chapter; //载入完成后才切换当前章节号
            $('body').attr("id", arrSC[_chapter].en); //大栏目切换把body做记号
            $(window).unbind("resize");
            //toggleSubnav(e_sec); //将副导航切到初始子栏目

        });
    });
}
function coverEnterAnimation() {
    console.log("coverEnterAnimation");
    // 封面进场动画
    tl_cover_enter = new TimelineMax({
        paused: true,
        onStart: function() {},
        onUpdate: function() {
            progress = (tl_cover_enter.progress() * 100).toFixed(0);
            if (progress < 50) {
                $('#loading').text((progress * 2).toFixed(0) + "%");
            } else {
                if ($('#loading').is(":visible")) {
                    $('#loading').text("100%");
                }
            }

        }
    });

    $(".v0").css("clip", "rect(0px," + ww / 2 + "px," + hh + "px," + ww / 2 + "px)");
    $(".v1").css("clip", "rect(0px, 0px," + hh + "px,0px)");

    tl_cover_enter
        .to($('.v0'), 1, {
            'clip': "rect(0px, " + ww + "px," + hh + "px, 0px)",
            ease: Cubic.easeOut
        })
        .to($('.v1'), 2, {
            'clip': "rect(0px, " + ww + "px," + hh + "px, 0px)",
            ease: Cubic.easeOut
        })
        .to($('.v2'), 2, {
            'alpha': 1,
            ease: Cubic.easeIn
        }, "+=0")
        .to($('.v3'), 1.1, {
            'alpha': 1,
            ease: Cubic.easeIn
        }, "-=0")
        .to("#loading", 0.4, {
            alpha: 0,
            top: 30
        })
        .to($('.logo'), 0.4, {
            "top": 0
        }, "-=.4")
        .to($('.v4'), 2.8, {
            'alpha': 1,
            ease: Cubic.easeIn
        }, "-=.3")
        .set(".light", {
            "display": "block"
        })

        .to($('.cover_md0'), .8, {
            'top': 0,
            "alpha": 1
        })
        .to($('.cover_md1'), .8, {
            'top': 0,
            "alpha": 1
        }, "-=.8")

        .to($('.trafic'), 0.5, {
            "top": "20"
        })
        .to($('.menu'), 0.5, {
            "top": "20"
        }, "-=0.5")
        .to($('#order_bar'), 0.5, {
            "alpha": 1,
            "right": "-230"
        }, "-=0.5")
        .to($('.foot'), 0.5, {
            "bottom": "0"
        }, "-=0.5")
        .to($('.btn_nav'), 0.5, {
            "alpha": 1,
            "bottom": "-40"
        }, "-=1")
        .to($('.skip'), 1, {
            "alpha": 0,
            "bottom": "-40"
        }, "-=1")
    ;

}


/*图片载入完成*/
$(window).load(function() {
    console.log(e_path);
    if (e_path == "index") {
        tl_cover_enter.progress(0);
    } else {
        tl_cover_enter.progress(1);
    }
    tl_cover_enter.play();
});


});


