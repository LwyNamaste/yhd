<?php
	include "conn.php";
	$result=mysql_query("select * from tab_switch");	
	$tablist=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$tablist[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($tablist);
?>