var area = require("json!./area.json"); //省市区数据
//console.log(area.data);
var list = require("json!./list.json"); //4S店数据



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



exports.getDistrict = function(pid) {
//console.log(area);
return area.data.reduce(function(r1, v1) {

    v1.al.reduce(function(r2, v2) {
        //console.log(r2);
        r2[v2.areaid] = v2.al.reduce(function(r3, v3) {
            r3.push({
                id: v3['areaid'] + "",
                text: v3['areaname']
            });
            return r3;
        }, []);

    }, []);


}, []);

}