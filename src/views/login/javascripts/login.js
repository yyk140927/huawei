
$(document).ready(function(){
    var userlist = $.cookie("userlist") || '[]'
    var arr = JSON.parse(userlist)
    // console.log(arr)
    var unames = []
    for(var i = 0 ; i<arr.length;i++){
        unames.push(arr[i].name)
    }
    //手机号验证方法
    var flagName = null;
    var pwd = null,username = null;
    $("#login_userName").blur(function(){
        var str = $("#login_userName").val();
        var ret = /^[1][3,4,5,7,8][0-9]{9}$/;
        for(var j = 0 ; j < arr.length;j++){
            if(str == arr[j].name){
                pwd = arr[j].pwd
            }
        }
        // console.log(pwd)
        if(str == ""){
            alert("不能为空")
        }else if(ret.test(str)){
            if($.inArray(str,unames) == -1){
                alert("未注册")
                flagName = false;
            }		   
            flagName = true;
            username = str
        }else{
            alert("格式错误");
            flagName = false;
        }
    })
    //登录事件
    $("#btnLogin").click(function(){
        if( flagName &&  $("#login_userName").val() == username && $("#login_password").val() == pwd ){
            alert("登录成功,即将跳转首页")
            window.location.href = "../../index/index.html";
        }else{
            alert("登录失败，请检查用户名密码是否正确")
        }
    })
});

