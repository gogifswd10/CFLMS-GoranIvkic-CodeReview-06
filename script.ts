let arrayLocation:Array<any> = [];

	class Location2 {
		city: string = '';
		zip: string = '';
		address: string = '';
		imageName: string = '';

		constructor(city, zip, address, imageName) {
			this.city = city;
			this.zip = zip;
			this.address = address;
			this.imageName = imageName;
			arrayLocation.push(this);
		}
		
		display() {
			
			return `<div class="row m-2">
						<div class="card" style="width: 25rem">
								<img class="card-img-top d-sm-none d-md-block" style="height: 18rem" src=img/${this.imageName} alt="Card image cap">
			 				<div class="card-body text-center">
								<ul class="text-center">
									<li><h2> ${this.city} <h2></li>
									<li><h5> ${this.zip} <h5></li>
									<li><h4> ${this.address} <h4></li>
									<a class="btn btn-primary btn-md" href="https://www.likealocalguide.com/vienna" role="button">Vienna City Guide</a>
								</ul>
			  				</div>
						</div>
					</div>`;
			
					
			}

	};

	new Location2("St. Charles Church", "1010 Vienna", "Karlsplatz 1", "vienna.jpg");
	new Location2("Schönbrunn Park", "1130 Vienna", "Maxingstrasse 13B", "sbr.jpg")
	
	
//////////////////////////////////////////////////////////////////////////////////////
	class Restaurant extends Location2 {
		restaurantName: string = '';
		typeOfFood: string = '';
		phone: string = '';
		web: string = '';
		imageRest: string = '';

		constructor(city, zip, address, imageName, restaurantName, typeOfFood, phone, web, imageRest) {
			super(city, zip, address, imageName)
			this.restaurantName = restaurantName;
			this.typeOfFood = typeOfFood;
			this.phone = phone;
			this.web = web;
			this.imageRest = imageRest;	
		}

		display() {
				return `<div class="row m-2">
							<div class="card" style="width: 25rem">
				  					<img class="card-img-top d-sm-none d-md-block" style="height: 18rem" src=img/${this.imageRest} alt="Card image cap">
				 				<div class="card-body text-center">
									<ul class="text-center">
										<li> ${this.restaurantName} </li>
										<li> Food: ${this.typeOfFood} </li>
										<li> ${this.phone} </li>
										<li> ${this.web} </li>
									</ul>
										<a href="https://www.likealocalguide.com/vienna/eating" class="btn btn-primary">Discover Vienna's kitchen!</a>
				  				</div>
							</div>
						</div>`;
			
			}	
					
	};

	new Restaurant('a', 'b', 'c', 'd', 'ON RESTAURANT', 'japanese','Wehrgasse 8, 1050 Vienna, 01/5854900', 'http://www.restaurant-on.at', 'on.jpg');
	new Restaurant('a', 'b', 'c', 'd', 'BIO-FRISCHE', 'bio-food', 'Stutterheimstrasse 6, 1150 Vienna, 01/9529215',  'https://biofrische.wien', 'bio.jpg');

//////////////////////////////////////////////////////////////////////////////////////
	class Event2 extends Location2 {
		eventName2: string = '';
		eventWeb2: string = '';
		eventDate2: string = '';
		eventPrice2: string = '';
		imageEvent2: string = ''; 

		constructor(city, zip, address, imageName, eventName2, eventWeb2, eventDate2, eventPrice2, imageEvent2) {
			super(city, zip, address, imageName)
			this.eventName2 = eventName2;
			this.eventWeb2 = eventWeb2;
			this.eventDate2 = eventDate2;
			this.eventPrice2 = eventPrice2;
			this.imageEvent2 = imageEvent2; 

		}

		display() {
			return `<div class="row m-2">
						<div class="card" style="width: 25rem">
		  						<img class="card-img-top d-sm-none d-md-block" style="height: 18rem" src=img/${this.imageEvent2} alt="Card image cap">
		 					<div class="card-body text-center">
								<ul class="text-center">
									<li> ${this.eventName2} </li>
									<li> ${this.eventWeb2} </li>
									<li> ${this.eventDate2} </li>
									<li> Ticket-price: ${this.eventPrice2} </li>
								</ul>
									<a href="https://events.wien.info/de/" class="btn btn-primary">Discover events in Vienna!</a>
			  				</div>
						</div>
					</div>`;
			
			}	
	
	};
	
	new Event2('a', 'b', 'c', 'd', 'CATS - THE MUSICAL', 'www.catsmusical.at', 'Fr., 15.12.2020', '120€', 'cats.jpg');
	new Event2('a', 'b', 'c', 'd', 'GUNS´n ROSES', 'www.gunsandroses.com', 'Sat, 09.06.2020' , '95.50€', 'guns.png');


	for (let i=0; i<arrayLocation.length; i++) {

	document.getElementById('wrapper').innerHTML += arrayLocation[i].display()
}