$(function(){
	init()
	function init(){
		let data = getCookie();
		render_goods_in_list(data)
	}
	add_event_listener()
	
	function render_goods_in_list(data) { // 能接收到需要渲染的数据，作用是渲染数据
        var str = ''
        data.forEach(item => {
            str += good_item_template(item);
        });
        let good_num_price = goods_sum(data)
        
        str += 
        		`
        			<div class="sc-total-tool layout clearfix ">
						<div class="sc-total-control">
							<label class="checkbox">
								<input readonly="readonly" class="vam checked"> 全选
							</label>
							<a href="javascript:;">删除</a>
						</div>
						<div class="sc-total-btn "><a href="javascript:;">立即结算</a></div>
						<div class="sc-total-price">
							<p><label>总计：</label> <span>¥&nbsp; ${good_num_price.price}</span> <em><b>不含运费</b></em></p> 
							<div class="total-choose">已选择<em>${good_num_price.sum}</em>件商品，优惠：<span>¥&nbsp;0.00</span></div>
						</div>
					</div>
        		`
        $('.sc-pro').html(str);
    }
	
	function good_item_template(good){
        let { good_name, good_img,good_price,good_num } = good;
		return`
				<div>
					<div class="sc-pro-list clearfix">
						<lable class = "checkbox" style = "float: left;margin: 43px 3px 0 0;">
							<input readonly="readonly" class="vam">
						</lable>
						<div class="sc-pro-area">
							<div class="sc-pro-main clearfix">
								<a href="/product/478362844.html#963367996" class="p-img">
									<img src="${good_img}">
								</a>
								<ul>
									<li><a class="p-name">${good_name}</a></li>
									<li><div class="p-price"><span>¥&nbsp;${good_price}</span><s>¥&nbsp;9999</s></div></li>
									<li>
										<div class="p-stock">
											<div class="p-stock-area">
												<input type="number" class="p-stock-text" value = ${good_num}> 
													<p class="p-stock-btn"><a href="javascript:;">+</a> 
														<a href="javascript:;" class="">−</a>
													</p>
											</div>
										</div>
									</li>
									<li class="p-price-total">¥&nbsp;${good_price}<span class="p-price-save">¥&nbsp;0</span></li>
									<li><a href="javascript:;" class="p-del">删除</a></li>
								</ul>
							</div>
							<div class="sc-pro-parts"><!----> <!----> <!----> <!----> <!----></div>
						</div>
					</div>
				</div>
			`
	}
	
	function getCookie(){
		let goods_str = $.cookie('goods')||'[]' 
        return JSON.parse(goods_str);
	}
	function save_cookie(good){	//保存cookie
		$.cookie('goods',good,{ path: '/'})
	}
	
	/*计算总价+总数目*/
	function goods_sum(data){
		let good_sum_num = 0
		let good_sum_price = 0
		data.forEach(item => {
			good_sum_num += item.good_num
			good_sum_price += item.good_price*item.good_num
        });
		return {
			sum : good_sum_num,
			price : good_sum_price
		}
	}
	
	/*绑定dom事件*/
	function add_event_listener() {
		$(".p-stock-btn").find("a").eq(0).click(function(){		//增加
			let $item = $(this).parents(".p-stock-area").find("input").val()
			$(this).parents(".p-stock-area").find("input").val(++$item)
		})
		
		$(".p-stock-btn").find("a").eq(1).click(function(){		//减少
			let $item = $(this).parents(".p-stock-area").find("input").val()
			if($item<=1)return false;
			$item--
			$(this).parents(".p-stock-area").find("input").val($item)
			remove_good_in_car( $(".p-stock-btn a").eq(1) )		//cookie中减少商品
			
			let data = getCookie();
			console.log(data)
			render_goods_in_list(data)
		})
		
		function remove_good_in_car(item){
			item = item.parents("ul").find("li").eq(0).find("a").html()
			console.log(item)
			let goods = getCookie(); // 当前的购物车数据
	        for (let i = 0; i < goods.length; i++) {
	            const good = goods[i];
	            if ( good.good_name === item ) {
	                good.good_num -- ;
	                if (  good.good_num <= 1 ) { //数量减没了，应该从购物车删掉这个商品了
	                    good.good_num = 1
	                }
	                break; 
	            }
	        }
	        save_cookie(goods);// 同步到cookie
	        console.log(goods)
		}
		
	}
	
	
})
