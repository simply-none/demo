// 平方函数
function sqr(num) {
    return num * num;
}
// 幂函数
function power(num,index) {
    return num ** index;
}
// 获取计算器主盘的数字
var getNumberString = '';
// function getValue() {
var getTd = document.getElementsByTagName("td");
var getDiv = document.getElementById("calculate");
// 获取主盘上所有的键的值，并显示在计算栏
for (var i = 0; i < getTd.length; i++) {
	getTd[i].onclick = function() {
		if (this.innerHTML === "x<sup>2</sup>") {
			getNumberString += "<sup>2</sup>"
		}
		else if (this.innerHTML === "x<sup>y</sup>") {
			getNumberString += "^"
		}
		else if (this.innerHTML === "Mod") {
			getNumberString += "%"
		}
        else if (this.innerHTML === "n!") {
            getNumberString += "!"
        }
		else {
			getNumberString += this.innerHTML;
		}
		getDiv.innerHTML = getNumberString;
    };
}
    // alert(getNumberString);
// }

// 清除内容
var deleteAll = document.getElementById("deleteAll");
deleteAll.onclick = function() {
	getNumberString = '';
	getDiv.innerHTML = getNumberString;
};
// 清除一个字
var deleteSignal = document.getElementById("deleteSignal");
deleteSignal.onclick = function () {
	// temp将输入的字符串变为数组，然后利用数组特性删除最后一个字
	var temp = getNumberString.split("");
	temp.pop();
	getNumberString = temp.join('');
	getDiv.innerHTML = getNumberString;
};
// 正则表达式的分割
// 将得到的输入字符串分割后分别进行计算
var table = document.getElementsByTagName("table")[0];
table.onmouseleave = function () {

	var stringSplit = getNumberString.split("\(|\)");
	// alert(stringSplit);
};

document.getElementsByTagName("body")[0].onclick = function () {
	var getPrompt = document.getElementById("prompt");
	getPrompt.style.display = "none";
	var section = document.getElementsByTagName("section")[0];
	// 此处可加上动画渐变效果
	section.style.opacity = 1;
	section.style.transform = "rotate(0deg)";
    var aside = document.getElementsByTagName("aside")[0];
    aside.style.opacity = 1;
    aside.style.transform = "rotate(0deg)"
};

var allTd = document.getElementsByTagName("td");
for (var i = 0; i < allTd.length; i++) {
	if (allTd[i].firstChild.nodeValue === "=") {
		// 计算 表达式结果

	}
}