+(function(){
	$.fn.dataFn = function(){
		return this.each(function(){
			var datas = $(this).data();
			if (datas.fn){
				if ($.fn[datas.fn]) {
					$(this)[datas.fn](datas);
				}
			} else {
				$('[data-fn]', this).dataFn();
			}
		});
	};
	$(function(){
		$('[data-fn]').dataFn();
	});
});
