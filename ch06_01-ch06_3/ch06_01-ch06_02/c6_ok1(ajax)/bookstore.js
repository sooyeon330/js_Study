/* mightygumball.js */
/*
 * JSON 파일의 내용을 Ajax로 가져옴
 *
 */

window.onload = init;

function init() {
	getSales();
}


function getSales() {
	// 아래 지정한 URL을 sales.json 파일을 넣은 경로로 변경하세요!
	var url = "bookstore.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function() {
		if (request.status == 200) {
			updateSales(request.responseText);
		}
	};
	request.send(null);
}

function updateSales(responseText) {
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);
	for (var i = 0; i < sales.length; i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + "[저자명 : "+sale.author+"]은 " + sale.sales + "권 판매";
		salesDiv.appendChild(div);
	}
}

