window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}
function handleRefresh() {
//추가 1
	var url = "http://openapi.seoul.go.kr:8088/436d4a5053636f743131385573684363/" +
			"json/GwanakClassLectureList/1/30/";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if( this.readyState == 4 && this.status == 200){
			updatelecture(this);
		}
	};
	xhttp.open("GET",url,true);
	xhttp.send();
}	

function updatelecture(xml){
	var xmlDoc = xml.responseXML;
	var lecturesDiv = document.getElementById("lectures");
	lectures = xmlDoc.getElementsByTagName("row");
	for(var i=0; i<lectures.length; i++){
		var row = lectures[i];
		var div = document.createElement("div");
		div.setAttribute("class","lecture");
		div.innerHTML = "강좌명:" +row.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue+"은 "
					+" 교육기간:"+row.getElementsByTagName("EDU_PERIOD")[0].childNodes[0].nodeValue+" "
					+" 교육장소:"+row.getElementsByTagName("EDU_PLACE")[0].childNodes[0].nodeValue+" "
					+" 교육대상:"+row.getElementsByTagName("EDU_TARGET")[0].childNodes[0].nodeValue+" "
					+" 접수방법:"+row.getElementsByTagName("APPLY_WAY")[0].childNodes[0].nodeValue+" "
					+" 수강료:"+row.getElementsByTagName("EDU_PAY")[0].childNodes[0].nodeValue+" ";
		subwayDiv.appendChild(div);
	}
}
/*
function updatelecture(lectures) {
	var lecturesDiv = document.getElementById("lectures");
	lectures = lectures.GwanakClassLectureList.row;

	
	for (var i = 0; i < lectures.length; i++) {
		var lecture = lectures[i];
		var div = document.createElement("div");
		div.setAttribute("class", "lecture");
		1   TITLE	강좌명
		2	EDU_PERIOD	교육기간
		3	EDU_PLACE	교육장소
		4	EDU_TARGET	교육대상
		5	APPLY_WAY	접수방법
		6	EDU_PAY	수강료
		7	APPLY_PERIOD	접수기간
		
		//추가2
		div.innerHTML = "강좌명:" +lecture.TITLE 
		+ "은 " +" 교육기간:"+lecture.EDU_PERIOD + " " 
		+" 교육장소:"+lecture.EDU_PLACE + " " 
		+" 교육대상:"+lecture.EDU_TARGET + " " 
		+" 접수방법:"+lecture.APPLY_WAY + " " 
		+" 수강료:"+lecture.EDU_PAY + "원입니다 ";

		
		if (lecturesDiv.childElementCount == 0) {
			lecturesDiv.appendChild(div);
		}
		else {
			lecturesDiv.insertBefore(div, lecturesDiv.firstChild);
		}
	}

}

*/