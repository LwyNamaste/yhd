define(['jquery'], function($) {
	return {
		login_name: ! function() {
			$('.h_header').load('header.html .h_header_wrap', function() {
				//头部登陆之后的样式
				function addCookie(key, value, day) {
					var date = new Date(); //创建日期对象
					date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
					document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
				}

				function getCookie(key) {
					var str = decodeURI(document.cookie);
					var arr = str.split('; ');
					for(var i = 0; i < arr.length; i++) {
						var arr1 = arr[i].split('=');
						if(arr1[0] == key) {
							return arr1[1];
						}
					}
				}

				function delCookie(key, value) {
					addCookie(key, value, -1); //添加的函数,将时间设置为过去时间
				}
				//显示隐藏
				$(function() {
					if(getCookie('UserName')) {
						$('.login').hide();
						$('.admin').show().find('span').html('Hi,' + getCookie('UserName'));
					}
					$('.admin a').on('click', function() {
						delCookie('UserName', '', -1);
						$('.admin').hide();
						$('.login').show();
					});
				});
			});
			$('.footercontent').load('footer.html .ft_wrap');
		}(),
		sousuo: ! function() {
			//搜索框下拉提示
			setTimeout(function() {
				var $search = $('.hd_search_ipt');
				var $oUl = $('.hd_search_tips_list');
				$search.on("input", function() {
					if($(this).val() != '') {
						$('.hd_search_tips_result ul').css({
							'border-width': '1px',
							'border-style': 'solid',
							'border-color': '#ccc'
						});
					} else {
						$('.hd_search_tips_result ul').css('border', 'none')
					}
					$.ajax({
						type: "get",
						url: "https://suggest.taobao.com/sug?code=utf-8&q=" + $(this).val() + "&callback=yhd",
						async: true,
						dataType: 'jsonp',
					}).done(function(data) {
						$htmlstr = '';
						$.each(data.result, function(index, value) {
							$htmlstr += `
						<li class="ss_item">
							<a href="http://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&clk1=3698b7772c893aa8ab0cd7022216a887&keyword=${value[0]}&page=0" class="hd_suggest_item">
							<b>${value[0]}</b>
							</a>
						</li>`;
						});
						$oUl.html($htmlstr);
					});
				});
			}, 1000);
		}()

	}

});