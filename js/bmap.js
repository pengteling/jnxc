require("./../sass/bmap.scss");
require("jquery");

var Location = require("./bmap/bmap.js");

//console.log(Location);

var allProvinces = Location.getProvinces();
for (var i = 0; i < allProvinces.length; i++) {
    $(".provinces").find("ul").append("<li><a data-id='" + allProvinces[i].id + "'>" + allProvinces[i].text + "</a></li>");
}

var allCities = Location.getCities(23);

//console.log(allCities);


var allDistrict = Location.getDistrict(268);

console.log(allDistrict);