//搜索框
$('.seach-wrap input').focusin(function(){
	$(this).parent().addClass('active')
	$('.seach-wrap > a').addClass('active')
	$(this).parent().find('i').addClass('active')
	$('.seachMenu').addClass('active')
})
$('.seach-wrap input').focusout(function(){
	$(this).parent().removeClass('active')
	$('.seachMenu').removeClass('active')
	$(this).parent().find('i').removeClass('active')
	$('.seach-wrap > a').removeClass('active')
})
//鼠标放到输入框里
$('.seach-wrap > a').hover(function(){
	$(this).css({
		background:'orangered',
		color:'#fff',
	})
},function(){
	$(this).css({
		background:'#ddd',
		color:'#444'
	})
})
//鼠标放到搜索上
$('.seach-wrap > i').hover(function(){
	$(this).css('background','orangered')
},function(){
	$(this).css('background','#fff')
})
//鼠标放到li标签上时
$('.right .left > li').hover(function(){
	$(this).find('a').addClass('active')
	$(this).find('.menu').stop(true).slideDown(500,function(){
		$(this).addClass('active')
	})
},function(){
	$(this).find('a').removeClass('active')
	$(this).find('.menu').stop(true).slideUp(100,function(){
		$(this).removeClass('active')
	})
})
