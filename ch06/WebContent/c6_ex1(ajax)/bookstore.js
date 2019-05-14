window.onload = init;

function init() {
	getSales();
}

function getSales() {
    var url = "bookstore.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
    	if(request.status ==200){
    		updateSales(request.responseText);
    	}
    };
    request.send(null);
}

function updateSales(responseText) {
    var bookDiv = document.getElementById("book");
//    salesDiv.innerHTML = responseText;
//    JSON.parse()는 객체로 변환
    
    var books = JSON.parse(responseText);
    for(var i=0; i<books.length; i++){
    	var book = books[i];
    	var div = document.createElement("div");
    	div.setAttribute("class", "saleItem");
    	div.innerHTML = book.name +"[저자명 : " + book.author + "]은 "+book.sales+"권 판매";
    	bookDiv.appendChild(div);
    }

    
}
