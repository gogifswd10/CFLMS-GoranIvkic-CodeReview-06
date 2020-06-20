var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arrayLocation = [];
var Location2 = /** @class */ (function () {
    function Location2(city, zip, address, imageName) {
        this.city = '';
        this.zip = '';
        this.address = '';
        this.imageName = '';
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.imageName = imageName;
        arrayLocation.push(this);
    }
    Location2.prototype.display = function () {
        return "<div class=\"row m-2\">\n\t\t\t\t\t\t<div class=\"card\" style=\"width: 25rem\">\n\t\t\t\t\t\t\t\t<img class=\"card-img-top\" style=\"height: 18rem\" src=img/" + this.imageName + " alt=\"Card image cap\">\n\t\t\t \t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t\t<ul class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<li><h2> " + this.city + " <h2></li>\n\t\t\t\t\t\t\t\t\t<li><h5> " + this.zip + " <h5></li>\n\t\t\t\t\t\t\t\t\t<li><h4> " + this.address + " <h4></li>\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-primary btn-md\" href=\"https://www.likealocalguide.com/vienna\" role=\"button\">Vienna City Guide</a>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t  \t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>";
    };
    return Location2;
}());
;
new Location2("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "vienna.jpg");
new Location2("Schönbrunn Park", "1130 Vienna", "Maxingstrasse 13B", "sbr.jpg");
//////////////////////////////////////////////////////////////////////////////////////
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, zip, address, imageName, restaurantName, typeOfFood, phone, web, imageRest) {
        var _this = _super.call(this, city, zip, address, imageName) || this;
        _this.restaurantName = '';
        _this.typeOfFood = '';
        _this.phone = '';
        _this.web = '';
        _this.imageRest = '';
        _this.restaurantName = restaurantName;
        _this.typeOfFood = typeOfFood;
        _this.phone = phone;
        _this.web = web;
        _this.imageRest = imageRest;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"row m-2\">\n\t\t\t\t\t\t\t<div class=\"card\" style=\"width: 25rem\">\n\t\t\t\t  \t\t\t\t\t<img class=\"card-img-top\" style=\"height: 18rem\" src=img/" + this.imageRest + " alt=\"Card image cap\">\n\t\t\t\t \t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t\t\t<ul class=\"text-center\">\n\t\t\t\t\t\t\t\t\t\t<li> " + this.restaurantName + " </li>\n\t\t\t\t\t\t\t\t\t\t<li> Food: " + this.typeOfFood + " </li>\n\t\t\t\t\t\t\t\t\t\t<li> " + this.phone + " </li>\n\t\t\t\t\t\t\t\t\t\t<li> " + this.web + " </li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<a href=\"https://www.likealocalguide.com/vienna/eating\" class=\"btn btn-primary\">Discover Vienna's kitchen!</a>\n\t\t\t\t  \t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>";
    };
    return Restaurant;
}(Location2));
;
new Restaurant('a', 'b', 'c', 'd', 'ON RESTAURANT', 'japanese', 'Wehrgasse 8, 1050 Vienna, 01/5854900', 'http://www.restaurant-on.at', 'on.jpg');
new Restaurant('a', 'b', 'c', 'd', 'BIO-FRISCHE', 'bio-food', 'Stutterheimstrasse 6, 1150 Vienna, 01/9529215', 'https://biofrische.wien', 'bio.jpg');
//////////////////////////////////////////////////////////////////////////////////////
var Event2 = /** @class */ (function (_super) {
    __extends(Event2, _super);
    function Event2(city, zip, address, imageName, eventName2, eventWeb2, eventDate2, eventPrice2, imageEvent2) {
        var _this = _super.call(this, city, zip, address, imageName) || this;
        _this.eventName2 = '';
        _this.eventWeb2 = '';
        _this.eventDate2 = '';
        _this.eventPrice2 = '';
        _this.imageEvent2 = '';
        _this.eventName2 = eventName2;
        _this.eventWeb2 = eventWeb2;
        _this.eventDate2 = eventDate2;
        _this.eventPrice2 = eventPrice2;
        _this.imageEvent2 = imageEvent2;
        return _this;
    }
    Event2.prototype.display = function () {
        return "<div class=\"row m-2\">\n\t\t\t\t\t\t<div class=\"card\" style=\"width: 25rem\">\n\t\t  \t\t\t\t\t\t<img class=\"card-img-top\" style=\"height: 18rem\" src=img/" + this.imageEvent2 + " alt=\"Card image cap\">\n\t\t \t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t\t<ul class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<li> " + this.eventName2 + " </li>\n\t\t\t\t\t\t\t\t\t<li> " + this.eventWeb2 + " </li>\n\t\t\t\t\t\t\t\t\t<li> " + this.eventDate2 + " </li>\n\t\t\t\t\t\t\t\t\t<li> Ticket-price: " + this.eventPrice2 + " </li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<a href=\"https://events.wien.info/de/\" class=\"btn btn-primary\">Discover events in Vienna!</a>\n\t\t\t  \t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>";
    };
    return Event2;
}(Location2));
;
new Event2('a', 'b', 'c', 'd', 'CATS - THE MUSICAL', 'www.catsmusical.at', 'Fr., 15.12.2020', '120€', 'cats.jpg');
new Event2('a', 'b', 'c', 'd', 'GUNS´n ROSES', 'www.gunsandroses.com', 'Sat, 09.06.2020', '95.50€', 'guns.png');
for (var i = 0; i < arrayLocation.length; i++) {
    document.getElementById('wrapper').innerHTML += arrayLocation[i].display();
}
