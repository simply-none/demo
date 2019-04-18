// 随机数验证码
var cacheCode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// strCode设置全局变量用于验证用户输入与随机码是否匹配
var strCode = "";

function randomCode() {
    strCode = "";
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
var colorArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
function color() {
    var str = "#";
    // 此处应该谨记字符需要加上引号，否则报错
    for (var i = 0; i < 6; i++) {
        var random = Math.floor(Math.random() * 16);
        str += colorArr[random];
    }
    // alert(str);
    return str;
}
// 定义验证码倾斜角度
function randomCodeTransformRotate() {
    var random = Math.floor(Math.random() * 60 - 30);
    return random;
    /*
    // 正负开关
    var randomFlag = Math.floor(Math.random() * 2);
    if (randomFlag === 1) {
        return -random;
    }
    else {
        return random;
    }
    */
}
// 定义缩放粗细
function codeScale() {
    var strScale = "scale(";
    // x轴缩放0.5~1.5之间
    var scaleX = Math.random() + 0.5;
    // y轴缩放0.5~1.0之间
    var scaleY = Math.random() * 0.5 + 0.5;
    strScale = strScale + scaleX + "," + scaleY + ")";
    return strScale;
}
function randomCodeToSpan() {
    var strCode = randomCode();
    for (var i = 0; i < 4; i++) {
        getCodeSpan[i].innerHTML = strCode.charAt(i);
        getCodeSpan[i].style.color = color();
        getCodeSpan[i].style.transform = "skew(" + randomCodeTransformRotate() +"deg)" + codeScale();
    }
}
var getCode = document.getElementById("getCode");
// 防止验证码被选取
getCode.onselectstart = function () {
    return false;
};

var getCodeSpan = getCode.getElementsByTagName("span");
// 页面加载执行一次
randomCodeToSpan();

//点击更换验证码
getCode.onclick = function () {
    randomCodeToSpan();
};

var error = document.getElementById("error");

//验证输入是否正确
//                          可以用正则表达式限制输入？？？

var inputCode = document.getElementById("code");
inputCode.onblur = function () {
    if (inputCode.value !== strCode) {
        // 给提示信息标签添加类名让提示显示出来
        error.className = "error";
        //验证失败跟更新验证码
        randomCodeToSpan();

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

    if (inputCode.value === strCode) {
        form.action = "index.html";
    }
    else {
        form.action = "";
    }
};
