// 随机数验证码
var cacheCode = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
// strCode设置全局变量用于验证用户输入与随机码是否匹配
var strCode = "";
var form = document.getElementsByTagName("form")[0];
var navTest = document.getElementsByTagName("nav")[0];
var setSubContent = document.getElementById("subContent");

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

// 事件委托处理           菜单的点击事件
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

//  创建子页面视图
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



    // 遍历功能集合中的所有功能节点功能集合
    // 当传送arrNode时，在IE系列无效，故设置一个functionSet数组存储功能键
    var functionSet = [start, pause, goOn, reset, goBack];
    var arrNode = subFunction.children;
    // alert(arrNode);      /*测试类型*/
    // 给功能模块的功能设置class
    for (var i = 0; i < arrNode.length; i ++) {
        // alert(arrNode[i]);
        arrNode[i].className = "subFunctionSon";
    }

    // 功能包含块结束

    setSubContent.appendChild(title);
    setSubContent.appendChild(timeContent);
    setSubContent.appendChild(subFunction);
    return [title, timeContent,functionSet];
}
// 设置子页面标题和时间显示模块名

function subTitleTimeContent(arrSubTitleContent,selectNode) {
    // 子页面标题标签
    var title = arrSubTitleContent[0];
    // 子页面主体显示内容标签
    var titleValue = null;
    var timeContent = arrSubTitleContent[1];

    // 功能集合
    var functionSet = arrSubTitleContent[2];


    // 返回事件
    // onclick是没有括号的
   functionSet[4].onclick = function () {
       setSubContent.className = "subContentNone";
       navTest.className = "";
       setSubContent.innerHTML = "";
   } ;

   /*functionSet[4].addEventListener("click", function (event) {
       var e = event || window.event;
       var target = e.target || e.srcElement;
       // alert(target.nodeValue)
       if (target) {
           setSubContent.className = "subContentNone";
           navTest.className = "";
           setSubContent.innerHTML = "";
       }
   },false);*/


    var setTime60s = new Date("1970/01/01 00:00:00");
    var setTime0s = new Date("1970/01/01 00:00:00");

    function setTimeNum() {

        setTime60s.setSeconds(60);
        var getSecond = (setTime60s.getTime() - setTime0s.getTime())/ 1000;
        // alert(getSecond);
        var test = document.createTextNode(getSecond);
        timeContent.appendChild(test);

        function startTime60s() {
            if (getSecond > 0) {
                getSecond--;
                timeContent.style.color = color();
            }
            timeContent.innerHTML = "";
            test = document.createTextNode(getSecond);
            timeContent.appendChild(test)
        }

        var timer = null;


        // start time go
        functionSet[0].onclick = function () {
            /*只有在timer为空的时候才执行函数，故当点击一次之后，此时不会再执行
            防止时间加快，而使用
            clearInterval(timer)
            会连续点击之后时间处于静止状态*/
            // 页面显示第一次时/重置getSecond为60执行
            if (getSecond === 60) {
                timer = setInterval(startTime60s, 1000);
            }
        };
        // pause time go
        functionSet[1].onclick = function () {
            clearInterval(timer);
            // 重置为null供继续键使用
            timer = null;
        };
        // go on time
        functionSet[2].onclick = function () {
            if (!timer && getSecond !== 60) {
                timer = setInterval(startTime60s, 1000);
            }


        };
        // reset time
        functionSet[3].onclick = function () {
            clearInterval(timer);
            getSecond = (setTime60s.getTime() - setTime0s.getTime()) / 1000;
            timeContent.innerHTML = "";
            timeContent.style.color = color();
            test = document.createTextNode(getSecond);
            timeContent.appendChild(test)
        };

    }



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
            setTimeNum();

            /*titleValue = document.createTextNode("60秒计时器");
            var setTime60s = new Date("1970/01/01 00:00:00");
            var setTime0s = new Date("1970/01/01 00:00:00");
            setTime60s.setSeconds(60);
            var getSecond = (setTime60s.getTime() - setTime0s.getTime())/ 1000;
            // alert(getSecond);
            var test = document.createTextNode(getSecond);
            timeContent.appendChild(test);

            // 设置背景渐变       ????
            var timeContentBgColor = timeContent.style.backgroundColor;
            timeContentBgColor = color().slice(1);

            function startTime60s() {
                if (getSecond > 0) {
                    getSecond--;
                    timeContent.style.color = color();
                }
                timeContent.innerHTML = "";
                test = document.createTextNode(getSecond);
                timeContent.appendChild(test)
            }

            var timer = null;


            // start time go
            functionSet[0].onclick = function () {
                /!*只有在timer为空的时候才执行函数，故当点击一次之后，此时不会再执行
                防止时间加快，而使用
                clearInterval(timer)
                会连续点击之后时间处于静止状态*!/
                // 页面显示第一次时/重置getSecond为60执行
                if (getSecond === 60) {
                    timer = setInterval(startTime60s, 1000);
                }
            };
            // pause time go
            functionSet[1].onclick = function () {
                clearInterval(timer);
                // 重置为null供继续键使用
                timer = null;
            };
            // go on time
            functionSet[2].onclick = function () {
                if (!timer && getSecond !== 60) {
                    timeContent.style.color = color();
                    timer = setInterval(startTime60s, 1000);
                }
            };
            // reset time
            functionSet[3].onclick = function () {
                clearInterval(timer);
                getSecond = (setTime60s.getTime() - setTime0s.getTime()) / 1000;
                timeContent.innerHTML = "";
                timeContent.style.color = color();
                test = document.createTextNode(getSecond);
                timeContent.appendChild(test)
            };*/
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