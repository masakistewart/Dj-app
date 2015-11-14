(function(){
var app = angular.module("mattApp", []);

var carouselImages = [{
		image: [ "images/mattdj2.jpg"]
}, {
	image: ["images/mattdj1.jpg"]
}, {
	image: ["images/10157298_1435355380040035_738409028_n.jpg"]
}];

app.controller('CarouselController', function(){
	this.products = carouselImages;
});
	

var biography  = {
		title: "Bio",
		paragraph: "Organic four loko food truck asymmetrical. Church-key kitsch food truck gluten-free. Migas artisan drinking vinegar leggings franzen lomo. Butcher artisan pickled, helvetica cold-pressed tacos seitan austin keffiyeh you probably haven't heard of them plaid health goth pug. Trust fund selvage readymade, gastropub ethical narwhal kogi artisan. Franzen swag authentic, sustainable deep v tote bag meh banjo biodiesel. Franzen pop-up vinyl, pabst yuccie church-key blue bottle sustainable schlitz lomo ramps authentic narwhal bitters marfa.",
		images: ["images/mattdj2.jpg"]
};

var social = {
	images: [ "images/facebook.png", "images/soundcloud.png", "images/instagram.png" ]
};

var promopics = { images: ["images/promopic1.jpg", "images/promopic2.jpg", "images/promopic3.jpg", "images/promopic4.jpg"] };

app.controller('PromoController', function(){
	this.product = promopics;
});

app.controller('SocialController', function(){
	this.product = social;
});

app.controller('BioController', function(){
	this.product = biography;
});

})();

window.onload = function(){
	// INSTAGRAM
// 	var instaClientID = '97c1280b6c1c428da71d74fe5b7aed8c';
// 	var testRequest = 'https://api.instagram.com/v1/users/matt_inthehat/?access_token=
// ' + instaClientID;
// 	var initialInsta = 


	// SOUNDCLOUD API REQUESTS
	SC.initialize({
		client_id: '193e028621166a2a5d132da654750478'
	})

	var client_id = '193e028621166a2a5d132da654750478';
	var mattsID;
	var getMattID = $.ajax({
		type: "GET",
		url: "http://api.soundcloud.com/users/m_i_t_h?client_id="+client_id
	});

	getMattID.done(function(data){
		mattsID = data.id;

		var getMattTracks = $.ajax({
			type: 'GET',
			url: 'http://api.soundcloud.com/users/' + mattsID + '/tracks?client_id=' + client_id
		})

		getMattTracks.done(function(tracks){
			console.log(tracks);
			for (var i = 0; i < tracks.length; i++) {
				SC.oEmbed(tracks[i].uri, {
					element: $('#target'+i)[0],
					maxheight: 166,
					iframe: true
				});
			};
		})

		// SC.get('/users/' + mattsID).then(function(data){
		// 	console.log(data);
		// })
	})

	


}