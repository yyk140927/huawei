$(document).ready(function(){
    var username = $("#username");
    var userpwd = $("#userpwd");
    var conuserpwd = $("#conuserpwd")
    var phonemsg = $("#phonemsg");
    var pwdmsg = $("#pwdmsg")
    var conpwdmsg = $("#conpwdmsg");
    var register = $("#register");
    var regphone = /^[1][3,4,5,6,7,8][0-9]{9}$/;
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
        if(conuserpwd.val() != userpwd.val()){
            conpwdmsg.css("display","block").css("color","red")
            conpwdmsg.html("两次密码不一致")
        }else{
            conpwdmsg.css("display","block").css("color","green")
            conpwdmsg.html("正确")
        }
    })

    var arr = [];
    register.click(function(){
    	var cookieArr = $.cookie("userlist")
    	// console.log(cookieArr)
    	if( username.val() && userpwd.val() ){
    		var json = {
    			name : username.val(),
                pwd : userpwd.val(),
                conpwd : conuserpwd.val()
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
                if(conuserpwd.val() === userpwd.val()){
                    alert("注册成功,为您跳转到登录页面")
		    	    location.href = "../../login/login.html";
                }
		    	
    		}
    	}else{
    		alert("注册失败，请正确填写完以上内容再进行注册")
    		
    	}
    })

})