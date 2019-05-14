/* playlist_store.js
 * 
 * 재생목록의 항목을 저장하고 가져오는 사전준비 코드
 */

function save(item) { //리스트에 추가
	var playlistArray = getStoreArray("playlist");
	playlistArray.push(item);
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() { //이미 저장돼 있는 리스트를 가져옴
	var playlistArray = getSavedSongs();
	var ul = document.getElementById("playlist");
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = playlistArray[i];
			ul.appendChild(li);
		}
	}
}

function getSavedSongs() {
	return getStoreArray("playlist");
}

function getStoreArray(key) {
	var playlistArray = localStorage.getItem(key);
	if (playlistArray == null || playlistArray == "") {
		playlistArray = new Array();
	}
	else {
		playlistArray = JSON.parse(playlistArray);//JSON.parse():객체로 바꿈     JSON.stringfiy():문자열로 바꿈
	}
	return playlistArray;
}

function remove(item){
	if(confirm(item +"을 지우시겠습니까?")){
		var playlistArray = getStoreArray("playlist");
		playlistArray.splice(playlistArray.indexOf(item),1); //?
		localStorage.setItem("playlist",JSON.stringfiy(playlistArray));
	}
	
}


function removeAll(){
	if(confirm("삭제하겠습니까?")) localStorage.clear();
}
