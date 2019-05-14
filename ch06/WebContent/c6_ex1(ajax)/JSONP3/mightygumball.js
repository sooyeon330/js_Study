/* mightygumball.js */
/*
 * JSON 파일의 내용을 JSONP로 가져옴
 * 3초마다 업데이트 됨
 *
 */

var lastReportTime

window.onload = init;
// 추가1
function init() {
	var interval = setInterval(handleRefresh, 3000);
	handleRefresh();
}

function handleRefresh() {
	console.log("here");
	var url = "http://gumball.wickedlysmart.com";
	$.getJSON(url + "?callback=?", updateSales);
}

// 추가2
function updateSales(sales) {

	var salesDiv = document.getElementById("sales");
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + "에서 검볼을 " + sale.sales + "개 팔았습니다";
		if (salesDiv.childElementCount == 0) {
			salesDiv.appendChild(div);
		} else {
			salesDiv.insertBefore(div, salesDiv.firstChild);
		}

	}

	if (sales.length > 0) {
		lastReportTime = sales[sales.length - 1].time;
	}

	// div.innerHTML
}