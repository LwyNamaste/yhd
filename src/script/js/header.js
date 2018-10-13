!function(){
	//搜索框下拉提示
setTimeout(function(){
	var $search=$('.hd_search_ipt');
	var $oUl=$('.hd_search_tips_list');
	function yhd(data){
		console.log(data.result);
		var $yhdarr=data.result;
		var $htmlstr='';
		$.each($yhdarr,function(index,value){
			$htmlstr += `
					<li class="ss_item">
						<a href="http://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&clk1=3698b7772c893aa8ab0cd7022216a887&keyword=${value[0]}&page=0" class="hd_suggest_item">
						<b>${value[0]}</b>
						</a>
					</li>`
		});
		$oUl.html($htmlstr);
	}
	$search.focus(function(){
		var $cscript=$('<script></script>');
		console.log($cscript);
		$cscript.attr("src","https://suggest.taobao.com/sug?code=utf-8&q=aaaaa&callback=taobao");
		$('document,body').append($cscript);
		require("https://suggest.taobao.com/sug?code=utf-8&q=aaaaa&callback=define")
	});
},1000);
}(jQuery);
