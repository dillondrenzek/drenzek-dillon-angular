
		$(document).ready(function(){

			var dotDimensions = 15; // Square


			// convert game "grid" pixels to absolute pixel number
			function grid(input){
				return input*15;
			} 

			function speed(input){
				return -50*Math.log(input)+200
			}


//-- OBJECTS ---------------------------------------------------

	//-- DOT -----------------------------------------------
			function Dot (x,y,type) {

			//-- initialize
				var dot = $('<div></div>');
				dot.addClass("game-dot");

			//-- ATTRIBUTES --------
				this.x = grid(x);
				this.y = grid(y);
				this.type = type;
				this.height = dotDimensions;
				this.width = dotDimensions;
			//----------------------

			//-- METHODS -----------
				this.movePosition = function(deltaX,deltaY){
					var newX = (this.x);
					var newY = (this.y);

					newX += deltaX;
					newY += deltaY;

					//console.log(newX);
					//console.log(newY);

					this.setX(newX);
					this.setY(newY);
				}
				this.randomPosition = function(){
					var newX = Math.floor((Math.random()*33));
					var newY = Math.floor((Math.random()*33));

					this.setX(newX);
					this.setY(newY);

				}

				this.setX = function(x){
					dot.css("left", grid(x)+"px");
					this.x = x;	
				}
				this.setY = function(y){
					dot.css("top", grid(y)+"px");	
					this.y = y;
				}
				this.setType = function(type){
					this.type = type;

					if (type == "head") {
						dot.toggleClass("snake-dot-head");
					}
					if (type == "body") {
						dot.toggleClass("snake-dot");
					}
					if (type == "tail") {
						dot.toggleClass("snake-dot-tail");
					}
					if (type == "food"){
						dot.toggleClass("food-dot");
					}
				}
				
				this.eraseDot = function(){
					this.remove();
				}

			//----------------------

			// add to window
				$('.game-window').append(dot);

			// change position
				this.setX(x);
				this.setY(y);
				this.setType(type);
				

				//return this;

			} 
	//-- end DOT -------------------------------------------

	//-- SNAKE ---------------------------------------------
			function Snake (x,y) {
				//-- initialize


				//-- ATTRIBUTES --------
				this.x;
				this.y;
				this.direction;
				this.segments;
				this.head;
				this.tail;
				this.speed;
				this.interval;
				this.crashed;

				


				//----------------------

				//-- METHODS -----------
				this.init = function(x,y){
					this.x = grid(x);
					this.y = grid(y);
					this.direction = [1,0];

					this.head = new Dot (x,y,"head");
					this.tail = new Dot (x-2,y,"tail");
					// this.mover = ;


					this.segments = [this.head,
									new Dot (x-1,y,"body"),
									this.tail];

					this.speed = 1;
					//this.timer = 500;

					this.crashed = false;
				}

				this.addSegment = function(){

					var newSegment = new Dot (this.head.x+this.direction[0],this.head.y+this.direction[1],"head");

					this.segments.splice(0,0,newSegment);

				}

				this.moveSnake = function(){
					// length of snake
					var length = this.segments.length;

					var head = this.segments[0];
					var tail = this.segments[length-1];

					// move tail to head
					// position of current head plus direction array
					tail.setX(head.x + this.direction[0]);
					tail.setY(head.y + this.direction[1]);

					// set tail as new Head
					// set tail-1 as new Tail
					this.setHead(this.tail);
					this.setTail(this.segments[length-2]);

					var newHead = this.segments.pop();
					this.segments.splice(0,0,newHead);
					// this.segments.splice()

				}

				this.setHead = function(dot){
					this.head = dot;

				}
				this.setTail = function(dot){
					this.tail = dot;
				}

				this.changeDirection = function(direction){
					switch (direction) {

			    		// left
			            case 'left':
			            	this.direction = [-1,0];
			                break;

		                // up
			            case 'up':
			            	this.direction = [0,-1];
			                break;

		                // right
			            case 'right':
			            	this.direction = [1,0];
			                break;

		                // down
			            case 'down':
			            	this.direction = [0,1];
			                break;
		        	}
				}

				this.increaseSpeed = function(){

					clearInterval(this.interval);

					this.speed++;

					this.interval = setInterval(function(){
						snake.moveSnake();
						snake.checkCollision();
					}, speed(this.speed));

					
				}

				this.checkCollision = function(){

				// FOOD FOUND
					if ((this.head.x == food.x) && (this.head.y == food.y)){

					// increase score
						score++;
						$(".game-score").text(score);

					// move food
						food.randomPosition();

					// add segment to snake
						this.addSegment();

					// increase speed
						this.increaseSpeed();

						console.log(this.speed);
					}

				// HIT THE WALL

					if ((this.head.x >= 33) || (this.head.x < 0) ||
						(this.head.y >= 33) || (this.head.y < 0)){
						clearInterval(this.interval);
						snake.crashed = true;
					}
				}

				this.length = function(){
					return this.segments.length;
				}
				
				this.eraseSnake = function(){
					for (var i = 0; i<this.segments.length; i++){
						segments[i].remove();
					}
				}

				//----------------------

				this.init(x,y);
			}
	//-- end SNAKE -----------------------------------------

			var snake = new Snake(12,20);
			var food = new Dot(20,20,"food");
			var score = 0;
			

			// for testing purposes

			$('button').click(function(){
				//food.movePosition(1,-1);

				if (snake.crashed == true){
					snake.eraseSnake();
					snake = new Snake(12,20);
					food = new Dot(20,20,"food");
					score = 0;
				}
				
				
				if (snake.interval){
					return;
				} else{
					snake.interval = setInterval(function(){
						snake.moveSnake();
						snake.checkCollision();
						}, 500);
					}	
			});
			
//-- KEYDOWN EVENT LISTENERS -------------------------------

			$(document).keydown(function(event){
			    switch (event.keyCode) {

			    		// left
			            case 37:
			            	if(snake.direction == [1,0]){
				            	break;
			            	}
							else{
				            	snake.direction = [-1,0];
				                break;
			                }

		                // up
			            case 38:
			            	if(snake.direction == [0,1]){
				            	break;
			            	}
			            	else{
			            		snake.direction = [0,-1];
								break;
			                }

		                // right
			            case 39:
			            	if(snake.direction == [-1,0]){
				            	break;
			            	}
			            	else{
			            		snake.direction = [1,0];
								break;
								}

		                // down
			            case 40:
			            	if(snake.direction == [0,-1]){
				            	break;
			            	}
			            	else{
			            	snake.direction = [0,1];
			                break;
			                }
		        }
		    });
			
		});

	
