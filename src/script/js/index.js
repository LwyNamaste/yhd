!function($){
//1.导入模块的公用部分	
	$('.h_header').load('header.html .h_header_wrap',function(){
			function addCookie(key,value,day){
				var date=new Date();//创建日期对象
				date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
				document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
			}
			function getCookie(key){
				var str=decodeURI(document.cookie);
				var arr=str.split('; ');
				for(var i=0;i<arr.length;i++){
					var arr1=arr[i].split('=');
	 				if(arr1[0]==key){
						return arr1[1];
					}
				}
			}
			function delCookie(key,value){
				addCookie(key,value,-1);//添加的函数,将时间设置为过去时间
			}
			
			
			//显示隐藏
			$(function(){
				if(getCookie('UserName')){
					$('.login').hide();
					$('.admin').show().find('span').html('Hi,'+getCookie('UserName'));
				}
				$('.admin a').on('click',function(){
					delCookie('UserName','',-1);
					$('.admin').hide();
					$('.login').show();
				});
			});
	});
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.footercontent').load('footer.html .ft_wrap');
}(jQuery);

//数据拼接部分
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
						<a href="http://10.31.162.12/yhd/src/details.html?sid=${item.sid}" target="_blank">
							<div class="flip_wrap">
								<div class="pro_pic"><img src="${item.url.split(',')[0]}"></div>
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
				//轮播图的数据
					$.ajax({
						url: 'http://10.31.162.12/yhd/php/lunbo.php',
						dataType: 'json'
					}).done(function(data) {
						console.log(data);
						$str='';
						$.each(data,function(index,item){
							$str+=`<li style="z-index: 0;">
								<a href="#" target="_blank" title="${item.title}">
									<div class="promo_img" style="background-image: ${item.url}"></div>
								</a>
							</li>`;
						})
						$('.lunbo_show ul').html($str);						
					});
       
}(jQuery);


//效果部分
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
//轮播图效果
		var $lunbo=$('.lunbo_show');		
		var $pic=$('.lunbo_show ul');
		var $btnLi=$('.lunbo_show ol li');
		var $leftbtn=$('.show_prev');	
		var $rightbtn=$('.show_next');	
		
		var $index=0;//当前的索引.
		var $qindex=0;//前一个索引.
		//鼠标经过小按钮
   		 $btnLi.on('mouseover', function (){
			$index=$(this).index();//当前的索引   	
			imgchange($index);
			$qindex=$index;//当前的索引变成上一个索引. 
    });
    //左右按钮
    	$rightbtn.on('click',function(){
		$index++;
		if($index>6){
			$index=0;
		}
		imgchange($index);
		$qindex=$index;//当前的索引变成上一个索引.
	});
	
	$leftbtn.on('click',function(){
		$index--;
		if($index<0){
			$qindex=0;
			$index=6;
		}
		imgchange($index);
		$qindex=$index;//当前的索引变成上一个索引.
	});
	//自动切换
		var $timer = setInterval(function() {
				$index++;
				if($index > 6) {
					$index = 0;
				}
				imgchange($index);
				$qindex = $index; //当前的索引变成上一个索引.
		}, 2000);
		$lunbo.on('mouseover',function(){
			clearInterval($timer);
		});
		$lunbo.on('mouseout',function(){
			$timer = setInterval(function() {
					$index++;
					if($index > 6) {
						$index = 0;
					}
					imgchange($index);
					$qindex = $index; //当前的索引变成上一个索引.
			}, 2000);
		});

//封装切换
	function imgchange($index){
	$btnLi.eq($index).addClass('active').siblings('li').removeClass('active');
        $pic.children('li').eq($index).animate({
            opacity: 1
        }, 300).siblings(($pic).children('li')).animate({
            opacity: 0
        }, 300)
	}


//tab切换的效果
	
//懂你想要的效果
}(jQuery);
