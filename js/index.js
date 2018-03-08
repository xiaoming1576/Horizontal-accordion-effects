
$(function(){//页面加载完成之后再执行js
	/*$("#box ul").hover(function(){
		$(this).find("li").animate({"width":"40px"},1000);
	});*/
	$("#box ul li").hover(function(){//鼠标移上去实现什么功能
		$(this).stop().animate({"width":"980px"},1000).siblings().stop().animate({"width":"40px"},1000);
		$(this).find("p").stop().animate({
			"height" : "40px",
			"line-height" : "40px"
		});
	},function(){//鼠标移开实现什么功能
		$("#box ul li").stop().animate({"width":"196px"},1000);
		$(this).find("p").stop().animate({
			"height" : "280px",
			"line-height" : "280px"
		});
	});
})

