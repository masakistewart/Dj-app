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

 $('#mycarousel').carousel({ interval: 100 });

})();