$(function(){
	getData();
	function getData() {// 获取数据
        $.ajax({
            type:"get",
            url:"../data/list.json",
            success: (data) => {
                renderBannerItem(data)  //商品列表
                // MouseLi(data)
                /*getHeadList(data)			//下拉商品列表标题
                getHeadImg(data)	*/		//下拉商品图片
            }
        })
    }
	
	function renderBannerItem(res){//商品列表
    	let str = ''
    	res.HUAWEIphone.forEach(item => {
    		str +=`
    			<li>
					<div class="pro-panels">
						<p class="p-img"><a><img src="${item.img}"></a></p>
						<p class="p-name">
							<span class="p_title">${item.title}</span>
						</p>
						<p class="p-price">${item.price}</p>
						<div class="p-button clearfix">
							<div class="buy-btn" style="width: 110px;height: 34px;float: left;border: 1px solid #dedede;">选购</div>
							<div style="width: 110px;height: 34px;float: left;border: 1px solid #dedede;">8679人评价</div>
						</div>
						<s class="p-tag"><img src="${item.tips}"></s>
					</div>
				</li>
    				`
        })
        $("#cellList").html(str)
        /*加载完成后添加事件*/
        Mouse()
        AddShop()
    }
	
	function Mouse(){
    	$("#cellList li>div").mouseenter(function(){
    		$(this).css(
    			"border","1px solid #00b5e2"
    		)
    	})
    	$("#cellList li>div").mouseleave(function(){
    		$(this).css(
    			"border","1px solid #dedede"
    		)
    	})
    }
	
	
	
	function MouseLi(data){
    	$("#naveList li").on("mouseenter",function(){
			let index = $(this).index()
			let str = ''
			str += `<a>${data.title[index].caption}</a>&nbsp;&gt;&nbsp;`
			for( i = 0, len = data.title[index].detail.length;i < len; i++){
				str += `<span>${data.title[index].detail[i]}</span>`
			}
			$(".breadcrumb-area").html(str)
    		$(".side-bar").slideDown(300)
    	
	    	$("#naveList").on("mouseleave",function(){
	    		$(".side-bar").slideUp(300)
	    	})
	    	console.log(data)
    	})
    }
	
	
	
	/*单击“p-button-cart加入购物车*/
	function AddShop(){
		$("#cellList").on("click",".buy-btn",function(){
			let good = GetMes($(this))			/*单击获取商品详情*/
			console.log(good)
			let goods = Get_cookie();
			// 判断购物车中有没有这个商品，有的话数量+1，没有的话，加入整个商品
            let has = goods.some(item => {
                if ( item.good_name === good.good_name ) { // 有这个商品
                    item.good_num += good.good_num || 1; // 操作该商品的数量
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
	}
	
	/*单击获得该商品详情*/
	function GetMes(obj){
		let $item = obj.parents(".pro-panels")
		let price = $item.find(".p-price").html()
		price = price.replace("￥","")*1
		return{
			good_name : $item.find(".p_title").html(),
			good_img : $item.find(".p-img a img").attr("src"),
			good_price : price,
			good_num : 1
		}
	}
	
	function Get_cookie(){		//取出cookie
		let goods_str = $.cookie('goods') ||'[]' 
        return JSON.parse(goods_str);
	}
	
	function save_cookie(good){	//保存cookie
		$.cookie('goods',good,{ path: '/'})
	}
	
})





