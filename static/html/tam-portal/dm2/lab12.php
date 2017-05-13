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
	
	<link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
	<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	
	<!-- Media Queries to change stylesheet	 -->
	<!-- <link href='style.css' media='screen and (min-width:600px)' rel='stylesheet'> -->
	
	<!-- Favicon Link -->
	<!-- <link type="image/png" href="" rel="shortcut icon"> -->
	
<!-- Scripts -->

	<!-- jQuery -->	
	<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> -->
	<script>
		$(function() {
		    $( "#datepicker" ).datepicker();
		  });
	</script>
	
	<script>
		function checkLen(x,y)
		{
		if (y.length==x.maxLength)
		  {
		  var next=x.tabIndex;
		  if (next<document.getElementById("form").length)
		    {
		    document.getElementById("form").elements[next].focus();
		    }
		  }
		}
		</script>
	
	<style type="text/css" media="screen">
		html{
				z-index: 0;
			}

	</style>
</head>

<body>
	<?php
		// Check for form submission:
		if (isset($_POST['submitted'])) {
		
			//name field
			if (!empty($_POST['name'])){
				$delicate = $_POST['name'];
				print "Thanks, ".$delicate." :)";
				}
			else {
				$delicate = NULL;
				print '<p class="error">Should I just call you mystery girl, then? Seriously... whats your name?</p>';
			}
	
			//phone number
			if (isset($_POST['number'])){
				$number = $_POST['student'];
				if ($student == "yes"){
					print "<p>You are a student.</p>";
					}
				else{
					print "<p>You are not a student.</p>";
					}
				}
			else {
				$student = NULL;
				print '<p class="error">You forgot to choose if you\'re a student!</p>';
			}
	
	//check boxes
	print "You follow these sports: <p>";
	if (isset($_POST['mbball']))
		print $_POST['mbball'] . "<br>";
	if (isset($_POST['wbball']))
		print $_POST['wbball'] . "<br>";
	if (isset($_POST['cross']))
		print $_POST['cross'] . "<br>";
	if (isset($_POST['fball']))
		print $_POST['fball'] . "<br>";
	if (isset($_POST['ski']))
		print $_POST['ski'] . "<br>";
	if (isset($_POST['soccer']))
		print $_POST['soccer'] . "<br>";
	if (isset($_POST['vball']))
		print $_POST['vball'] . "<br>";
	print "</p>";
	
	//select list
	if ($_POST['team']!= "none"){
		print "<p> You would like to purchase season tickets for " . $_POST['team'] . ". </p>";
		if (!empty($_POST['email']))
			print "<p> Your confirmation will be sent to " . $_POST['email'] . ". </p>";
			else
				print '<p class="error">You forgot to enter your email address!</p>';
	}
	else
		print "<p> You won't be purchasing season tickets!</p>";
		
	//required fields are filled in
	if ($school && $student)
		print "<p> Thanks for completing the form. </p>";
	else
		print '<p class="error">Please go back and fill out the form again.</p>';
} //end isset submitted

?>



	<!-- Flow Containers on this level -->
	<div class="site-head stack">
		<header><a href="http://www.dillondrenzek.com">Dillon Drenzek</a></header>
		<nav>
			<a href="./index.html">Home</a>
			<a href="#">Labs</a>
			<a href="#">Lab 12</a>
		</nav>
	</div>
	<div class="stack">
	
		<h2> Hey girl, can I have your number?</h2><br>
		
		<form action="phptextpost.php" method="post" accept-charset="utf-8" id="form">
			<label for="name">What's your name, delicate?</label><br>
			<input id="name" type="text" name="name" required autofocus><br><br>
			
			<label for="number">Of the trillions of numbers in the world, just leave me a few... that lead to you</label><br>
			<input id="number" type="text" name="areacode" tabindex="1" size="3" maxlength="3" onkeyup="checkLen(this,this.value)">
			<input id="number" type="text" name="firstthree" tabindex="2" size="3" maxlength="3" onkeyup="checkLen(this,this.value)">
			<input id="number" type="text" name="lastfour" tabindex="3" size="4" maxlength="4" onkeyup="checkLen(this,this.value)"><br><br>
			
			<label for="datepicker">When can I see that smile again?</label><br>
			<input id="datepicker" type="text" name="datepicker" placeholder="Tomorrow?"><br><br>
			
			<input id="submit" type="submit" name="submit" value="Call Me :)">
		</form>
		<br>
		Here is the <a href="./lab12.txt">text file</a>.
		
		
		
	</div>
	

</body>
</html>