function createArray()
		{
			var newArray;
			var outputString = "Your array was: [";
			
			for (var i=0; i<5; i++){
				var idString = "a"+(i+1);
				console.log(idString);
				console.log(document.getElementById(idString));
				newArray[i].value = document.getElementById(idString).value;
				outputString += newArray[i];
			}
			
			outputString = "]. What a beautiful array!"
			

			document.getElementById("output").value=outputString;


		}


		