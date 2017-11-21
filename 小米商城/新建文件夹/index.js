//处理顶部js效果
//去掉最后一个li标签中a的右边框
var topTag = $('.top-wrap');
//find()找到的是所有匹配的子元素
//children()找到所有匹配的直系子元素
//last（）最后一个子元素
//css()增加 css样式
//each()遍历获取单个标签
//siblings()同胞元素
//addClass()添加类名
//removeClass()移除类名
//slideDown()向下滑
//slideUp（）向上滑
topTag.find('.left').each(function(){
	//如果css中的属性值是数字可不用加引号，若不是数字则要加引号
	$(this).children().last().children().css('border','none');
	$(this).children().hover(function(){
    //		console.log(this) //调用事件的标签对象本身
    $(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})
})
topTag.find('.right > div').hover(function(){
	$(this).addClass('active')
	$(this).find('.shopMenu').stop(true).slideDown()
},function(){
	$(this).find('.shopMenu').stop(true,true).slideUp(500,function(){
		$(this).parent().removeClass('active')
	})
})
//第二部分---主导航效果
//当鼠标滑过时导航时，字体颜色改变
 var navWrap = $('.nav-wrap');
 navWrap.find('.left').children().hover(function(){
 	$(this).addClass('active');
 },function(){
 	$(this).removeClass('active');
 })
   //当鼠标滑过前七个li标签时，显示下拉菜单
   var uls = $('.dropMenu').find('ul');
   navWrap.find('.left').children().hover(function(){
   	var ins = $(this).index();
   	if( ins < 7){
   		uls.eq(ins).addClass('active').siblings().removeClass('active');
   		$('.dropMenu').stop(true).slideDown(1000);
   	}else{
   		$('.dropMenu').stop(true).slideUp(200);
   	}
   })
   //当鼠标离开时
   navWrap.find('.left').mouseleave(function(){
	$('.dropMenu').stop(true).slideUp(200);
})
   //当鼠标放到下拉菜单及离开下拉菜单的程序
   $('.dropMenu').hover(function(){
   	$(this).stop(true).slideDown(200);
   },function(){
   	$(this).stop(true).slideUp(200);
   })
//搜索框效果
navWrap.find('.right').hover(function(){
	$(this).addClass('colors')
},function(){
	$(this).removeClass('colors')
})
navWrap.find('.right input').focus(function(){
	console.log('聚焦了');
	navWrap.find('.right').addClass('active');
	navWrap.find('.right .schShow').fadeOut();
	navWrap.find('.right .schList').show();
}).blur(function(){
	navWrap.find('.right').removeClass('active');
	navWrap.find('.right .schShow').fadeIn();
	navWrap.find('.right .schList').hide();
})
navWrap.find('.right .schList').children().hover(function(){
	$(this).addClass('active')
},function(){
	$(this).removeClass('active')
})
navWrap.find('.right .schShow').children().hover(function(){
	$(this).addClass('active')
},function(){
	$(this).removeClass('active')
})
navWrap.find('.right > a').hover(function(){
	$(this).addClass('active')
},function(){
	$(this).removeClass('active')
})
//第三部分---第一块
$('.sideList').children().each(function(ins){
	$(this).hover(function(){
	$(this).addClass('active');
	$('.rightList').children().eq(ins).show();
},function(){
	$(this).removeClass('active');
	$('.rightList').children().eq(ins).hide();
})
})
$('.rightList').children().each(function(){
	var len = $(this).find('ul').length;
	var ul_width = $(this).find('ul').width(); 
	$(this).css('width',len * ul_width);
	$(this).hover(function(){
		$(this).show()
	},function(){
		$(this).hide();
	});
	$(this).find('ul').children().hover(function(){
		$(this).addClass('actives');
	},function(){
		$(this).removeClass('actives');
	})
	$(this).find('a.xuan').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})
})
//轮播图
var img_li = $('.banner > .imgList > li');
var icon_li = $('.banner > .iconList > li');
var banner = $('.banner');
var num = 0;
var time;
//设置默认显示
function show(index){
	icon_li .eq(index).addClass('active').siblings().removeClass('active');
	img_li .eq(index).fadeIn(1000).siblings().fadeOut(1000);
}
show(num);
//自动轮播
function autoPlay(){
	num++;
	if(num >= icon_li .length){
		num = 0; 
	}
	show(num);
}
time = setInterval(autoPlay,2000);
//鼠标放上停止轮播
banner.hover(function(){
	clearInterval(time);
},function(){
	time = setInterval(autoPlay,2000);
})
//手动轮播
   icon_li.hover(function(){
	$(this).addClass('active');
},function(){
	$(this).removeClass('active');
})   
    icon_li .click(function(){
	var ins = $(this).index();
	show(ins);
	num = ins;
})
//上一张
banner.find('.prev').click(function(){
	num--;
	if(num < 0){
		num = icon_li.length - 1;
	}
//	clearInterval(time);
	show(num);
})
//下一张
banner.find('.next').click(function(){
autoPlay();
//clearInterval(time);
})

//第三部分---第二块
var second = $('.slide-second .left');
second.children().find('li').hover(function(){
	$(this).addClass('active');
},function(){
	$(this).removeClass('active');
})
//第三部分---第三块---明星单品自动轮播效果
//第三部分---第三块---明星单品自动轮播效果
var stars = $('.slide-third').find('.stars');
var ulWidth = stars.find('ul').width();
var ulLen = stars.find('ul').length;
stars.find('section').css('width',ulLen * ulWidth);
//封装下一张
function nextStar(){
	//方法一
	stars.find('.next').removeClass('action').siblings().addClass('action');
	stars.find('section').stop().animate({
		left:-ulWidth
	},500)
////方法二
//var next = stars.find('.next')
//next.removeClass('action').siblings().addClass('action');
//next.hasClass('action') ? next.addClass('active') : next.removeClass('active');
}
//封装上一张
function prevStar(){
		stars.find('.prev').removeClass('action').siblings().addClass('action');
	    stars.find('section').stop().animate({
		left:0
	},500)
}
//明星单品自动轮播
var starTimer;
starTimer = setInterval(function(){
	var starLeft = stars.find('section').position().left;
     (starLeft < 0) ? prevStar() : nextStar();
},2000)
stars.find('p').hover(function(){
	clearInterval(starTimer);
},function(){
	var starLeft = stars.find('section').position().left;
     (starLeft < 0) ? prevStar() : nextStar()
    },2000)
stars.find('p').children().hover(function(){
	//hasClass(className)判断标签是否有类名，有，true，否则，false
	if ($(this).hasClass('action')){
	$(this).addClass('active');
	}
},function(){
	$(this).removeClass('active');
})
//手动轮播
stars.find('.next').click(function(){
	nextStar();
	$(this).removeClass('active');
})
stars.find('.prev').click(function(){
    prevStar();
    $(this).removeClass('active');
})
//第四部分
var jiadian = $('.jiadian');
jiadian.children('.shoubu').find('.nav-wrap li').hover(function(){
	$(this).children().addClass('active')
},function(){
	$(this).children().removeClass('active')
})
jiadian.children('.img-wrap').find('.left a').hover(function(){
	$(this).children().addClass('active');
},function(){
	$(this).children().removeClass('active');
})
jiadian.children('.img-wrap').find('.right ul li').hover(function(){
	$(this).addClass('active');
	$(this).children('.slide').addClass('active').stop(true).animate({
		bottom:'0px'
	},1000)
},function(){
	$(this).removeClass('active');
	$(this).children('.slide').removeClass('active').stop(true).animate({
		bottom:'-78px'
	},1000);
})
