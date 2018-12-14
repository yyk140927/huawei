$(document).ready(function(){
    var username = $("#username");
    var userpwd = $("#userpwd");
    var conuserpwd = $("#conuserpwd")
    var phonemsg = $("#phonemsg");
    var pwdmsg = $("#pwdmsg")
    var conpwdmsg = $("#conpwdmsg");
    var register = $("#register");
    var regphone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var regpwd = /^[a-zA-Z]\w{5,17}$/
    // (以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
    username.blur(function(){
        if(!regphone.test((username).val())){
            // alert("aaa")
            phonemsg.css("display","block").css("color","red")
            phonemsg.html("请输入正确手机号")

        }else{
            phonemsg.css("display","block").css("color","green")
            phonemsg.html("正确")
        }
    })
    userpwd.blur(function(){
        if(!regpwd.test((userpwd).val())){
            // alert("aaa")
            pwdmsg.css("display","block").css("color","red")
            pwdmsg.html("以字母开头，长度在6~18之间，只能包含字母、数字和下划线")
        }else{
            pwdmsg.css("display","block").css("color","green")
            pwdmsg.html("正确")
        }
    })
    conuserpwd.blur(function(){
        if(conuserpwd.val() != (userpwd).val()){
            conpwdmsg.css("display","block").css("color","red")
            conpwdmsg.html("两次密码不一致")
        }else{
            conpwdmsg.css("display","block").css("color","green")
            conpwdmsg.html("正确")
        }
    })

    //点击注册按钮
    // register.on("click",function(){
    //     // console.log((username).val())
    //     if(username.val() && userpwd.val()){
    //         var flag = true;
    //         var arr = [];
    //         var json = {
    //             "name" : username.val(),
    //             "pwd" :  userpwd.val()
    //         }
    //         var brr = getCookie("userlist");
    //         if(brr.length != 0){
    //             arr = brr;
    //             for(var i=0; i<arr.length; i++){
    //                 if(json.name == arr[i].name){
    //                     flag = false;
    //                 }
    //             }
    //         }
    //         if(flag){
    //             arr.push(json);
    //         }
    //         setCookie("userlist",JSON.stringify(arr));
    //         alert("注册成功,正在前往登录页面...")
    //         location.href = "../../login/login.html"
    //     }else{
    //         alert("请正确输入")
    //     }
    // })

    var arr = [];
    register.click(function(){
    	var cookieArr = $.cookie("userlist")
    	// console.log(cookieArr)
    	if( username.val() && userpwd.val() ){
    		var json = {
    			name : username.val(),
    			pwd : userpwd.val(),
    		}
    		var flag = true;
    		if(cookieArr){    			
    			arr = JSON.parse(cookieArr);
    			// console.log(arr)
	    		for(var i = 0 ; i <arr.length ; i++){
	    			if(json.name == arr[i].name){
	    				phonemsg.css("display","block").css("color","red")
                        phonemsg.html("该手机已经注册")
		    			flag = false;
		    			break;
	    			}
	    			
	    		}
    		}
    		if(flag){
	    		arr.push(json)
		    	$.cookie("userlist",JSON.stringify(arr), { path: "/"})
		    	alert("注册成功,为您跳转到登录页面")
		    	location.href = "../../login/login.html";
    		}
    	}else{
    		alert("注册失败，请正确填写完以上内容再进行注册")
    		
    	}
    })
// function setCookie(key,value,days){
// 	if( days ){
// 		var now = new Date();
// 		now.setTime(now.getTime() + days*24*60*60*1000 ) 
// 		document.cookie=key+"="+value +  ";path=/" + ";expires="+now;
// 	}else{
// 		document.cookie=key+"="+value + ";path=/";
// 	}
// }
// function getCookie(key){
// 	//如果cookie中有数据  才可以获取数据
// 	if(document.cookie){		
// 		var cookieInfo = document.cookie;
// 		//cookie中可能会包含一些 额外的数据，这些数据特点是由   分号和空格间隔的
// 		//所以 先将 分号和空格  替换掉   替换成  ;
// 		var arr = cookieInfo.replace(/;\s/g,';').split(";");	
// 		for(var i=0;i<arr.length;i++){
// 			item = arr[i].split("=");
// 			if(item[0] == key){
// 				brr = item[1];
// 				return JSON.parse(brr);//如果找到 我们想要的键，将值转成数组返回 
// 			}
// 		}
// 		//如果cookie中 没有我们想获取的键值，直接返回一个空数组
// 		return [];
// 	}
// 	//如果cookie中没有数据，直接返回一个空数组
// 	return [];
// }
// function removeCookie(key){
// 	setCookie(key,"",-1);
// }


})