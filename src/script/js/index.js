//1.导入模块的公用部分
!function($){
	$('.h_header').load('header.html .h_header_wrap');
	//第一个参数：地址。
	//第二个参数：选择器。
	$('.footercontent').load('footer.html .ft_wrap');
}(jQuery);