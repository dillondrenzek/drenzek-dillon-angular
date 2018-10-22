var answer = 7;
			var guess = 1;
			var attempt = 0;
			
			while(guess != answer){
				attempt ++;
				guess = prompt("What is a number between 1-20?", "Type your guess");
				
				if (attempt == 3){
					document.write("Try 7.")
				}

				if (attempt == 5){
					document.write("The Answer was 7.")
					break;
				}
				
				if (guess == answer){
					alert("Awesome!");
					break;
				}
				else{
					alert("no. it's not " + guess+".");

				}
			}