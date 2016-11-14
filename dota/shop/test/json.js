/**
 * Created by Master on 2016/11/9.
 */
//地区显示
var oList = document.getElementsByClassName("list");
var oBox = document.getElementById("box");
var lis = $(".list li");
var bis = $("#box li");
var show = document.getElementById("shops");

for(var i=0;i<lis.length;i++){
    lis[i].index = i+1;

    lis[i].onclick = function () {
        for(var j=0;j<lis.length;j++){
            lis[j].className = "";
        }
        this.className = "active";
        show.innerHTML = lis[this.index-1].innerHTML;
    }
}

for(var i=0;i<bis.length;i++){
    bis[i].index = i+1;

    bis[i].onclick = function () {
        for(var j=0;j<bis.length;j++){
            bis[j].className = "";
        }
//                    this.className = "active";
//                    show.innerHTML = bis[this.index-1].innerHTML;
    }
}


var count = 1;
$(".ss-slist").click(function () {
    $.getJSON("json/shop.json", function (response,status,xhr) {
        if (status == "success") {
            var arr = response;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].page == count) {
                    var list = arr[i].list;
                    for (var j = 0; j < list.length; j++) {
                        var li = $("<li>" + list[j] + "</li>");
                        $("#shops").append(li);
                    }
                    count++;
                    break;
                }
            }
        }
    })
})
