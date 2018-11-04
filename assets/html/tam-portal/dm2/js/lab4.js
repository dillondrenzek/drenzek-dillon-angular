function printInfo()
		{
			var info;

			document.getElementById("output").value="";

			info = document.getElementById("name").value;

			document.getElementById("output").value = "Hello, " + info + "!" + "\n";



			if(document.getElementById("pizza").checked){
				document.getElementById("output").value += "You really like " + document.getElementById("pizza").value + ", don't you?" + "\n";
			}
			if(document.getElementById("burgers").checked){
				document.getElementById("output").value += "You really like " + document.getElementById("burgers").value + ", don't you?" + "\n";
			}
			if(document.getElementById("icecream").checked){
				document.getElementById("output").value += "You really like " + document.getElementById("icecream").value + ", don't you?" + "\n";
			}

			if(document.getElementById("male").checked==true){
				document.getElementById("output").value += "And you are a guy.\n";
			}
			if (document.getElementById("female").checked==true){
				document.getElementById("output").value += "And you are a lady.\n";
			}
		}


		