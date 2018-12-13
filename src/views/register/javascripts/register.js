var username = $("#username");
var userpwd = $("#userpwd");
var conuserpwd = $("#conuserpwd")
var phonemsg = $("#phonemsg");
var pwdmsg = $("#pwdmsg")
var conpwdmsg = $("#conpwdmsg");
var register = $("#register");
var arr = [];
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
register.on("click",function(){
    if( !(username.val() == "" || userpwd.val() == "" || conuserpwd.val() == "") ){
        alert("正在跳转到登录页面...")
        window.location.href = "../login/login.html";
    }else{
        alert("请输入完整信息");
    }
})
