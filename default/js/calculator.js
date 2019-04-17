// 平方函数
function sqr(num) {
    return num * num;
}
// 幂函数
function power(num,index) {
    return num ** index;
}
// 获取计算器主盘的数字
function getValue() {
    var getNumberString = 'a';
    var getTd = document.getElementsByTagName("td");
    for (var i = 0; i < getTd.length; i++) {
        getTd[i].onclick = function() {
            alert(this.innerHTML);
        };
    }
    document.getElementById("calculate").innerHTML = getNumberString;
}
getValue();