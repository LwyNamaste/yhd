<?php
	require "conn.php";	
	if(isset($_POST['username']) || isset($_POST['submit'])){
		$username=@$_POST['username'];
	}else{
		exit('非法操作');
	}
	$query="select * from user where username='$username'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo 'false';
	}else{
		echo 'true';
	}
	if(isset($_POST['submit']) && $_POST['submit']=="同意协议并注册"){
		$user=$_POST['username'];//username：表单的名称
		$tel=$_POST['tel'];
		$pass=md5($_POST['password']);
		//添加语句
		$query="insert user(uid,username,tel,password) values(null,'$user','$tel','$pass')";
		mysql_query($query);
		header('location:http://10.31.162.12/yhd/src/login.html');//页面的跳转
	}
?>