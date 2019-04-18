// 随机数验证码
var cacheCode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function randomCode() {
    var strCode = "";
    // 出现3个的情况，测试randomChar
    var testChar = [];
    for (var i = 0; i < 4; i++) {
        /*
        使用到的知识点
        Math.floor()
        Math.random()
        str.charAt();
        */
        var randomChar = Math.floor(Math.random() * 62);
        testChar.push(randomChar);
        strCode += cacheCode.charAt(randomChar);
    }
    // alert(testChar+strCode);
    return strCode;
}
// 定义颜色
function color() {
    var str = "#";
    // 此处应该谨记字符需要加上引号，否则报错
    var colorArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    for (var i = 0; i < 6; i++) {
        var random = Math.floor(Math.random() * 16);
        str += colorArr[random];
    }
    // alert(str);
    return str;
}

function randomCodeToSpan() {
    var strCode = randomCode();
    // alert("hellp");
    // alert(strCode)
    for (var i = 0; i < 4; i++) {
        getCodeSpan[i].innerHTML = strCode.charAt(i);
        // alert(color());
        // getCodeSpan[i].style.color = "#2ba7ff";
        getCodeSpan[i].style.color = color();
    }
}
// 页面加载执行一次
var getCode = document.getElementById("getCode");
var getCodeSpan = getCode.getElementsByTagName("span");
randomCodeToSpan();


// getCode.value = randomCode();

//点击更换验证码
getCode.onclick = function () {
    // getCode.value = randomCode();
    // alert(randomCode())
    randomCodeToSpan();
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
        error.className = null;
    }
};
// 跳转
var login = document.getElementById("login");
login.onclick = function () {
    var form = document.getElementsByTagName("form")[0];

    // 改进？？？

    if (inputCode.value === getCode.value) {
        form.action = "index.html";
        // alert("error");      test
        // alert(error.className)
    }
    else {
        form.action = "";
        // alert(typeof error.className)
    }
};
