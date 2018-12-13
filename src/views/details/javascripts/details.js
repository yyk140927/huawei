//放大镜
$("#mark").mouseenter(function(){
	$("#slider").css("display","block");
	$("#bigbox").css("display","block");
})
$("#mark").mouseleave(function(){
	$("#slider").css("display","none");
	$("#bigbox").css("display","none");
})
$("#mark").mousemove(function(evt){
	var e=evt||window.event;
	var left=e.pageX-$("#smallbox").offset().left-$("#slider").width()/2;
	var top=e.pageY-$("#smallbox").offset().top-$("#slider").height()/2;
	//console.log("left:::"+left,"top:::"+top)
	if(left<=0){
		left=0;
	}else if(left>$("#smallbox").width()-$("#slider").width()){
		left=$("#smallbox").width()-$("#slider").width();
	}
	if(top<=0){
		top=0;
	}else if(top>$("#smallbox").height()-$("#slider").height()){
		top=$("#smallbox").height()-$("#slider").height();
	}
	$("#slider").css("left",left);
	$("#slider").css("top",top);
	var Px=left/($("#smallbox").width()-$("#slider").width());
	var Py=top/($("#smallbox").height()-$("#slider").height());
	$("#bigbox").css("left",-Px*($("#bigbox").width()-$("#bigbox").width()));
	$("#bigbox").css("top",-Py*($("#bigbox").height()-$("#bigbox").height()))
})
//小图轮播
//console.log($(".desmlmove li").length);
//console.log($("smallbox img").length,$(".desmlmove li").length);
var index=0;
$("#smallbox img").eq(index).css("display","block");
$("#bigbox img").eq(index).css("display","block");
$(".minibox_ li").mouseenter(function(){
	index=$(this).index();
	$(".minibox_ li").find("a").each(function(){
		$(this).css("borderColor","#fff");
	})
	$(".minibox_ li").find("a").eq(index).css("borderColor","#CA141D")
	$("smallbox img").each(function(){
		$(this).css("display","none");
	})
	$("smallbox img").eq(index).css("display","block");
	$("#bigbox img").each(function(){
		$(this).css("display","none");
	})
	$("#bigbox img").eq(index).css("display","block");
});
$(".minibox_ li").mouseleave(function(){
	//index=$(this).index();
	$(".minibox_ li").find("a").eq(index).remove("click");
})