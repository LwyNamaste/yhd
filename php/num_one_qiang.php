<?php
	include "conn.php";
	$result=mysql_query("select * from num_one_qiang");	
	$num_onelist=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$num_onelist[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}
	echo json_encode($num_onelist);
?>