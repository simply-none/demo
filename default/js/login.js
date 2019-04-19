// 随机数验证码
var cacheCode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// strCode设置全局变量用于验证用户输入与随机码是否匹配
var strCode = "";
var form = document.getElementsByTagName("form")[0];
var navTest = document.getElementsByTagName("nav")[0];
var setSubContent = document.getElementById("subContent");


// 事件委托处理菜单的点击事件
function eventReplace(event) {
    var e = event || window.event;
    //target表示触发事件的对象的引用,srcElement适应ie6-8
    var target = e.target || e.srcElement;
    //选择按钮
    // alert(target.nodeName);      测试目标节点的标签类型
    if (target.nodeName === "BUTTON") {
        // alert(target.firstChild.nodeValue);  测试目标节点的值
        navTest.className = "click";
        // 定义选中的节点的值
        var selectNode = target.firstChild.nodeValue;

        if (selectNode === "登录") {
            form.className = '';
        }
        else {
            // 设置鼠标点击对象的类值
            setSubContent.className = "subContentDisplay";
/*            switch (selectNode) {
                case "倒数日":
                    
                    break;
                case "纪念日":
                    
                    break;
                case "考试倒计时":
                    
                    break;

                case "出生的天数":
                    
                    break;

                case "日期间隔":
                    
                    break;

                case "哈哈哈":
                    
                    break;

                case "60秒计时器":
                    
                    break;

                case "5分钟计时器":
                    
                    break;

                case "30分钟计时器":
                    
                    break;

                case "自定义计时器":
                    
                    break;
            }*/
            subTitleTimeContent(deadlineTime60s(),selectNode);
        }
    }
}

navTest.addEventListener("click", eventReplace, false);

// 功能变量
var start = null;
// pause：暂停
var pause = null;
var reset = null;
var goOn = null;
var goBack = null;

//  60s倒计时 内容
function deadlineTime60s() {
    var title = document.createElement("h2");
    // var titleValue = document.createTextNode("60s倒计时");
    // title.appendChild(titleValue);

    var timeContent = document.createElement("div");
    timeContent.className = "timeContent";
    // 功能包含块subFunction
    var subFunction = document.createElement("div");

    start = document.createElement("button");
    var startValue = document.createTextNode("开始");
    start.appendChild(startValue);

    pause = document.createElement("button");
    var pauseValue = document.createTextNode("暂停");
    pause.appendChild(pauseValue);

    goOn = document.createElement("button");
    var goOnValue = document.createTextNode("继续");
    goOn.appendChild(goOnValue);

    reset = document.createElement("button");
    var resetValue = document.createTextNode("重置");
    reset.appendChild(resetValue);

    goBack = document.createElement("button");
    var goBackValue = document.createTextNode("返回");
    goBack.appendChild(goBackValue);

    subFunction.appendChild(start);
    subFunction.appendChild(pause);
    subFunction.appendChild(goOn);
    subFunction.appendChild(reset);
    subFunction.appendChild(goBack);
    // 遍历功能集合中的所有功能节点
    // var functionSet = [];    功能集合
    var arrNode = subFunction.children;
    // alert(arrNode);      测试类型
    // 给功能模块的功能设置class
    for (var i = 0; i < arrNode.length; i ++) {
        // alert(arrNode[i]);
        arrNode[i].className = "subFunctionSon";
    }

    // 返回主页面:goBack
        arrNode[4].onclick = function () {
            setSubContent.className = "subContentNone";
            navTest.className = "";
            setSubContent.innerHTML = "";
        };

    // 功能包含块结束

    setSubContent.appendChild(title);
    setSubContent.appendChild(timeContent);
    setSubContent.appendChild(subFunction);
    return [title, timeContent,arrNode];
}
// 设置子页面标题和时间显示模块名

function subTitleTimeContent(arrSubTitleContent,selectNode) {
    // 子页面标题标签
    var title = arrSubTitleContent[0];
    // 子页面主体显示内容标签
    var timeContent = arrSubTitleContent[1];
    // 功能集合
    var functionSet = arrSubTitleContent[2];
    
    // 返回事件
    // functionSet.onclick() = function () {
    //
    // }
        
        
        
    var titleValue = null;
    switch (selectNode) {
        case "倒数日":
            titleValue = document.createTextNode("倒数日");
            break;
        case "纪念日":
            titleValue = document.createTextNode("纪念日");
            break;
        case "考试倒计时":
            titleValue = document.createTextNode("考试倒计时");
            break;

        case "出生的天数":
            titleValue = document.createTextNode("出生的天数");
            break;

        case "日期间隔":
            titleValue = document.createTextNode("日期间隔");
            break;

        case "哈哈哈":
            titleValue = document.createTextNode("哈哈哈");
            break;

        case "60秒计时器":
            titleValue = document.createTextNode("60秒计时器");

            break;

        case "5分钟计时器":
            titleValue = document.createTextNode("5分钟计时器");
            break;

        case "30分钟计时器":
            titleValue = document.createTextNode("30分钟计时器");
            break;

        case "自定义计时器":
            titleValue = document.createTextNode("自定义计时器");
            break;

    }
    title.appendChild(titleValue);

}

var getSubFunctionSon = document.getElementsByClassName("subFunctionSon");
// 返回主页面
for (var i = 0; i < getSubFunctionSon.length; i++) {
    alert("error")
    getSubFunctionSon[i].onclick = function () {
        setSubContent.className = "subContentNone";
        navTest.className = "";
        // setSubContent.innerHTML = "";

    };
}


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
    /*用到的知识：
    Math.floor()向下取整
    Math.ceil()向上取整*/
    var random = Math.floor(Math.random() * 60 - 30);
    return random;
    /*
    // 正负开关
    var randomFlag = Math.ceil(Math.random() * 2);
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
var getUsername = document.getElementById("username");
var getCodeSpan = getCode.getElementsByTagName("span");
var inputCode = document.getElementById("code");

// 页面加载执行一次
// randomCodeToSpan();          //此处为不需注释代码


// 实验代码     第一次自动填写验证码
function firstLoadCode() {
    randomCodeToSpan();
    inputCode.value = strCode;
}

firstLoadCode();
//点击更换验证码
getCode.onclick = function () {
    randomCodeToSpan();
};

var error = document.getElementById("error");

//验证输入是否正确
inputCode.onblur = function () {
    if (inputCode.value !== strCode) {
        // 给提示信息标签添加类名让提示显示出来
        error.className += " errorCode";
        //验证失败跟更新验证码
        randomCodeToSpan();

    }
    // 验证成功隐藏提示
    else {
        error.className = "error";
    }
};
// 跳转
var login = document.getElementById("login");
login.onclick = function () {
    if (inputCode.value === strCode) {
        form.className = "form";
        navTest.className = "";
        navTest.firstElementChild.firstElementChild.innerHTML = getUsername.value + ", ";
    }
    else {
        error.className += " errorCode";
    }


    // 改进？？？

};

// 输入框聚焦之后的边框样式
var setFocusInput = document.getElementsByClassName("focus");


//          未实现？？？
for (var i = 0; i < setFocusInput.length; i++) {
    if (setFocusInput[i].onfocus) {
        setFocusInput[i].className = "focus";
    }
    else {
        setFocusInput[i].className = "blur"
    }
}