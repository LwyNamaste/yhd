define(['jquery'], function($) {
	//效果部分
	return {
		xiaoguo: ! function() {
			//1.顶部广告的效果
			var $indextopbanner = $('.index_topbanner');
			var $smallbanner = $('.small_topbanner');
			var $bigbanner = $('.big_topbanner');
			var $closebtn = $('.close_btn');
			$indextopbanner.on('mouseover', function() {
				$smallbanner.css('display', 'none');
				$bigbanner.css('display', 'block');
			});
			$indextopbanner.on('mouseout', function() {
				$smallbanner.css('display', 'block');
				$bigbanner.css('display', 'none');
			});
			$closebtn.on('click', function() {
				$indextopbanner.css('display', 'none');
			});

			//2.一号抢购的幻灯片效果
			var $prev = $('.num_one_qiang .prev');
			var $next = $('.num_one_qiang .next');
			var $ul = $('.num_one_qiang ul');
			var $ul_left = $ul.offset().left;
			$next.on('click', function() {
				$ul.animate({
					left: $ul.offset().left - $ul_left - 1024
				}, 400);
				if($ul.offset().left - $ul_left - 1024 == -2048) {
					$next.css('display', 'none');
				} else if($ul.offset().left - $ul_left - 1024 == -1024) {
					$prev.css({
						'display': 'block',
						'left': '5px',
						'background-color': 'rgba(0,0,0,0.15)'
					});
				}
			});
			$prev.on('click', function() {
				$ul.animate({
					left: $ul.offset().left - $ul_left + 1024
				}, 400);
				if($ul.offset().left - $ul_left + 1024 == 0) {
					$prev.css('display', 'none')
				} else if($ul.offset().left - $ul_left + 1024 > -2048) {
					$next.css('display', 'block');
				}
			});

			//3.左侧电梯效果
			var $dianti = $('.elec_floor_lift');
			var $diantili = $('.elec_floor_lift li');
			var $louceng = $('.lift_floor');
			$(window).on('scroll', function() {
				var $scrolltop = $(window).scrollTop(); //获取滚动条的top值。
				if($scrolltop >= 1640) {
					$dianti.show();
				} else {
					$dianti.hide();
				}
			});
			$diantili.on('click', function() {
				var $top = $louceng.eq($(this).index()).offset().top;
				$('html,body').animate({ //赋值时考虑兼容。
					scrollTop: $top
				});
			});
			//4.轮播图效果
			var $lunbo = $('.lunbo_show');
			var $pic = $('.lunbo_show ul');
			var $btnLi = $('.lunbo_show ol li');
			var $leftbtn = $('.show_prev');
			var $rightbtn = $('.show_next');

			var $index = 0; //当前的索引.
			var $qindex = 0; //前一个索引.
			//鼠标经过小按钮
			$btnLi.on('mouseover', function() {
				$index = $(this).index(); //当前的索引   	
				imgchange($index);
				$qindex = $index; //当前的索引变成上一个索引. 
			});
			//左右按钮
			$rightbtn.on('click', function() {
				$index++;
				if($index > 6) {
					$index = 0;
				}
				imgchange($index);
				$qindex = $index; //当前的索引变成上一个索引.
			});

			$leftbtn.on('click', function() {
				$index--;
				if($index < 0) {
					$qindex = 0;
					$index = 6;
				}
				imgchange($index);
				$qindex = $index; //当前的索引变成上一个索引.
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
			$lunbo.on('mouseover', function() {
				clearInterval($timer);
			});
			$lunbo.on('mouseout', function() {
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
			function imgchange($index) {
				$btnLi.eq($index).addClass('active').siblings('li').removeClass('active');
				$pic.children('li').eq($index).animate({
					opacity: 1
				}, 300).siblings(($pic).children('li')).animate({
					opacity: 0
				}, 300)
			}
			//5.右边侧边栏效果
			$('.yhd_prism_wrap').hover(function() {
				$('.yhd_prism_nav').animate({
					left: 0
				}, 300);
			}, function() {
				$('.yhd_prism_nav').animate({
					left: 34
				}, 300);
			});
			//6.回到顶部效果
			$('.totop').on('click', function() {
				$('html,body').animate({
					scrollTop: 0
				});
			});

			//7.顶部固定导航效果
			$(window).on('scroll', function() {
				var $scrolltop = $(window).scrollTop(); //获取滚动条的top值。
				if($scrolltop >= 681) {
					$('.hd_search_form').addClass('hd_search_fixed');
					$('.hd_fixed_logo').css('display', 'block');
					$('.hd_head_search').css('z-index', '950');
				} else {
					$('.hd_search_form').removeClass('hd_search_fixed');
					$('.hd_fixed_logo').css('display', 'none');
					$('.hd_head_search').css('z-index', '501');
				}
			});

			//8.一号生鲜tab切换
			var $btn = $('.slider_nav a');
			var $content = $('.left_slider ul li');
			$btn.on('mouseover', function() {
				$(this).addClass('cur').siblings('a').removeClass('cur');
				$content.eq($(this).index()).show().siblings('li').hide();
			});
			//9.tab切换的效果(一号闪购排行榜的tab)
			var $tabbtn = $('.rank_tab ul li');
			var $tabcontent = $('.rank_content ul');
			$tabbtn.on('mouseover', function() {
				$(this).addClass('cur').siblings('li').removeClass('cur');
				$tabcontent.eq($(this).index()).show().siblings('ul').hide();
				var $index = $(this).index();
				var $leftval = $index * 82;
				$('.cur_item').css('left', $leftval);
			});

			//懂你想要的效果(查看详情上移)
			//10.和放大镜那里同理延时
			setTimeout(function() {
				var $known_youli = $('.known_you_like ul').children('li');
				$known_youli.hover(function() {
					$(this).find('.operate_area').css('display', 'block');
					$(this).find('.pro_name').css('display', 'none');
				}, function() {
					$(this).find('.operate_area').css('display', 'none');
					$(this).find('.pro_name').css('display', 'block');
				});
			}, 1000)
			//11.国产食品，美妆个护,手机家电左边小轮播
				var $show_span1=$('.china_food .show_num span');
				var $show_em1=$('.china_food .show_num em').html();
				var $show_num1=$show_span1.html();
				var $slider_li1=$('.china_food .floor_silder ul li');
				
				var $show_span2=$('.care_makeup .show_num span');
				var $show_em2=$('.care_makeup .show_num em').html();
				var $show_num2=$show_span2.html();
				var $slider_li2=$('.care_makeup .floor_silder ul li');
				
				var $show_span3=$('.phone_electric .show_num span');
				var $show_em3=$('.phone_electric .show_num em').html();
				var $show_num3=$show_span3.html();
				var $slider_li3=$('.phone_electric .floor_silder ul li');
				//分别调用
				slunbo($show_span1,$show_num1,$show_em1,$slider_li1);
				slunbo($show_span2,$show_num2,$show_em2,$slider_li2);
				slunbo($show_span3,$show_num3,$show_em3,$slider_li3);
				
				
				
		function slunbo($show_span,$show_num,$show_em,$slider_li){
				$('.turn_show .next_btn').on('click',function(){
					$show_num++;
					if($show_num>$show_em){
						$show_num=1;
					}
					$slider_li.eq($show_num-1).css('z-index',100).siblings('li').css('z-index',80);				
					$show_span.html($show_num);				
				});
				$('.turn_show .prev_btn').on('click',function(){
					$show_num--;
					if($show_num<1){
						$show_num=$show_em;
					}
					$slider_li.eq($show_num-1).css('z-index',100).siblings('li').css('z-index',80);				
					$show_span.html($show_num);				
				});	
				//自动切换
				setInterval(function(){
					$show_num++;
					if($show_num>$show_em){
						$show_num=1;
					}
					$slider_li.eq($show_num-1).css('z-index',100).siblings('li').css('z-index',80);				
					$show_span.html($show_num);					
				},1000)				
		}
	//12.国产食品，美妆个护,手机家电底部评论自动上滑

		var $margin_top=$('.comment_list ul').position().top;
			setInterval(function(){
				$margin_top-=26.5;
				if($margin_top<=-71.5){
					$margin_top=8;
				}	
				$('.comment_list ul').css('top',$margin_top);
			},3000);
			
			
		}()
	}
});
