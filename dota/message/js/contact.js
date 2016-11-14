/**
 * Created by Master on 2016/11/2.
 */
$(document).ready(function () {


    $("#reset").click(function () {


        $("#Tel").val("");
        $("#name").val("");
        $("#email").val("");
        $("#contact").val("");
    })

    $("#btnMessage").click(function () {


        var name = $("#name").val();
        var email = $("#email").val();
        var tel = $("#Tel").val();


        var content = $("#contact").val();


        var restult = checkunder(name, "姓名");

        if (restult == true) {
            restult = checkunder(tel, "电话");
        }

        if (restult == true) {
            restult = checkunder(email, "邮箱");
        }


        if (restult == true) {
            restult = checkEmail(email);
        }
        if (restult == true) {
            if (content == "") {
                restult = checkunder(content, "留言");
            }
        }


        if (restult == true) {
            $.ajax({
                url: "message.json",
                type: "post",
                dataType: "text",
                data: "tel=" + tel + "&name=" + name + "&emails=" + email + "&content=" + content,
                success: function (data) {

                    $("#Tel").val("");
                    $("#name").val("");
                    $("#email").val("");
                    $("#contact").val("");
                }
            });

            open("success.html");
        }
    });
});

//验证不为空
function checkunder(value, name) {
    reg = /^[^\s]+$/;
    if (!reg.test(value)) {
        alert(name + "不能为空");
        return false;
    }
    return true;
}


function checkEmail(value) {
    reg = /^\w+@\w+\.\w+$/;
    if (!reg.test(value)) {
        alert("邮箱不正确");
        return false;
    }
    return true;
}
