<!doctype html>
<html>
<head>

<!-- Page Details -->

	<title>Lab 13 - Dillon Drenzek</title>
	
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
			a#helper{
				top: 4rem;
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

		input.submit {
			margin-left: 18rem;
		}

</style>

</head>

<body>
	<a href="./lab13.txt" class="plan">Lab 13 Plain Text</a>
	<br>
	<a href="./lab13_helper.txt" class="plan" id="helper">Helper in Plain Text</a>

	<div id="form-container" class="center">
		<h2>Mysterious Button?</h2><br>

		<form action="lab13.php" method="get">
			<input name="submit" type="submit" class="submit" value="#YOLO">
		</form>
		

		<!-- Create a PHP script that has a function and uses an include statement. -->

		<?php 
			include("lab13_helper.php");

			if (isset($_GET['submit'])){
				mystery_function();
			}
		?>
		<br>
	</div>
</body>
</html>