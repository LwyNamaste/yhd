!function($){
//1.导入模块的公用部分	
	$('.h_header').load('header.html .h_header_wrap');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.footercontent').load('footer.html .ft_wrap');
}(jQuery);
!function($){
	//懂你想要部分数据
			$.ajax({
				url: 'http://10.31.162.12/yhd/php/known_youwant.php',
				dataType: 'json'
			}).done(function(data) {
				console.log(data);
				$str='';
				$.each(data,function(index,item){
					$str+=`<li>
						<a href="#" target="_blank">
							<div class="flip_wrap">
								<div class="pro_pic"><img src="${item.url}"></div>
								<div class="pro_name">
									<p class="pro_mask"></p>${item.title}</div>
								<div class="clearfix">
									<div class="pro_price">¥<span>${item.price}</span></div>
								</div>
							</div>
							<div class="operate_area clearfix"><span class="view_detail">查看详情</span></div>
						</a>
					</li>`;
				})
				$('.known_you_like ul').html($str);
			});
       //一号抢购部分的数据
				$.ajax({
					url: 'http://10.31.162.12/yhd/php/num_one_qiang.php',
					dataType:'json'
				}).done(function(data){
					console.log(data);
					$str='';
					$.each(data,function(index,item){
						$str+=`<li class="prod" ">
							<div class="dotted_line "></div>
							<a href="# " target="_blank " title="${item.title} " class="clearfix ">
								<div class="pro_detail ">
									<p class="pro_name ">${item.title}</p>
									<p class="pro_price ">¥<em>${item.price}</em></p>
									<p class="reference_price ">参考价：¥<span>${item.reference_price}</span></p>
								</div>
								<img src="${item.url}"class="pro_pic ">
								<div class="marking_label ">${item.sold}</div>
							</a>
						</li>`;
					})
					$('.num_one_qiang ul').html($str);
				});
       
}(jQuery);
!function ($){
//顶部广告的效果
	var $indextopbanner=$('.index_topbanner');
	var $smallbanner=$('.small_topbanner');
	var $bigbanner=$('.big_topbanner');
	var $closebtn=$('.close_btn');
	$indextopbanner.on('mouseover',function(){
		$smallbanner.css('display','none');
		$bigbanner.css('display','block');
	});
	$indextopbanner.on('mouseout',function(){
		$smallbanner.css('display','block');
		$bigbanner.css('display','none');
	});
	$closebtn.on('click',function(){
		$indextopbanner.css('display','none');
	});
	
	
//一号抢购的幻灯片效果
	var $prev=$('.num_one_qiang .prev');
	var $next=$('.num_one_qiang .next');
	var $ul=$('.num_one_qiang ul');
	var $ul_left=$ul.offset().left;
	$next.on('click',function(){	
		$ul.animate({
			left:$ul.offset().left-$ul_left-1024
		},400);
		if($ul.offset().left-$ul_left-1024==-2048){
			$next.css('display','none');
		}else if($ul.offset().left-$ul_left-1024==-1024){
			$prev.css({
				'display':'block',
				'left':'5px',
				'background-color':'rgba(0,0,0,0.15)'
			});
		}
	});
	$prev.on('click',function(){
		$ul.animate({
			left:$ul.offset().left-$ul_left+1024
		},400);
		if($ul.offset().left-$ul_left+1024==0){
			$prev.css('display','none')
		}else if($ul.offset().left-$ul_left+1024>-2048){
			$next.css('display','block');
		}
	});
	
	
//左侧电梯效果
 var $dianti=$('.elec_floor_lift');
 var $diantili=$('.elec_floor_lift li');
 var $louceng=$('.lift_floor');
 	$(window).on('scroll',function(){
		var $scrolltop=$(window).scrollTop();//获取滚动条的top值。
		if($scrolltop>=1640){
			$dianti.show();
		}else{
			$dianti.hide();
		}
});
	$diantili.on('click',function(){
		var $top=$louceng.eq($(this).index()).offset().top;
		$('html,body').animate({//赋值时考虑兼容。
			scrollTop: $top
		});
	});



//幻灯片的效果
	
//tab切换的效果
	
//懂你想要的效果
}(jQuery);
