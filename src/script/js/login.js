//1.导入模块的公用部分
!function($){
	$('.reg_head').load('header.html .regist_header');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.reg_foot').load('footer.html .simplefooter');
	
	//登录验证部分
			function addCookie(key,value,day){
					var date=new Date();//创建日期对象
					date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
					document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
			}				
				$('.login_btn').on('click',function(){
					var $username=$('#username').val();
					var $password=$('#password').val();
					$.ajax({
						type:'post',
						url:'http://10.31.162.12/yhd/php/login.php',
						data:{//将用户名和密码传输给后端
							name:$username,
							pass:$password
						},
						success:function(data){//请求成功，接收后端返回的值
							if(!data){//用户名或者密码错误
								$('.errortips').html('用户名或者密码错误');
								$('.errortips').css('display','block');
								$('#password').val('');
							}else{//成功,存cookie,跳转到首页
								addCookie('UserName',$username,7);
								location.href='http://10.31.162.12/yhd/src/index.html';
							}
						}
					})
				});
				//效果部分
				$('.more_coop a').on('click',function(){
					if($(this).hasClass("unfold")){
						$(this).addClass('fold').removeClass('unfold');
						$('.more_landing li').css('display','block');						
					}else if($(this).hasClass("fold")){
						$(this).addClass('unfold').removeClass('fold');
						$('.more_landing li').css('display','none');						
					}
				});
				
				$('.auto_login a').on('click',function(){
					if($(this).hasClass("uncheck_agreement")){
						$(this).addClass('check_agreement').removeClass('uncheck_agreement');
						$('.auto_tips').css('display','block');
					}else if($(this).hasClass("check_agreement")){
						$(this).addClass('uncheck_agreement').removeClass('check_agreement');
						$('.auto_tips').css('display','none');
					}
				});

}(jQuery);

				
				