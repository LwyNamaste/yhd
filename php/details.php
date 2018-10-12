<?php  
	
	include "conn.php";
	
	if(isset($_GET['sid'])){
		$sid=$_GET['sid'];
	}
	$result=mysql_query("select * from known_youwant where sid='$sid'");	
	$known_detaillist=array();
	
	for ($i=0; $i < mysql_num_rows($result); $i++) { 
		$known_detaillist[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}

	echo json_encode($known_detaillist);

?>