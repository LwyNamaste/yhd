//1.导入模块的公用部分
!function($){
	$('.details_header').load('header.html .h_header_wrap');
	$('.detail_footer').load('footer.html .ft_wrap');
				$.ajax({
				url:'http://10.31.162.12/yhd/php/details.php',
				data:{
					sid:location.search.substring(1).split('=')[1]
				},
				dataType:'json'
			}).done(function(data){
				//把url对象转成数组存下来
					var $urlarr=data[0].url.split(',');
					var $str=`
						<h1 class="mh" title="欧乐B（Oral-B） 博朗（BRAUN） D16.523U 600 3D智能电动牙刷 传奇蓝色">
							${data[0].title}
						</h1>`;
					$('.information_proname').html($str);
					
					var $str1=`
						<span id="current_price">
						¥${data[0].price}
						</span>`;
					$('.number').html($str1);
					
					var $str2=`
						<img src="${$urlarr[0]}" alt="" class="loadimg" sid="5">`;	
					$('#spic .spic_img').html($str2);
					var $str3='';
						$.each($urlarr,function(index,item){
							$str3+=`<li><img src="${$urlarr[index]}" alt=""></li>`;	
						});
					$('#list ul').html($str3);
					var $str4=`
						<img src="${$urlarr[0]}" alt="">`;				
					$('#bf').html($str4);				
			});	
}(jQuery);


!function(){
//11.详情页放大镜效果
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

	var $ul=$('#list ul');
	//取li放定时器里，等渲染出来再取
	setTimeout(function(){
	var $li=$ul.children();	
		var $liwidth=$li.eq(0).innerWidth();	
		$li.on('click',function(){
			var url=$(this).find('img').attr('src');//当前点击的li下面的图片路径
			$('#spic').find('img').attr('src',url);
			$('#bf').children().attr('src',url);
		});	
			var $num = 5; //当前ul里面显示的个数。
			if($li.length <= 5) {
				$('#left,#right').css('color', '#fff');
			}
			$('#right').on('click', function() {
				if($num < $li.size()) {
					$num++;
					$('#left').css('color', '#333');
					if($num == $li.size()) {
						$('#right').css('color', '#fff');
					}
					$ul.animate({
						left: -($num - 5) * $liwidth
					});
				}
			});

			$('#left').on('click', function() {
				if($num > 5) {
					$num--;
					$('#right').css('color', '#333');
					if($num == 5) {
						$('#left').css('color', '#fff');
					}
					$ul.animate({
						left: -($num - 5) * $liwidth
					});
				}
			});
	},1000)
	
	
//加入购物车部分的效果
    $count=$('.count_num .num').val();
	$('.add').on('click',function(){
		$count++;
		$('.count_num .num').val($count);
	});
	$('.no_reduce').on('click',function(){
		$count--;
		if ($count <= 1) {
	        $count = 1;
	    }
		$('.count_num .num').val($count);		
	});
   function addcookie(key, value, day) {
        var date = new Date(); //创建日期对象
        date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
        document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
    }
    //得到cookie
    function getcookie(key) {
        var str = decodeURI(document.cookie);
        var arr = str.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split('=');
            if (arr1[0] == key) {
                return arr1[1];
            }
        }
    }
    //删除cookie
    function delcookie(key) {
        addcookie(key, '', -1); //添加的函数,将时间设置为过去时间
    }
    var sidarr = []; //将取得cookie的编号存放到此数组
    var numarr = []; //将取得cookie的数量存放到此数组
    //获取cookie,值变成数组
    function getcookievalue() {
        if (getcookie('cartsid') && getcookie('cartnum')) {
            sidarr = getcookie('cartsid').split(','); //[1,2,3,4]
            numarr = getcookie('cartnum').split(','); //[50,60,70,80]
        }
    }
		//到此位置,cookie必须先获取,确定商品是否存在购物车里面
    //3.判断是否是第一次添加
    $('.add_btn').on('click', function() {
        var sid = $(this).parents('.detail_one').find('.spic_img').children('img').attr('sid');//获取当前页面a对应的图片的sid
        getcookievalue();//获取cookie,值变成数组
        if ($.inArray(sid, sidarr) != -1) { //sid存在,数量累加
           if(getcookie('cartnum')==''){
                var num=parseInt($('.count_num .num').val());
                numarr[$.inArray(sid,sidarr)]=num;//根据$.inArray通过sid确定位置.
                addcookie('cartnum', numarr.toString(), 7);//修改后的结果
                sidarr[$.inArray(sid,sidarr)]=sid;//将当前id添加到对应的位置。
                addcookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
            }else{
                var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.count_num .num').val());//当前的值和cookie里面的值(和sid对应的值)进行累加
                numarr[$.inArray(sid,sidarr)]=num;//将新的数量，覆盖原先的值。
                addcookie('cartnum', numarr, 10);
            }
        } else { //不存在,存入cookie
            sidarr.push(sid); //将sid追加到数组
            addcookie('cartsid', sidarr, 10); //存cookie
            numarr.push($('.count_num .num').val()); //将表单的值追加到数组
            addcookie('cartnum', numarr, 10); //存cookie
        }
    });		
}(jQuery)
