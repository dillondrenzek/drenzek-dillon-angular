$(document).ready(function () {
	
	var isolationMode = true;
	var galleryItems = $(".gallery-item").get();

	
	$(".gallery-item").hover(function () {
		if (isolationMode) {
			for (var i = 0; i < galleryItems.length; i++) {
				var title = $(galleryItems[i]).children(".title-container");
				title.toggleClass("dimmed");
			};
			$(this).children(".title-container").removeClass("dimmed");
		}
	}, function(){
		if (isolationMode) {
			$(".dimmed").toggleClass("dimmed");
		}
	});


	$(".unhide").hover(function (){
		if (isolationMode) {
			$(this).siblings(".title-container").addClass("title-correction");
			$(".dimmed").toggleClass("dimmed");
		}
	}, function(){
		if (isolationMode) {
			for (var i = 0; i < galleryItems.length; i++) {
				if ($(this) != $(galleryItems[i])) {
					var title = $(galleryItems[i]).children(".title-container");
					title.toggleClass("dimmed");
				}
			};
			$(this).children(".title-container").removeClass("dimmed");
			$(this).siblings(".title-container").removeClass("title-correction");
		}
	});


	$("#iso.toggle").click(function() {
		$(this).children("span").toggleClass("on");
		$(".unhide").toggle();
		isolationMode = !isolationMode;
	});








});