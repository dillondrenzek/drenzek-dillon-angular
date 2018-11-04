<?php
	function formSubmit($name, $phone, $date){
		$user_name="didr8696";
		$password="Test123!";
		$database="didr8696db";
		$server="localhost";
	
	
		$db_handle = mysqli_connect($server, $user_name, $password, $database);
		$db_found = mysqli_select_db($db_handle,$database);
		
		if ($db_found) {
			/* print "$name, $phone, $date"; */
			$SQL = "INSERT INTO lab_14 (name, phone, date) 
					VALUES ($name, $phone, $date);";
			
			$result = mysqli_query($db_handle, $SQL);
			
			mysqli_close($db_handle);
			
			/* print("Success!"); */
		}else {
	
		print "Database NOT Found";
	
		}
	}
	
	function printTable(){
		$user_name="didr8696";
		$password="Test123!";
		$database="didr8696db";
		$server="localhost";
		
		$db_handle = mysqli_connect($server, $user_name, $password, $database);
		
		/* print "$name, $phone, $date"; */
		$SQL = "SELECT name, phone, date FROM lab_14";
		
		$result = mysqli_query($db_handle, $SQL);
		
		if ($result){
		// Fetch and print all the records:
			print "<table>";
			print "<tr>".
				"<td>"."Name"."</td>".
				"<td>"."Phone"."</td>".
				"<td>"."Date"."</td>".
				"</tr>";
			while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				print "<tr>". 
						"<td>".$row['name'] ."</td>".
						"<td>".$row['phone'] ."</td>".
						"<td>".$row['date'] ."</td>".
						"</tr>";
				}
				else print "No records returned";
		
			print "</table>";
		
		// free up the query resources
		mysqli_free_result($result);
		
		mysqli_close($db_handle);


		
	}


?>