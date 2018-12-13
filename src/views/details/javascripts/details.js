$(function(){
	$("#exzoom").exzoom({
	    "navWidth": 66,//列表每个宽度,该版本中请把宽高填写成一样
	    "navHeight": 66,//列表每个高度,该版本中请把宽高填写成一样
	    "navItemNum": 5,//列表显示个数
	    "navItemMargin": 7,//列表间隔
	    "navBorder": 0,//列表边框，没有边框填写0，边框在css中修改
	    "autoPlay": false,//是否自动播放
	    "autoPlayTimeout": 2000,//播放间隔时间
	});
	
	$(".product-button01").click(function(){
		let val = $(".product-stock-text").val()*1
		let good = {good_name: "荣耀8X", good_img: "../images/428_428_1537234343259mp.jpg", good_price: 2999, good_num: val}
		let goods = Get_cookie();
		// 判断购物车中有没有这个商品，有的话数量+1，没有的话，加入整个商品
        let has = goods.some(item => {
            if ( item.good_name === good.good_name ) { // 有这个商品
                item.good_num += good.good_num || val; // 操作该商品的数量
                return true;
            }
            return false;
        });
        if ( !has ) { // 如果没有这个商品
            goods.push(good)
        }
        goods = JSON.stringify(goods)
        console.log(goods)
        save_cookie(goods)		//最后存入cookie
        alert("成功加入购物车")
		
	})
	
	$("#pro-quantity-plus").click(function(){		//增加
		let $item = $("#pro-quantity").val()
		$("#pro-quantity").val(++$item)
	})
	
	$("#pro-quantity-minus").click(function(){		//减少
		let $item = $("#pro-quantity").val()
		if($item<=1)return false;
		$item--
		$("#pro-quantity").val($item)
	})
	
	
	
	
	
	
	
	
	
	
	function Get_cookie(){		//取出cookie
		let goods_str = $.cookie('goods') ||'[]' 
        return JSON.parse(goods_str);
	}
	
	function save_cookie(good){	//保存cookie
		$.cookie('goods',good,{ path: '/'})
	}
	
	
	
	
})


