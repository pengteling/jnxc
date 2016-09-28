if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./yfh/index.html');

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
var isPop = false;
var current_sec = 0; //当前第几场景
var tl_enter = new TimelineMax();

$current_sec = $('.sec').eq(current_sec);


coverEnterAnimation(); //进场动画
lightAnimation();
initAddress(); //主导航，点击载入子页面
initStage(); //舞台上元件,响应式处理


// 常用小场景切换动画
function secAnimation() {
    console.log("小场景切换动画");
    tl_enter
        .set(".ajax_cont", {
            "alpha": 0
        })
        .to(".ajax_cont", 1, {
            "alpha": 1,
            ease: Cubic.easeOut,
            delay: .2
        })
        .staggerFromTo($current_sec.children('.fr').children(), .5, {
            alpha: 0,
            top: 100
        }, {
            alpha: 1,
            top: 0,
            ease: Cubic.easeOut
        }, 0.1)
        .fromTo($current_sec.children('.fl').children(), 0.8, {
            scale: 1.8,
            alpha: 0
        }, {
            scale: 1,
            alpha: 1,
            ease: Cubic.easeOut
        }, "-=0.6")
    ;
}

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
            toggleSubnav(e_sec); //将副导航切到初始子栏目


        });
    });
}
function toggleSubnav(sec) {
    secAnimation();
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
        .set(".light", { //进场动画进行到大背景完全展现才让光晕出现
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


function lightAnimation() {
    TweenMax.from($('#light1'), 2, {
        scale: 0.6,
        alpha: 0.2,
        rotation: 480,
        repeatDelay: 0.5,
        yoyo: true,
        repeat: -1,
        ease: Circ.easeOut
    });
    TweenMax.fromTo($('#light2'), 8, {
        scale: 1,
        rotation: -15
    }, {
        scale: 4,
        alpha: 0,
        rotation: 55,
        transformOrigin: "42.31% 6.29%",
        repeat: -1,
        ease: Circ.easeOut
    });
    TweenMax.fromTo($('#light3'), 6, {
        alpha: 0.3,
        scale: 0.3
    }, {
        alpha: 1,
        scale: 1,
        top: 240,
        repeat: -1,
        ease: Linear.easeNone
    });
    TweenMax.fromTo($('#light4'), 6.3, {
        alpha: 0.3,
        scale: 0.3
    }, {
        alpha: 1,
        scale: 2,
        top: 240,
        repeat: -1,
        ease: Linear.easeNone
    });
    TweenMax.fromTo($('#light5'), 6.4, {
        alpha: 1,
        scale: 0.3
    }, {
        alpha: 0,
        scale: 1,
        top: 120,
        repeat: -1,
        ease: Linear.easeNone
    });
    TweenMax.fromTo($('#light6'), 6, {
        alpha: 1,
        scale: 0.3
    }, {
        alpha: 0,
        scale: 1,
        top: 120,
        repeat: -1,
        ease: Linear.easeNone
    });
}

function initStage() {
    // 圆形导航按钮行为

    tl_nav = new TimelineMax({
        paused: true,
        onReverseComplete: function() {
            $('.btn_nav .arr').removeClass('arr_down').addClass('arr_up');
        },
        onComplete: function() {
            $('.btn_nav .arr').removeClass('arr_up').addClass('arr_down');
        },
        onStart: function() {},
    });

    tl_nav
        .to($('.btn_nav'), .4, {
            'bottom': 24
        })
        .fromTo('nav.main', .2, {
            bottom: -200
        }, {
            bottom: 120
        })
        .fromTo($('nav a:eq(2)'), .3, {
            alpha: 0
        }, {
            alpha: 1,
            left: "-=10"
        }, "-=00")
        .fromTo($('nav a:eq(3)'), .3, {
            alpha: 0
        }, {
            alpha: 1,
            right: "-=10"
        }, "-=.3")

        .fromTo($('nav a:eq(1)'), .3, {
            alpha: 0
        }, {
            alpha: 1,
            left: "-=10"
        }, "-=.2")
        .fromTo($('nav a:eq(4)'), .3, {
            alpha: 0
        }, {
            alpha: 1,
            right: "-=10"
        }, "-=.3")

        .fromTo($('nav a:eq(0)'), .3, {
            alpha: 0
        }, {
            alpha: 1,
            left: "-=10"
        }, "-=.2")
        .fromTo($('nav a:eq(5)'), .3, {
            alpha: 0
        }, {
            alpha: 1,
            right: "-=10"
        }, "-=.3")

        .fromTo('.nav_mask', .2, {
            bottom: -200
        }, {
            bottom: 0
        }, "-=1")
    ;



    $('.btn_nav').on('click', function() {
        if (tl_nav.progress() == 0) {
            tl_nav.play();
        } else {
            tl_nav.timeScale(1.5);
            tl_nav.reverse();
        }
    });

    $('nav.main a').on('click', function() {

        setTimeout(function() {
            tl_nav.timeScale(1.5);
            tl_nav.reverse();
        }, 400);
    });


    //免责声明弹窗
    $('.mz').on('click', function() {
        var pop_id = $(this).data("pop");
        pop_open(pop_id);
    });

    //交通导航弹窗
    $('.guide').on('click', function() {
        var pop_id = $(this).data("pop");
        pop_open(pop_id);
    });

    $('.i_weixin').on('mouseover', function() {
        $('#ewm').addClass('active');
    });
    $('.i_weixin').on('mouseout', function() {
        $('#ewm').removeClass('active');
    });

    // 滚轮行为
    $('body').on('mousewheel', function(event) {
        if (isPop) {
            return false;
        }

        console.log("滚轮滚动");

        if ((event.deltaY == 1) && (current_sec > 0)) {
            // 向上滚动
            current_sec--;
            toggleSubnav(current_sec);
            return false;
        }

        if ((event.deltaY == -1) && (current_sec < arrSC[current_chapter].sub_leng - 1)) {
            // 向下滚动
            current_sec++;
            toggleSubnav(current_sec);
            return false;
        }
    });

    $('body').on('click', '.btn_close', function() {
        $pop = $(this).parent();
        pop_close($pop);
    });

    $('body').on('click', '.pop_mask', function() {
        pop_close(pop_current);
    });
}


function pop_open(str_pop_id) {
    isPop = true;
    $('.pop_mask').show();
    var $obj = $("#" + str_pop_id);
    $obj.slideDown('300', function() {
        pop_current = $obj;
    });
}

function pop_close($id) {
    isPop = false;
    $('.pop_mask').hide();
    $id.slideUp('800', function() {});
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


    $('#music').append('<audio id="bg_music" loop="loop"><source src="' + $('#musicsource').val() + '"></audio>');
    bg_audio = $("#bg_music")[0];
    bg_audio.play(); //播放背景音乐

    var isPlaying = true;
    $('#music').on('click', function() {
        if (isPlaying) {
            //关掉音乐
            bg_audio.pause();
            $(this).addClass("off");
        } else {
            bg_audio.play();
            $(this).removeClass();
        }

        isPlaying = !isPlaying;
    });


});
});


