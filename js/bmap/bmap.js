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


return area.data.reduce( function(result, value){               
            value['al'].reduce(function(r, v){
                result[v.areaid] = v['al'].reduce( function(r1, v1){
                    r1.push({id:v1['areaid']+"", text:v1['areaname']});
                    result[v1['areaid']] = {id:v1['areaid']+"", text:v1['areaname']};
                    return r1;
                },[]);
            },result);
            return result;
        },{})[cid];

}



// var temp = area.data.reduce( function(result, value){ 

//     result[value.areaid] = value.al;
//     return result;
// },{});
// console.log(temp);