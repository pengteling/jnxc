require("./../sass/bmap.scss");
require("jquery");

//require("bootstrap-sass!./../bootstrap-sass.config.js"); //载入 bootstrap-sass 可以自定义  配置文件 bootstrap-sass.config.js
require("./../bower_components/bootstrap/dist/css/bootstrap.min.css"); //传统载入
require("./../bower_components/bootstrap/dist/js/bootstrap.min.js");

var Location = require("./bmap/bmap.js");

//console.log(Location);

var allProvinces = Location.getProvinces();


//var allCities = Location.getCities(23);

//console.log(allCities);


var allDistrict2 = Location.getDistrict2(268);

console.log(allDistrict2);



// var pclist = Location.getPC("内江市");

// console.log(pclist);

var map;

$(function() {

initMap();
//$(".provinces ul li [data-id=23]").click();


// 鼠标在经销商列表上滚轮只对列表生效
$("#dealer-wrap").mouseenter(function(ev) {
    map.disableScrollWheelZoom();

});
// 鼠标移出经销商列表地图缩放生效
$("#dealer-wrap").mouseleave(function() {
    map.enableScrollWheelZoom();
});


for (var i = 0; i < allProvinces.length; i++) {
    $(".provinces").find("ul").append("<li><a data-id='" + allProvinces[i].id + "'>" + allProvinces[i].text + "</a></li>");
}



$(".provinces ul").on("click", "li", function(e) {
    var currentTarget = $(e.currentTarget);
    province = currentTarget.text();
    provinceId = currentTarget.find('a').attr('data-id');

    $('.provinces').find('span').attr('data-province', provinceId);
    $(".provinces").find('span').text(province); //设置默认的市

    //alert(province);
    $(".cities").find("ul li").remove();
    var allCities = Location.getCities(provinceId);
    for (var i = 0; i < allCities.length; i++) {
        $(".cities").find("ul").append("<li><a data-id='" + allCities[i].id + "'>" + allCities[i].text + "</a></li>");
    }

    $(".cities").find('span').text(allCities[0].text); //设置点击省后显示的市
    cityId = allCities[0].id; //设置击省后显示的id
    $(".cities").find('span').attr('data-city', cityId);
    map.centerAndZoom(allCities[0].text, 11); //地图展示初始化的市

    showcity(allCities[0].text);
    // data = Location.getList(allCities[0].text);
    // console.log(data);



    // map.clearOverlays(); //清空地图上的点
    // $("#dealer-item").html(""); //清空列表

    // if (data.length <= 0) { //无数据的情况
    //     $("#dealer-item").append($('<p style="font-size: 18px;color: #a6a6a6;margin-top:20px;">' +
    //         '该地区暂无经销商</p></div>'));
    // }
    // data.forEach(function(e) {

    //     console.log(e.name);




    //     point = new BMap.Point(e.wgs[0].lng, e.wgs[0].lat);


    //     mk = new BMap.Marker(point, {
    //         icon: myIcon
    //     });
    //     map.addOverlay(mk);

    //     addClickHandler(e.name, mk, point);
    //     //map.panTo(point);


    //     var temphtml = "";
    //     temphtml += '<li class="dealer-info">';
    //     temphtml += ' <div class="marker"></div>';
    //     temphtml += ' <div class="dealer-content">';
    //     temphtml += '     <h5 class="company" onclick="onMarker($(this))" data-wgs="{&quot;lng&quot;:&quot;105.837694&quot;,&quot;lat&quot;:&quot;30.157718&quot;}">' + e.name + '</h5>';
    //     temphtml += '    <p class="addrTag">地址：' + e.address + '</p>';
    //     temphtml += '     <p class="telTag">电话：' + e.tel + '</p>     ';


    //     temphtml += ' </div>';
    //     temphtml += '</li>';

    //     $("#dealer-item").append($(temphtml));

    // });


});

$(".cities").on("click", "li", function(e) {
    var currentTarget = $(e.currentTarget);
    city = currentTarget.text();
    cityId = currentTarget.find('a').attr('data-id');

    $(".cities").find('span').text(city); //设置点击省后显示的市

    $(".cities").find('span').attr('data-city', cityId);
    map.centerAndZoom(city, 11); //地图展示初始化的市

    showcity(city);

});


//$(".provinces ul li [data-id=23]").parent().click();

});


function showcity(cityName) {
    data = Location.getList(cityName);
    //console.log(data);



    map.clearOverlays(); //清空地图上的点
    $("#dealer-item").html(""); //清空列表

    if (data.length <= 0) { //无数据的情况
        $("#dealer-item").append($('<p style="font-size: 18px;color: #a6a6a6;margin-top:20px;">' +
            '该地区暂无经销商</p></div>'));
    }
    data.forEach(function(e) {

        //console.log(e.name);




        point = new BMap.Point(e.wgs[0].lng, e.wgs[0].lat);


        mk = new BMap.Marker(point, {
            icon: myIcon
        });
        map.addOverlay(mk);

        addClickHandler(e.name, mk, point);
        //map.panTo(point);


        var temphtml = "";
        temphtml += '<li class="dealer-info">';
        temphtml += ' <div class="marker"></div>';
        temphtml += ' <div class="dealer-content">';
        temphtml += '     <h5 class="company" onclick="onMarker($(this))" data-wgs="{&quot;lng&quot;:&quot;105.837694&quot;,&quot;lat&quot;:&quot;30.157718&quot;}">' + e.name + '</h5>';
        temphtml += '    <p class="addrTag">地址：' + e.address + '</p>';
        temphtml += '     <p class="telTag">电话：' + e.tel + '</p>     ';


        temphtml += ' </div>';
        temphtml += '</li>';

        $("#dealer-item").append($(temphtml));

    });
    var deawrap = document.getElementById("dealer-wrap");
    map.getContainer().appendChild(deawrap); // 将经销商列表div追加到地图上
}

function initMap() {
    // myIcon = new BMap.Icon('http://mall.changan.com.cn/ca-web/rock/img/marker.png?ver=20160701015225', new BMap.Size(16, 23), {
    //     anchor: new BMap.Size(8, 12) // 指定定位位置
    // });
    // deawrap = document.getElementById("dealer-wrap");
    // map = new BMap.Map("dealer-map");
    // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    // myGeo = new BMap.Geocoder();
    // map.enableScrollWheelZoom(); //启动鼠标滚轮

    map = new BMap.Map("dealer-map");
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    })); //2D图，卫星图
    map.addControl(new BMap.OverviewMapControl());
    //  map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    //map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 12);

    // function myFun(result) {
    //     cityName = result.name; //baidu地图接口得到现在所在市
    //     alert(cityName);
    //     map.centerAndZoom(cityName, 12); //地图渲染当前城市
    // //setLocation(cityName);//调用方法根据市填写省份的名字
    // }

    // var myCity = new BMap.LocalCity();
    // myCity.get(myFun);


    function myFun(result) {
        var cityName = result.name;
        map.setCenter(cityName);
        //alert("当前定位城市:" + cityName);

        //setLocation(cityName);//调用方法根据市填写省份的名
        showcity(cityName);


    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);


    // 创建地址解析器实例     
    map.enableScrollWheelZoom(); //启动鼠标滚轮

    var myGeo = new BMap.Geocoder();

    opts = {
        width: 300, // 信息窗口宽度
        height: '', // 信息窗口高度
        title: '', // 信息窗口标题
        enableMessage: false // 设置允许信息窗发送短息
    };

    myIcon = new BMap.Icon('images/marker.png?ver=20160701015225', new BMap.Size(16, 23), {
        anchor: new BMap.Size(8, 12) // 指定定位位置
    });
}

window.onMarker = function(e) {
var n = e.parents('.dealer-info').index();
$(".BMap_Marker").eq(n).click();
}

//console.log(Location.getList());

// 点击地图marker处理
function addClickHandler(content, marker, pointer) {
    marker.addEventListener("click", function(e) {
        map.panTo(pointer); //移动到地图中心
        openInfo(content, e)
    });
}


// 打开信息提示窗口
function openInfo(content, e) {
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var marker = new BMap.Marker(point, {
        icon: myIcon
    }); // 创建标注

    var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point); // 开启信息窗口

}
//  })
//})  


