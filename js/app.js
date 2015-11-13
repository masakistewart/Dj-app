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
		paragraph: "Dj Matt In The Hatt was born and raised a San Francisco Native. Always had a passions for music and wanted to be a Dj. He launched his music carreer while attending Arizona State University and has been a major success. Booked up most nights during the week. Knows the Buisness side of things and appreciates having succinct and proffessional buisness dealings!",
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
			tracks.forEach(function(that){
				console.log(that.uri)
				SC.oEmbed(that.uri, {
					element: $("#target")[0]
				});
			});
		})
	})


}