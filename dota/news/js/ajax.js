/**
 * Created by Master on 2016/10/10.
 */
/*
��װajax
��װһ��ajax���� ���� ���첽���� ���õ� ����������

 */
var ajax = {
    /*
    �����б�
    1 url
    2 func �ص�����
     */
    get: function (url,func) {
        var xhr = new XMLHttpRequest();

        xhr.open("get",url,true);

        xhr.send(null);

        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                var str = xhr.responseText;//��str���� xhr�ķ������ݣ�Ȼ������ص��������д���
                func(str);
            }
        }
    },
    /*
    url
    data
    func
     */
    post: function (url,data,func) {
        var xhr = new XMLHttpRequest();
        xhr.open("post",url,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                var str = xhr.responseText;//��str���� xhr�ķ������ݣ�Ȼ������ص��������д���
                func(str);
            }
        }
    }
}