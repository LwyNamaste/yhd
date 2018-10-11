//1.导入模块的公用部分
!function($){
	$('.details_header').load('header.html .h_header_wrap');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.detail_footer').load('footer.html .ft_wrap');
				$.ajax({
				url:'http://10.31.162.12/yhd/php/details.php',
				data:{
					sid:location.search.substring(1).split('=')[1]
				},
				dataType:'json'
			}).done(function(data){
					var $str=`
						<h1 class="mh" title="欧乐B（Oral-B） 博朗（BRAUN） D16.523U 600 3D智能电动牙刷 传奇蓝色">
							${data[0].title}
						</h1>`;
					var $str1=`
						<span id="current_price">
						¥${data[0].price}
						</span>`;
					var $str2=`
						<img src="${data[0].url.split(',')[0]}" alt="">												
						`;
					var $str3=`	<li><img src="${data[0].url.split(',')[1]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[2]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[3]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[4]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[5]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[6]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[7]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[8]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[9]}" alt=""></li>
								<li><img src="${data[0].url.split(',')[10]}" alt=""></li>								
								`;
					var $str4=`
						<img src="${data[0].url.split(',')[0]}" alt="">					
					`;
				$('.information_proname').html($str);
				$('.number').html($str1);
				$('#spic .spic_img').html($str2);
				$('#list ul').html($str3);
				$('#bf').html($str4);
			});			
}(jQuery);

//详情页放大镜效果
!function(){
	$('#spic').hover(function(){
		$('#sf').css('visibility','visible');
		$('#bf').css('visibility','visible');
		
//1:小放的尺寸
		$('#sf').width($(this).width()*$('#bf').width()/$('#bf').children().width());
		$('#sf').height($(this).height()*$('#bf').height()/$('#bf').children().height());
//2.计算比例
		var $bili=$('#bf').children().width()/$('#spic').width();
//3鼠标在小方里面移动
		$('#spic').on('mousemove',function(ev){
			var $left=ev.pageX-$('.le_wrap').offset().left-$('#sf').width()/2;
			var $top=ev.pageY-$('.le_wrap').offset().top-$('#sf').height()/2;
			if($left<=0){
				$left=0;
			}else if($left>=$('#spic').width()-$('#sf').width()){
				$left=$('#spic').width()-$('#sf').width();
			}		
			if($top<=0){
				$top=0;
			}else if($top>=$('#spic').height()-$('#sf').height()){
				$top=$('#spic').height()-$('#sf').height();
			}
			$('#sf').css({
				left:$left,
				top:$top
			});
			$($('#bf').children()).css({
				left:-$bili*$left,
				top:-$bili*$top
			})
			
		});
		
	},function(){
		$('#sf').css('visibility','hidden');
		$('#bf').css('visibility','hidden');
	});


	var $li=$('#ulist ul li');
	var $ul=$('#ulist ul');
	console.log($li);
	var $liwidth=$li.eq(0).innerWidth();
	
	$li.on('click',function(){
		alert(1);
		var url=$(this).find('img').attr('src');//当前点击的li下面的图片路径
		$('#spic').find('img').attr('src',url);
		$('#bf').children().attr('src',url);
	});
}(jQuery)
