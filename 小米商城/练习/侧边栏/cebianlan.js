//	console.log('js引入了');
var aside = $('.aside .text-wrap');
//鼠标放在侧边栏li标签上时效果
aside.children().hover(function(){
//	console.log(this);
	$(this).addClass('active');
	$(this).children('.menu').addClass('active');
},function(){
	$(this).removeClass('active');
	$(this).children('.menu').removeClass('active');
})
var menu = $('.aside .text-wrap .menu ul');
//当鼠标放到二级导航上的效果
menu.children().find('img,i').hover(function(){
	$(this).siblings('i').addClass('active');
	$(this).addClass('active');
},function(){
	$(this).siblings('i').removeClass('active');
	$(this).removeClass('active');
})
//当鼠标放到二级导航中选购上时的效果
menu.children().find('span').hover(function(){
	$(this).addClass('active');
},function(){
	$(this).removeClass('active');
})




//轮播图js
var li_width = $('.img-wrap li' ).width();
$