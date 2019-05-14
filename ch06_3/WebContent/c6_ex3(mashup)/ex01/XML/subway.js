window.onload = function() {
/*    var interval = setInterval(handleRefresh, 3000);*/
    handleRefresh();
}

function handleRefresh() {
//추가1
	var url = "http://openapi.seoul.go.kr:8088/436d4a5053636f743131385573684363/xml/" +
			"CardSubwayStatsNew/1/100/20180101";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if( this.readyState == 4 && this.status == 200){
			updateTraffic(this);
		}
	};
	xhttp.open("GET",url,true);
	xhttp.send();
}
function updateTraffic(xml){
	var xmlDoc = xml.responseXML;
	var subwayDiv = document.getElementById("subwaypeople");
	traffic = xmlDoc.getElementsByTagName("row");
	for(var i=0; i<traffic.length; i++){
		var row = traffic[i];
		var div = document.createElement("div");
		div.setAttribute("class","subwayItem");
		div.innerHTML = row.getElementsByTagName("USE_DT")[0].childNodes[0].nodeValue+"일에 "
					+row.getElementsByTagName("LINE_NUM")[0].childNodes[0].nodeValue+"호선에 "
					+row.getElementsByTagName("SUB_STA_NM")[0].childNodes[0].nodeValue+"역에서 "
					+row.getElementsByTagName("RIDE_PASGR_NUM")[0].childNodes[0].nodeValue+"명이 승차하고 "
					+row.getElementsByTagName("ALIGHT_PASGR_NUM")[0].childNodes[0].nodeValue+"명이 내렸습니다.";
		subwayDiv.appendChild(div);
	}
}
/*function updateTraffic(responseText) {
    var subwayDiv = document.getElementById("subway");
    var subways = JSON.parse(responseText);
    for (var i = 0; i < subways.length; i++) {
        var subway = subways[i];
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        div.innerHTML = subway.USE_MON + " : " + subway.LINE_NUM + " : " + subway.SUB_STA_NM + " : "
                        + subway.SEVENTEEN_RIDE_NUM + " : " + subway.SEVENTEEN_ALIGHT_NUM;
        if (subwayDiv.childElementCount == 0) {
                subwayDiv.appendChild(div);
            } else {
                subwayDiv.insertBefore(div, subwayDiv.firstChild);
            }
    }
}*/
/*
function updateTraffic(subwaypeople) {
    var subwayDiv = document.getElementById("subwaypeople");
    var traffic = subwaypeople.CardSubwayStatsNew.row;
    for (var i = 0; i < traffic.length; i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "subwayItem");
        //추가2
        div.innerHTML = "  " 
    	+ traffic[i].USE_DT + "일에 " 
    	+ traffic[i].LINE_NUM + "호선에 " 
    	+ traffic[i].SUB_STA_NM + "역에서 " 
    	+ traffic[i].RIDE_PASGR_NUM + "명이 승차하고 " 
    	+  traffic[i].ALIGHT_PASGR_NUM + "명이 내렸습니다.   ";




            if (subwayDiv.childElementCount == 0) {
                subwayDiv.appendChild(div);
            } else {
                subwayDiv.insertBefore(div, subwayDiv.firstChild);
            }
    }

 }
*/