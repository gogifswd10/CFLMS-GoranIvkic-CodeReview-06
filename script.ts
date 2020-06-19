


function blog() {

let location:Array<any> = [];

	class Location {
		public city: string = '';
		public zip: number = '';
		public address: string = '';
		public image: any = '';
		
		constructor(city: string, zip: number, address: string, image: any) {
			this.city = city;
			this.zip = zip;
			this.address = address;
			this.image = image;
			// location.push(this);
		}
		
		displayLocation() {
			return `<div image src=
						<ul>
							<li> ${this.city} </li>
							<li> ${this.zip} </li>
							<li> ${this.address} </li>
							<li> ${this.image} </li>
						</ul>`;
		};
	};

	class Restaurant extends Location {
		constructor(city: string, zip: number, address: string, image: any, restaurantName: string, addressOfRest: string, typeOfFood: string, web: string) {
			super(city, zip, address, image)	
		};
		displayRestaurant() {
			return `<ul>
						<li> ${this.restaurantName}</li>
						<li> ${this.addressOfRest}</li>
						<li> ${this.typeOfFood}</li>
						<li> ${this.web}</li>
					</ul>`;

		};
	};


	class Event extends Location{
		constructor(city: string, zip: number, address: string, image: any, eventName: string, eventWeb: string, eventDate: string, eventPrice: string) {
			super(city, zip, address, image)	
		};
		displayEvent() {
			return `<ul>
						<li> ${this.eventName}</li>
						<li> ${this.eventWeb}</li>
						<li> ${this.eventDate}</li>
						<li> ${this.eventPrice}</li>
					</ul>`;

		};
	};

	let restaurants: any = new Array(); 
	restaurants[0] = new Restaurant('ON Restaurant', 'Wehrgasse 8 1050 Vienna 01/5854900', 'japanese-food', 'http://www.restaurant-on.at');
	restaurants[1] = new Restaurant('BioFrische', 'Stutterheimstrasse 6 1150 Vienna 01/9529215', 'bio-food', 'https://biofrische.wien');

	let events: any = new Array(); 
	events[0] = new Event('Cats - the Musical', 'http://catsmusical.at', 'Fr., 15.12.2020', '120€');
	events[1] = new Event('Guns´n Roses', 'http://www.gunsandroses.com', 'Sat, 09.06.2020' , '95.50€');
	$('bootstrapWrapper').append(`<div class="Restaurants"><h1>RESTAURANTS</h1></div><div class="Events"><h1>EVENTS</h1></div>`);

	
	for (let i = 0; i < restaurants.length; i++){
		$('.Restaurant').append(`<div class = "restaurantsName_${i}"></div>`);
		$('.Restaurant').append(`<div class = "restaurantsAddress_${i}"></div>`);
		$('.Restaurant').append(`<div class = "restaurantsFood_${i}"></div>`);
		$('.Restaurant').append(`<div class = "restaurantsWeb_${i}"></div>`);

		
	
		$(`.restaurantName_${i}`).on('click', function () {
			$(`.restaurantAddress_${i}`).html(`${restaurants[i].displayRestaurant()}`);
			$(`.restaurantTypeOfFood_${i}`).html(`${restaurants[i].displayRestaurant()}`);
			$(`.restaurantWeb_${i}`).html(`${restaurants[i].displayRestaurant()}`);
		});
	
		
	};
	

	for (let i = 0; i < events.length; i++){
		$('.Event').append(`<div class = "eventName_${i}"></div>`);
		$('.Event').append(`<div class = "eventWeb_${i}"></div>`);
		$('.Event').append(`<div class = "eventDate_${i}"></div>`);
		$('.Event').append(`<div class = "eventPrice_${i}"></div>`);
	
		$(`.eventName_${i}`).on('click', function () {
			$(`.eventWeb_${i}`).html(`${events[i].displayEvent()}`);
			$(`.eventDate_${i}`).html(`${events[i].displayEvent()}`);
			$(`.eventPrice_${i}`).html(`${events[i].displayEvent()}`);
		});
	
	
	};
	
});
