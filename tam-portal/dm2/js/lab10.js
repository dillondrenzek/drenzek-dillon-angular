// ------------------------
		// Set Slideshow Variables
		// ------------------------

		var changeImageTime = 3000;
 		var fadeTime = 1000;
		var showActive = true;

		// ------------------------

		var int = self.setInterval(slideshow, changeImageTime);

 		$( document ).ready( 
 			function() {
 				$("#slideshow > .picture:gt(0)").hide();

 				$('.pause-button').click(function(){

					if (showActive) {
						clearInterval(int);
						showActive = false;
					} else{
						int = setInterval(slideshow, changeImageTime);
						slideshow();
						showActive = true;
					}
				}); // end pause-button click function
 			}); // end document.ready()
 		
			
		function slideshow(){
			$('#slideshow > .picture:first')
			.fadeOut(fadeTime)
			.next()
			.fadeIn(fadeTime)
			.end()
			.appendTo('#slideshow');
		}	// end slideshow function