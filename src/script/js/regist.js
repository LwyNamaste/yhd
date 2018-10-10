//1.导入模块的公用部分
!function($){
	$('.reg_head').load('header.html .regist_header');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.reg_foot').load('footer.html .simplefooter');
}(jQuery);
//注册部分效果和表单验证
!function($){
		var $input=$('.register_form .ysame_input');
		var $tip=$('.register_form .y_regist_tips');
		var $label=$('.register_form .y_same_label');
			$input.focus(function(){
				$tip.eq($(this).index('input')).css('opacity','1');
				if($(this).index('input')==2){
					$label.eq($(this).index('input')).css('left','-90px');
				}else if($(this).index('input')==3||$(this).index('input')==4){
					$label.eq($(this).index('input')).css('left','-76px');					
				}else{
					$label.eq($(this).index('input')).css('left','-62px');
				}
			});
			$input.blur(function(){
				$tip.eq($(this).index('input')).css('opacity','0');
			});

}(jQuery);
			//表单验证-用户名
			$(function(){
				$('#form1').validate({
					rules:{
						username:{
							required:true,
							minlength:2,
							maxlength:10,
							remote: {//将前端的name给后端
							    url: "http://10.31.162.12/yhd/php/reg.php",     //后台处理程序
							    type: "post"               //数据发送方式
							}
						},
						tel:{
							required:true,
							digits:true,
							rangelength:[11,11]  
						},						
						password:{
							required:true,
							rangelength:[6,20]
						},
						repass:{
							required:true,
							equalTo:'#password'
						},
					},
					messages:{
						username:{
							required:'用户名不能为空',
							minlength:'用户名不能小于2',
							maxlength:'用户名不能大于10',
							remote:'用户名已存在'
						},
						tel:{
							required:"请输入手机号码",
							digits:"必须是整数",
							rangelength:"号码有误" 
						},						
						password:{
							required:'密码不能为空',
							rangelength:"密码长度必须介于6 到 20位之间"
						},
						repass:{
							required:'密码重复不能为空',
							equalTo: "两次密码输入不一致"//值和密码框的值相同
						},
					}
					
				});
			});
			
			$.validator.setDefaults({
			    /*添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)*/
			    success: function(label){
			        label.text('√').css('color','green').addClass('valid');
			    }
			});
	