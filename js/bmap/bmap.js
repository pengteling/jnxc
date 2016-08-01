var area = require("json!./area.json"); //省市区数据
//console.log(area.data);
var list = require("json!./list.json"); //4S店数据
//console.log(list);

exports.getList = function(key) {
return list.data.reduce(function(r, v) {

    if (v['name'].indexOf(key) >= 0 || v['address'].indexOf(key) >= 0) {
        //if (v['name'].length > 10) {
        //console.log(v['name'].indexOf);
        r.push({
            name: v['name'],
            wgs: v['wgs'],
            tel: v['tel'],
            address: v['address']
        });
    }
    ;
    return r;
}, []);
}

exports.getProvinces = function() {
//console.log(area);
return area.data.reduce(function(r, v, index) {
    r.push({
        id: v['areaid'] + "",
        text: v['areaname'],
        index: index
    });
    return r;
}, []);
}

//console.log(Location.getProvinces());

//return Location;


exports.getCities = function(pid) {
//console.log(area);
return area.data.reduce(function(r, v) {
    r[v.areaid] = v.al.reduce(function(result, value) {
        result.push({
            id: value['areaid'] + "",
            text: value['areaname']
        });
        return result;
    }, []);
    return r;
}, [])[pid];

}


//根据城市查下属县区
exports.getDistrict = function(cid) {
//console.log(area);
// return area.data.reduce(function(r1, v1) {

//      v1.al.reduce(function(r2, v2) {

//          r2[v2.areaid] = v2.al.reduce(function(r3, v3) {
//             r3.push({
//                 id: v3['areaid'] + "",
//                 text: v3['areaname']
//             });
//             return r3;
//         }, []);

//     }, []);


// }, []);


return area.data.reduce(function(result, value) {
    value['al'].reduce(function(r, v) {
        result[v.areaid] = v['al'].reduce(function(r1, v1) {
            r1.push({
                id: v1['areaid'] + "",
                text: v1['areaname']
            });
            result[v1['areaid']] = {
                id: v1['areaid'] + "",
                text: v1['areaname']
            };
            return r1;
        }, []);
    }, result);
    return result;
}, {})[cid];

}

//根据城市查下属县区
exports.getDistrict2 = function(cid) {
return area.data.reduce(function(result, value) {

    value['al'].reduce(function(r, v) {

        result[v.areaid] = v['al'].reduce(function(r1, v1) {
            r1.push({
                id: v1['areaid'],
                txt: v1['areaname']
            });
            return r1;
        }, [])
        return r;
    }, []);
    return result;
}, [])[cid];
}


// var temp = area.data.reduce( function(result, value){ 

//     result[value.areaid] = value.al;
//     return result;
// },{});
// console.log(temp);

//根据某个市 查出 某省+某市  用于定位于某城市后，下拉框自动选择某省 和某市
exports.getPC = function(city) {
return area.data.reduce(function(r, v) {
    v['al'].reduce(function(r1, v1) {
        r[v1.areaname] = {
            pid: v1['areaid'],
            p_txt: v1['areaname'],
            cid: v['areaid'],
            c_txt: v['areaname']
        };
        return r1;
    }, []);
    return r;
}, [])[city];
};