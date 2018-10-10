<?php
	include "conn.php";
	$result=mysql_query("select * from lunbo");	
	$lunbolist=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$lunbolist[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($lunbolist);
?>