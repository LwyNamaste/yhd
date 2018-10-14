define(['jquery'], function($) {
	//数据拼接部分
	return {
		pinjie: ! function() {
			//轮播图的数据
			$.ajax({
				url: 'http://10.31.162.12/yhd/php/lunbo.php',
				dataType: 'json'
			}).done(function(data) {
				$str = '';
				$.each(data, function(index, item) {
					$str += `<li style="z-index: 0;">
								<a href="#" target="_blank" title="${item.title}">
									<div class="promo_img" style="background-image: ${item.url}"></div>
								</a>
							</li>`;
				})
				$('.lunbo_show ul').html($str);
			});
			//懂你想要部分数据
			$.ajax({
				url: 'http://10.31.162.12/yhd/php/known_youwant.php',
				dataType: 'json'
			}).done(function(data) {
				$str = '';
				$.each(data, function(index, item) {
					$str += `<li>
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
				dataType: 'json'
			}).done(function(data) {
				$str = '';
				$.each(data, function(index, item) {
					$str += `<li class="prod" ">
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

			//tab切换的数据	
			$.ajax({
				url: 'http://10.31.162.12/yhd/php/tab.php',
				dataType: 'json'
			}).done(function(data) {
				$str1 = '';
				$str2 = '';
				$str3 = '';
				$str4 = '';
				$str5 = '';
				$.each(data, function(index, item) {
					if(index >= 0 && index <= 5) {
						$str1 += `<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;
					} else if(index >= 6 && index <= 11) {
						$str2 += `<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;
					} else if(index >= 12 && index <= 17) {
						$str3 += `<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;
					} else if(index >= 18 && index <= 23) {
						$str4 += `<li>
									<a href="#" target="_blank" title="${item.title}">
										<img src="${item.url}" alt="${item.title}">
										<p class="pro_name" title="${item.title}">${item.title}</p>
										<span class="discount_info">${item.discount}折</span>
									</a>
								</li>`;
					} else if(index >= 24 && index <= 29) {
						$str5 += `<li>
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
		}()
	}
});
