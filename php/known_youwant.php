<?php
	include "conn.php";
	$result=mysql_query("select * from known_youwant");	
	$known_youlist=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$known_youlist[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($known_youlist);
?>