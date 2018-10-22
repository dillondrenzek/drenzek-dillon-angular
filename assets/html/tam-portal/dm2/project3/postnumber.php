<!doctype html>
<html>
<head>

<!-- Page Details -->

	<title>Project 3 - Dillon Drenzek</title>
	
<!-- Meta Tags -->	

	<!-- <meta name="description" content="Free Web tutorials"> -->
	<!-- <meta name="keywords" content="HTML,CSS,XML,JavaScript"> -->
	<!-- <meta name="author" content="Hege Refsnes"> -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	
<!-- Links -->

	<!-- Google Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Overlock:400,400italic' rel='stylesheet' type='text/css'>
	
	<!-- Media Queries to change stylesheet	 -->
	<!-- <link href='style.css' media='screen and (min-width:600px)' rel='stylesheet'> -->
	
	<!-- Favicon Link -->
	<!-- <link type="image/png" href="" rel="shortcut icon"> -->
	
<!-- Scripts -->

	<!-- jQuery -->	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

	<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
  	<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

  	
	
<!-- Styles -->	
	<style type="text/css">
	
/* UTILITY */
			
		*,
		*:before,
		*:after{
			box-sizing:border-box;
				-webkit-box-sizing:border-box;
			margin: 0;
		}
		html{
            background: #3B1640;
            /*background: #252423;*/
            background: #333;

            color: #ccc;
		}

		body{
			font-size: 16px;
			padding: 0;
			margin: 0;
			height: 100%;
			width: 100%;
			font-family: 'Overlock',sans-serif;
		}

		.center{
			
			display: table;
			margin: 0 auto;
		}

		.hide{
			display: none;
		}

		a.plan {
			background: #333;
			border-bottom: solid black 2px;
			border-right: solid black 2px;
			border-bottom-right-radius: 2em;
			color: #aaa;
			font-family: 'Overlock', sans-serif;
			padding: 10px;
			position: fixed;
			text-decoration: none;

		}
			a.plan:hover{
				background: #333333;
				border-color: #aaa;
				color: #eee;
			}

		#form-container{
			background: #711F57;
			padding: 35px;
			width: 720px;
		}

			h2{
				text-align: center;

			}

		#form{
			width: 720px;
			padding-top: 1rem;
			margin: 0 auto;

		}
		form{
			background: #f3f4f3;
			padding: 1em 0;
		}
		.input-container{
			background: #510F47;
			padding: 15px;
			width: 75%;
		}
		.input-container label{
			/*position: relative;*/
			/*display: block;*/
			text-align: left;
			/*float: left;*/
			/*margin-right: 5em;*/
		}
		.input-container input{
			/*position: relative;*/
			/*display: block;*/
			/*text-align: right;*/
			/*float: right;*/
		}

		label{
			width: 60px;
			float: left;
			text-align: right;
			margin-right: 1em;
			display: block;
			font-size: 16px;
			
			display: table-cell;
			vertical-align: middle;
			color:#232425;
			text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
		}

		.submit input{
		/*margin-left: 4.5em;*/
		}
		input{
			border-radius: 0.25rem;
			border: 2px solid black;
			font-size: 18px;
		}
			input.textarea{
				height: 2em;
			}
		form p{
			margin-bottom: 1em;
			margin: 1em auto;
			display: table;
		}
		.ui-corner-all{
			background: #dadada;
			border: none;}

		#datepicker{
			width: 320px;
			display: table;
			margin: 0 auto;
			background: rgba(255,255,255,1);
		}

		.ui-datepicker{
			background: rgba(255,255,255,1);
			font-family: 'Overlock', sans-serif;
			width: 320px;
		}
		
		

		.ui-datepicker-header{
			color:white;
			background: #711F57;
		}
		#submit{
			width: 10em;
			height: 2rem;
			background: #711F57;
			color: #eee;
		}
			#submit:hover{
				background: #B5364D;
			}

</style>

<script type="text/javascript">

	$(document).ready(function(){
		// $('input#phone').val("(***) ***-****");
	});

	$('input#datepicker').change(function(){focusout(	"datepicker", 
											10);});

	function focusout(id,value){
		var inputId = "input#"+id;
		var requiredLength = 2;

		if (id == "datepicker"){
			$(inputId).css("border-color","green");
		}

		if (id == "phone"){
			requiredLength = 10;
		}
		if (id == "name"){
			requiredLength = 2;
		}

		if (value.length >= requiredLength){
			$(inputId).css("border-color","green");
		}else{
			$(inputId).css("border-color","red");
		}

	}

	function phoneScript(value){
		if( value.length == 10 ){
			$('input#phone').css("border-color", "green");
		} else{
			$('input#phone').css("border-color", "red");
		}


		console.log(value);

		return;
	}

	function fakeSubmit(){
		console.log("Submitted");
	}
</script>

	<script>
		$(function() {
		  $( "#datepicker" ).datepicker({ 	minDate: 0});
		});
  </script>
</head>

<body>
	<a href="./project3-plan.txt" class="plan">Project 3 Plan</a>

	<div id="form-container" class="center">
		<h2> Hey girl, can I have your number?</h2><br>
			
		<!-- <form action="postnumber.php" method="post">
			<p><label for="name">Name</label> <input name="name" class="textarea" type="text" id="name" required autofocus onblur="focusout(id,value)"/></p>
			<p><label for="number">Phone</label> <input name="number" class="textarea" type="text" id="phone" maxlength="10"  onkeyup="phoneScript(value)" onblur="focusout(id,value)"/></p>
			<p><label for="date">Date</label> <input name="date" class="textarea" type="text" id="datepicker" onblur="focusout(id,value)"/> <br></p>
			<p class="submit"><input id="submit" class="button" type="submit" value="Submit" onclick="fakeSubmit()"/></p>
		</form> -->

		<br>
	</div>
</body>
</html>