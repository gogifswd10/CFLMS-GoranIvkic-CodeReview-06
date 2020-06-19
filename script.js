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
function blog() {
    var location = [];
    var Location = /** @class */ (function () {
        function Location(city, zip, address, image) {
            this.city = '';
            this.zip = '';
            this.address = '';
            this.image = '';
            this.city = city;
            this.zip = zip;
            this.address = address;
            this.image = image;
            // location.push(this);
        }
        Location.prototype.displayLocation = function () {
            return "<div image src=\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li> " + this.city + " </li>\n\t\t\t\t\t\t\t<li> " + this.zip + " </li>\n\t\t\t\t\t\t\t<li> " + this.address + " </li>\n\t\t\t\t\t\t\t<li> " + this.image + " </li>\n\t\t\t\t\t\t</ul>";
        };
        ;
        return Location;
    }());
    ;
    var Restaurant = /** @class */ (function (_super) {
        __extends(Restaurant, _super);
        function Restaurant(city, zip, address, image, restaurantName, addressOfRest, typeOfFood, web) {
            return _super.call(this, city, zip, address, image) || this;
        }
        ;
        Restaurant.prototype.displayRestaurant = function () {
            return "<ul>\n\t\t\t\t\t\t<li> " + this.restaurantName + "</li>\n\t\t\t\t\t\t<li> " + this.addressOfRest + "</li>\n\t\t\t\t\t\t<li> " + this.typeOfFood + "</li>\n\t\t\t\t\t\t<li> " + this.web + "</li>\n\t\t\t\t\t</ul>";
        };
        ;
        return Restaurant;
    }(Location));
    ;
    var Event = /** @class */ (function (_super) {
        __extends(Event, _super);
        function Event(city, zip, address, image, eventName, eventWeb, eventDate, eventPrice) {
            return _super.call(this, city, zip, address, image) || this;
        }
        ;
        Event.prototype.displayEvent = function () {
            return "<ul>\n\t\t\t\t\t\t<li> " + this.eventName + "</li>\n\t\t\t\t\t\t<li> " + this.eventWeb + "</li>\n\t\t\t\t\t\t<li> " + this.eventDate + "</li>\n\t\t\t\t\t\t<li> " + this.eventPrice + "</li>\n\t\t\t\t\t</ul>";
        };
        ;
        return Event;
    }(Location));
    ;
    var restaurants = new Array();
    restaurants[0] = new Restaurant('ON Restaurant', 'Wehrgasse 8 1050 Vienna 01/5854900', 'japanese-food', 'http://www.restaurant-on.at');
    restaurants[1] = new Restaurant('BioFrische', 'Stutterheimstrasse 6 1150 Vienna 01/9529215', 'bio-food', 'https://biofrische.wien');
    var events = new Array();
    events[0] = new Event('Cats - the Musical', 'http://catsmusical.at', 'Fr., 15.12.2020', '120€');
    events[1] = new Event('Guns´n Roses', 'http://www.gunsandroses.com', 'Sat, 09.06.2020', '95.50€');
    $('bootstrapWrapper').append("<div class=\"Restaurants\"><h1>RESTAURANTS</h1></div><div class=\"Events\"><h1>EVENTS</h1></div>");
    var _loop_1 = function (i) {
        $('.Restaurant').append("<div class = \"restaurantsName_" + i + "\"></div>");
        $('.Restaurant').append("<div class = \"restaurantsAddress_" + i + "\"></div>");
        $('.Restaurant').append("<div class = \"restaurantsFood_" + i + "\"></div>");
        $('.Restaurant').append("<div class = \"restaurantsWeb_" + i + "\"></div>");
        $(".restaurantName_" + i).on('click', function () {
            $(".restaurantAddress_" + i).html("" + restaurants[i].displayRestaurant());
            $(".restaurantTypeOfFood_" + i).html("" + restaurants[i].displayRestaurant());
            $(".restaurantWeb_" + i).html("" + restaurants[i].displayRestaurant());
        });
    };
    for (var i = 0; i < restaurants.length; i++) {
        _loop_1(i);
    }
    ;
    var _loop_2 = function (i) {
        $('.Event').append("<div class = \"eventName_" + i + "\"></div>");
        $('.Event').append("<div class = \"eventWeb_" + i + "\"></div>");
        $('.Event').append("<div class = \"eventDate_" + i + "\"></div>");
        $('.Event').append("<div class = \"eventPrice_" + i + "\"></div>");
        $(".eventName_" + i).on('click', function () {
            $(".eventWeb_" + i).html("" + events[i].displayEvent());
            $(".eventDate_" + i).html("" + events[i].displayEvent());
            $(".eventPrice_" + i).html("" + events[i].displayEvent());
        });
    };
    for (var i = 0; i < events.length; i++) {
        _loop_2(i);
    }
    ;
}
;
