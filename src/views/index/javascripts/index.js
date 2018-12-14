$(document).ready(function(){
    Switch.init();
    slide();
    renderMask();
});

//获取json数据
var Switch = {
    init(){
        this.getData()
    },
    getData(){
        $.ajax({
            type: "get",
            url: "../data/index.json",
            success: (data)=>{
                this.readBanner(data)
            }
        })
    },
    readBanner(res){
        //轮播图渲染
        let str = ""
        res.slideImg.forEach(item => {
            str = `url(${item.src})`
            let index = item.index
            $(".wrap li").eq(index).css("background-image",str)
        })
        //热销单品渲染
        let strHot = ""
        res.hotGoods.forEach(item => {
            strHot +=  `
                        <li class="grid-items">
                            <a href="../../list/list.html" class="thumb">
                                <p class="grid-img"><img src="${item.img}" alt=""></p>
                                <div class="grid-title">${item.title}</div>
                                <p class="grid-desc">${item.desc}</p>
                                <p class="grid-price">${item.price}</p>
                            </a>
                        </li>
                    `
        })
        $("#hotgoods").html(strHot)
        //推荐商品渲染
        let strRec = ""
        res.recommendGoods.forEach(item => {
            strRec +=  `
                        <li class="grid-items">
                            <a href="../../list/list.html" class="thumb">
                                <div class="grid-info">
                                    <p class="grid-img"><img src="${item.img}" alt=""></p>
                                    <p class="grid-desc">${item.desc}</p>
                                </div>
                                <div class="grid-title">${item.title}</div>
                                <p class="grid-price">${item.price}</p>
                            </a>
                        </li>
                    `
        })
        $("#recommendgoods").html(strRec)
        //手机渲染
        let strPhone = ""
        res.phone.forEach(item => {
            if( item.p ){
                strPhone += `
                            <li class="grid-items grid-items-md">
                                <a href="javascript:;">
                                    <img src="${item.p}" alt="">
                                </a>
                            </li>
                        `
            }else{
                strPhone += `
                            <li class="grid-items">
                                <a href="../../list/list.html" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                        <div class="grid-title">${item.title}</div>
                                        <p class="grid-desc">${item.desc}</p>
                                        <p class="grid-price"><span>${item.price}</span></p>
                                    </div>
                                </a>
                            </li>
                        `
            }
        })
        $("#cellphone").html(strPhone)
        //笔记本渲染
        let strNotebook = ""
        res.notebook.forEach(item => {
            if( item.n ){
                strNotebook += `
                                <li class="grid-items grid-items-md">
                                    <a href="javascript:;">
                                        <img src="${item.n}" alt="">
                                    </a>
                                </li>
                            `
            }else{
                strNotebook +=  `
                                <li class="grid-items">
                                    <a href="../../list/list.html" class="thumb">
                                        <div class="grid-info">
                                            <p class="grid-img">
                                                <img src="${item.img}" alt="">
                                            </p>
                                            <div class="grid-title">${item.title}</div>
                                            <p class="grid-desc">${item.desc}</p>
                                            <p class="grid-price"><span>${item.price}</span></p>
                                        </div>
                                    </a>
                                </li>
                            `
            }
        })
        $("#note").html(strNotebook)
        //平板渲染
        let strTablets = ""
        res.tablets.forEach(item => {
            if( item.t ){
                strTablets += `
                                <li class="grid-items grid-items-md">
                                    <a href="javascript:;">
                                        <img src="${item.t}" alt="">
                                    </a>
                                </li>
                            `
            }else{
                strTablets +=  `
                                <li class="grid-items">
                                    <a href="../../list/list.html" class="thumb">
                                        <div class="grid-info">
                                            <p class="grid-img">
                                                <img src="${item.img}" alt="">
                                            </p>
                                            <div class="grid-title">${item.title}</div>
                                            <p class="grid-desc">${item.desc}</p>
                                            <p class="grid-price"><span>${item.price}</span></p>
                                        </div>
                                    </a>
                                </li>
                            `
            }
        })
        $("#tabletsPC").html(strTablets)
        // 智能穿戴
        let strWear = ""
        res.wear.forEach(item => {
            if( item.w ){
                strWear += `
                            <li class="grid-items grid-items-lg">
                                <a href="" class="thumb">
                                    <img src="${item.w}" alt="">
                                </a>
                            </li>
                        `
            }else{
                strWear += `
                            <li class="grid-items">
                                <a href="../../list/list.html" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                        <div class="grid-title">${item.title}</div>
                                        <p class="grid-desc">${item.desc}</p>
                                        <p class="grid-price"><span>${item.price}</span></p>
                                    </div>
                                </a>
                            </li>
                        `
            }
        })
        $("#smartwear").html(strWear)
        let strWear_6 = ""
        res.wear_6.forEach(item => {
            strWear_6 += `
                            <li class="grid-items swiper-slide swiper-slide-visible">
                                <a href="" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                    </div>
                                    <div class="grid-title">${item.title}</div>
                                    <p class="grid-desc">${item.desc}</p>
                                    <p class="grid-price"><span>${item.price}</span></p>
                                </a>
                            </li>
                        `
        })
        $("#smartwear-6").html(strWear_6)
        // 智能家居
        let strHome = ""
        res.home.forEach(item => {
            if( item.h ){
                strHome += `
                            <li class="grid-items grid-items-lg">
                                <a href="" class="thumb">
                                    <img src="${item.h}" alt="">
                                </a>
                            </li>
                        `
            }else{
                strHome += `
                            <li class="grid-items">
                                <a href="../../list/list.html" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                        <div class="grid-title">${item.title}</div>
                                        <p class="grid-desc">${item.desc}</p>
                                        <p class="grid-price"><span>${item.price}</span></p>
                                    </div>
                                </a>
                            </li>
                        `
            }
        })
        $("#smarthome").html(strHome)
        let strHome_6 = ""
        res.home_6.forEach(item => {
            strHome_6 += `
                            <li class="grid-items swiper-slide swiper-slide-visible">
                                <a href="" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                    </div>
                                    <div class="grid-title">${item.title}</div>
                                    <p class="grid-desc">${item.desc}</p>
                                    <p class="grid-price"><span>${item.price}</span></p>
                                </a>
                            </li>
                        `
        })
        $("#smarthome-6").html(strHome_6)
        // 热销配件
        let strParts = ""
        res.parts.forEach(item => {
            if( item.p ){
                strParts += `
                            <li class="grid-items grid-items-lg">
                                <a href="" class="thumb">
                                    <img src="${item.p}" alt="">
                                </a>
                            </li>
                        `
            }else{
                strParts += `
                            <li class="grid-items">
                                <a href="../../list/list.html" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                        <div class="grid-title">${item.title}</div>
                                        <p class="grid-desc">${item.desc}</p>
                                        <p class="grid-price"><span>${item.price}</span></p>
                                    </div>
                                </a>
                            </li>
                        `
            }
        })
        $("#hotparts").html(strParts)
        let strParts_6 = ""
        res.parts_6.forEach(item => {
            strParts_6 += `
                            <li class="grid-items swiper-slide swiper-slide-visible">
                                <a href="" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                    </div>
                                    <div class="grid-title">${item.title}</div>
                                    <p class="grid-desc">${item.desc}</p>
                                    <p class="grid-price"><span>${item.price}</span></p>
                                </a>
                            </li>
                        `
        })
        $("#hotparts-6").html(strParts_6)
        // 品牌配件
        let strBrandParts = ""
        res.brandparts.forEach(item => {
            if( item.b ){
                strBrandParts += `
                            <li class="grid-items grid-items-lg">
                                <a href="" class="thumb">
                                    <img src="${item.b}" alt="">
                                </a>
                            </li>
                        `
            }else{
                strBrandParts += `
                            <li class="grid-items">
                                <a href="../../list/list.html" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                        <div class="grid-title">${item.title}</div>
                                        <p class="grid-desc">${item.desc}</p>
                                        <p class="grid-price"><span>${item.price}</span></p>
                                    </div>
                                </a>
                            </li>
                        `
            }
        })
        $("#brandparts").html(strBrandParts)
        let strBrandParts_6 = ""
        res.brandparts_6.forEach(item => {
            strBrandParts_6 += `
                            <li class="grid-items swiper-slide swiper-slide-visible">
                                <a href="" class="thumb">
                                    <div class="grid-info">
                                        <p class="grid-img">
                                            <img src="${item.img}" alt="">
                                        </p>
                                    </div>
                                    <div class="grid-title">${item.title}</div>
                                    <p class="grid-desc">${item.desc}</p>
                                    <p class="grid-price"><span>${item.price}</span></p>
                                </a>
                            </li>
                        `
        })
        $("#brandparts-6").html(strBrandParts_6)
    }
}

// 轮播图
function slide(){
    var index = 0; 
    // 选中所有的图片;
    var prve_index = 0;
    //图片
    var $slides = $(".slide");
    var $slideswrap = $(".wrap")
    // 按钮包裹;
    var $pagewarp = $(".pagination");
    var maxIndex = $slides.length - 1;
    // 什么是轮播图就是控制 index 自增自减 及 范围的一个小特效;
    $("#right").on("click", next) ;
    $("#left").on("click", prve) ;
    // 切换下一张图片;
    function next(){
        prve_index = index;
        if(index == maxIndex){
            // alert("最后一张图片了,后面没有了");
            index = 0;
        }else{
            index ++;
        }
        changeClass();
    }
    function prve(){
        prve_index = index;
        if(index == 0){
            index = maxIndex;
        }else{
            index --;
        }
        changeClass();
    }
    // 当我们在切换图片的时候，只不过是在操作 index;
    function changeClass(){
        $slides.eq(prve_index).addClass("slide-willhide")
        .siblings(".slide")
        .removeClass("slide-willhide")
        $slides.eq(index).addClass("slide-show")
        .siblings(".slide")
        .removeClass("slide-show")
        // 动画效果;
        .end()
        // 给上一张图片加上class willhide;
        .hide()
        .stop()
        .fadeIn(1000);
        // 更改按钮;
        $pagewarp.children().eq(index).addClass('active')
        .siblings("span").removeClass("active");
    }
    function initPagination(){
        // 创建$slides数量的按钮;
        for(var i = 0 ; i < $slides.length ; i ++){
            var $span = $("<span>");
            if(i == index){
                $span.addClass("active");
            }
            $pagewarp.append($span)
        }
    }
    initPagination()

    // 事件委托 => 委托给小按钮的父级;
    $pagewarp.on("mouseover","span",toIndex)
    function toIndex(event){
        // 获取当前元素的下标;
        // 获取事件源; （获取当前发生事件的元素）
        var e = event || window.event;
        var target = e.target || e.srcElement;
        // jquery提供了一个 index() 方法;
        // 在一组元素之中,查找到某个元素的下标; 
        prve_index = index;
        index = $pagewarp.children().index(target);
        // console.log(i);
        changeClass();
    }   
    // 自动播放 就是让js帮我点击按钮  right;
    setInterval('$("#right").trigger("click")', 3000)
}

// 侧边栏
function renderMask(){
    $(".category-title a").hover(  
        function(){
            $(".mask").css("display","block")
        },
        function(){
            $(".mask").css("display","none")
        }
    )
}

