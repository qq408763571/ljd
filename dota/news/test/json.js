/**
 * Created by Master on 2016/11/9.
 */
    //json
onload = function () {
    var btn = document.getElementById("load_more_button");
    var box = document.getElementById("qqq");
    btn.onclick = function () {
        var url = "json/img.json";
        function func(str) {
            var img = document.createElement("img");
            img.src = str;
            box.appendChild(img);
        }
        ajax.get(url,func);
    }
}

