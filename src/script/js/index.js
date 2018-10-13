!function($){
//1.导入模块的公用部分	
	$('.h_header').load('header.html .h_header_wrap',function(){
		//头部登陆之后的样式
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
	$('.footercontent').load('footer.html .ft_wrap');
}(jQuery);

//数据拼接部分
!function($){
	//懂你想要部分数据
			$.ajax({
				url: 'http://10.31.162.12/yhd/php/known_youwant.php',
				dataType: 'json'
			}).done(function(data) {
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
										
			//tab切换的数据	
					$.ajax({
						url: 'http://10.31.162.12/yhd/php/tab.php',
						dataType: 'json'
					}).done(function(data) {
						$str1='';
						$str2='';
						$str3='';
						$str4='';
						$str5='';
						$.each(data,function(index,item){
							if(index>=0&&index<=5){
								$str1+=`<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;								
							}
							else if(index>=6&&index<=11){
								$str2+=`<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;									
							}
							else if(index>=12&&index<=17){
								$str3+=`<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;									
							}
							else if(index>=18&&index<=23){
								$str4+=`<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;									
							}
							else if(index>=24&&index<=29){
								$str5+=`<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;									
							}													
						});
						$('.rank_content .first_tab').html($str1);
						$('.rank_content .second_tab').html($str2);	
						$('.rank_content .third_tab').html($str3);	
						$('.rank_content .fourth_tab').html($str4);	
						$('.rank_content .fifth_tab').html($str5);	
					});			     
}(jQuery);


//效果部分
!function ($){
//1.顶部广告的效果
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
	
	
//2.一号抢购的幻灯片效果
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
	
	
//3.左侧电梯效果
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
//4.轮播图效果
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
//5.右边侧边栏效果
$('.yhd_prism_wrap').hover(function(){
	$('.yhd_prism_nav').animate({
		left:0
	},300);
},function(){
	$('.yhd_prism_nav').animate({
		left:34
	},300);	
});
//6.回到顶部效果
$('.totop').on('click',function(){
	$('html,body').animate({
		scrollTop:0
	});
});

//7.顶部固定导航效果
	$(window).on('scroll',function(){
		var $scrolltop=$(window).scrollTop();//获取滚动条的top值。
		if($scrolltop>=681){
			$('.hd_search_form').addClass('hd_search_fixed');
			$('.hd_fixed_logo').css('display','block');
			$('.hd_head_search').css('z-index','950');
		}else{
			$('.hd_search_form').removeClass('hd_search_fixed');
			$('.hd_fixed_logo').css('display','none');
			$('.hd_head_search').css('z-index','501');
		}
  });


//8.一号生鲜tab切换
	var $btn=$('.slider_nav a');
	var $content=$('.left_slider ul li');
	$btn.on('mouseover',function(){
		$(this).addClass('cur').siblings('a').removeClass('cur');
		$content.eq($(this).index()).show().siblings('li').hide();
	});
//9.tab切换的效果(一号闪购排行榜的tab)
    var $tabbtn=$('.rank_tab ul li');
    var $tabcontent=$('.rank_content ul');
 	$tabbtn.on('mouseover',function(){
		$(this).addClass('cur').siblings('li').removeClass('cur');
		$tabcontent.eq($(this).index()).show().siblings('ul').hide();
		var $index=$(this).index();
		var $leftval=$index*82;
		$('.cur_item').css('left',$leftval);
	});   

//懂你想要的效果(查看详情上移)
//10.和放大镜那里同理延时
setTimeout(function(){
	var $known_youli=$('.known_you_like ul').children('li');
	$known_youli.hover(function(){
	    $(this).find('.operate_area').css('display','block');
		$(this).find('.pro_name').css('display','none');
	},function(){
	    $(this).find('.operate_area').css('display','none');
		$(this).find('.pro_name').css('display','block');
	});
},1000)

}(jQuery);
