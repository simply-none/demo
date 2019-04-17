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
		if (this.innerHTML === "x<sup>y</sup>") {
			getNumberString += "^"
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
}
