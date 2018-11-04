<!doctype html>
<html>
<head>

<!-- Page Details -->

	<title>Digital Media 2 - Dillon Drenzek</title>
	
<!-- Meta Tags -->	

	<!-- <meta name="description" content="Free Web tutorials"> -->
	<!-- <meta name="keywords" content="HTML,CSS,XML,JavaScript"> -->
	<!-- <meta name="author" content="Hege Refsnes"> -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	
<!-- Links -->

	<!-- Google Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Advent+Pro:400,100' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Duru+Sans' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Sintony' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="./css/subpages.css" type="text/css">
	
	<!-- Media Queries to change stylesheet	 -->
	<!-- <link href='style.css' media='screen and (min-width:600px)' rel='stylesheet'> -->
	
	<!-- Favicon Link -->
	<!-- <link type="image/png" href="" rel="shortcut icon"> -->
	
<!-- Scripts -->

	<!-- jQuery -->	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="./js/lab10.js"></script>
	
	
	<style type="text/css" media="screen">
		html{
				z-index: 0;
			}

	</style>
</head>

<body>
	<!-- Flow Containers on this level -->
	<div class="site-head stack">
		<header><a href="http://www.dillondrenzek.com">Dillon Drenzek</a></header>
		<nav>
			<a href="./index.html">Home</a>
			<a href="#">Labs</a>
			<a href="#">Lab 11</a>
		</nav>
	</div>
	<div class="stack">
		Here is the <a href="./lab11.txt">text file</a>.
		<br><br>
		<?php
			$variable = 10;
			
			print "The value of the variable in double quotes is $variable. <br>";
			print 'The value of the variable in single quotes is $variable.';
			print "<br>";
			
			
			print 'If $variable is equal to 10, you will see TEN below. If not, you will see WTF?';
			print "<br>";
			$variable == 10 ? print "TEN" : print "WTF?";
			
			print "<br>";
			
			print "Here is a fish.<br>";			
			$design = array(1 => "<", 2 => "(", 3 => "(", 4 => "-", 5 => "<");
			for ($i=1; $i <=5; $i++){
				print($design[$i]);
			}
			print "<br>";
		
		?>
		
	</div>
	

</body>
</html>