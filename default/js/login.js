// 随机数验证码
var cacheCode = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBM1234567890";
function randomCode() {
    var strCode = "";
    for (var i = 0; i < 4; i++) {
        /*
        使用到的知识点
        Math.floor()
        Math.random()
        str.charAt();
        */
        var randomChar = Math.floor(Math.random() * 62);
        strCode += cacheCode.charAt(randomChar);
    }
    return strCode;
}

// 页面加载执行一次
var getCode = document.getElementById("getCode");
getCode.value = randomCode();

//点击更换验证码
getCode.onclick = function () {
    getCode.value = randomCode();
    // alert(randomCode())
};

var error = document.getElementById("error");

//验证输入是否正确
//                          可以用正则表达式限制输入？？？

var inputCode = document.getElementById("code");
inputCode.onblur = function () {
    if (inputCode.value !== getCode.value) {
        // 给提示信息标签添加类名让提示显示出来
        error.className = "error";
        //验证失败跟更新验证码
        getCode.value = randomCode();
    }
    // 验证成功隐藏提示
    else {
        error.className = '';
    }
};
// 跳转
var login = document.getElementById("login");
login.onclick = function () {
    var form = document.getElementsByTagName("form")[0];

    // 有问题

    if (error.className === "" || error.className !==null || error.className !==undefined) {
        // alert("error");      test
        form.action = "index.html";
    }
    else {
        form.action = '';

    }
};
