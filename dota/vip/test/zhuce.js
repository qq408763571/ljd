/**
 * Created by Master on 2016/11/9.
 */
//登录注册
var userspan = $("#userspan");
var userspan2 = $("#userspan2");
var userspan3 = $("#userspan3");
var flag1 = false;
var flag2 = false;
var flag3 = false;

/*
 用户名
 */
$("#ipdl").blur(function(){
    var str = $("#ipdl").val();
    var reg1 = /^\w{6,}$/;
    if(str.length<6){
        userspan.html("用户名长度不足6位");
        userspan.css("color","red");
        flag1 = false;
    }else{
        if(!reg1.test(str)){
            userspan.html("用户名字符不合法");
            userspan.css("color","red");
            flag1 = false;
        }else{
            userspan.html("用户名合法");
            userspan.css("color","green");
            flag1 = true;
        }
    }

})

/*密码*/
var reg2 = /^\w{6,20}$/;
$("#ipmm").blur(function(){
    var str = $("#ipmm").val();
    var str2 = $("#ipok").val;
    if(reg2.test(str)){
        userspan2.html("密码合法");
        userspan2.css("color","green");
        flag2 = true;
    }else{
        userspan2.html("密码不合法");
        userspan2.css("color","red");
        flag2 = false;
    }
    if(str == str2){
        flag3 = true;
    }else{
        flag3 = false;
    }
})

/*
 重新输入密码
 */
$("#ipok").blur(function () {
    var str1 = $("#ipmm").val();
    var str2 = $("#ipok").val();
    console.log(str1);
    if(reg2.test(str2)){
        if(str1 == str2){
            userspan3.html("密码一致");
            userspan3.css("color","green");
            flag3 = true;
        }else{
            userspan3.html("密码不一致");
            userspan3.css("color","red");
            flag3 = false;
        }
    }else{
        userspan3.html("密码不合法");
        userspan3.css("color","red");
        flag3 = false;
    }
})
