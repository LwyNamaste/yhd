<?php  
	header('content-type:text/html;charset=utf-8');
	define('HOSTNAME','localhost');
	define('USERNAME','root');
	define('PASSWORD','');
	$conn=@mysql_connect(HOSTNAME,USERNAME,PASSWORD);
	if(!$conn){
		die('数据库链接失败:'.mysql_error());
	}

	mysql_select_db('myyhd');
	mysql_query('SET NAMES UTF8');

	

?>