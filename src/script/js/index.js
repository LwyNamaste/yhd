!function($){
//1.导入模块的公用部分	
	$('.h_header').load('header.html .h_header_wrap');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.footercontent').load('footer.html .ft_wrap');
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
}(jQuery);