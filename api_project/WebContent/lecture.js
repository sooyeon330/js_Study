window.onload = function() {
    var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}
function handleRefresh() {
//추가 1
	console.log("here");
	var url = "http://openapi.seoul.go.kr:8088/677766796d636f743232446f765077/json/octastatapi10730/1/1000";
	$.getJSON(url,updatelecture);
}	


function updatelecture(lectures) {
	var lecturesDiv = document.getElementById("lectures");
	lectures = lectures.octastatapi10730.row;

	
	for (var i = 0; i < lectures.length; i++) {
		var lecture = lectures[i];
		var div = document.createElement("div");
		div.setAttribute("class", "lecture");
		/*		
		GIGAN: 년도
		JIYEOK: 지역(구),
		GYE_1: 총합계,
		NAMJA_1: 남자합계,
		YEOJA_1: 여자합계,
		GYE_2: 고령인구합계,
		NAMJA_2: 고령남자합계,
		YEOJA_2: 고령여자합계,
		GYE_3: 고령내국인합계,
		NAMJA_3: 고령내국남자합계,
		YEOJA_3: 고령내국여자합계,
		GYE_4: 고령외국인합계,
		NAMJA_4:고령외국남자합계,
		YEOJA_4: 고령외국여자합계
		*/
		//추가2
		div.innerHTML = lecture.JIYEOK+" 총 인구는 "+lecture.GYE_1+"명(남자:"+lecture.NAMJA_1+"명 여자:"+lecture.YEOJA_1+"명) 이고"
		+"그 중 고령인구는 "+lecture.GYE_1+"명(남자:"+lecture.NAMJA_2+"명 여자:"+lecture.YEOJA_2+"명)";

		
		if (lecturesDiv.childElementCount == 0) {
			lecturesDiv.appendChild(div);
		}
		else {
			lecturesDiv.insertBefore(div, lecturesDiv.firstChild);
		}
	}

}

