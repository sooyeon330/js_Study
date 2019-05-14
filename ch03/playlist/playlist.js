/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick; //핸들러함수
	loadPlaylist();
	
	var delallbtn= document.getElementById("delAllButton");
	delallbtn.onclick = removeAllButtonClick;
	
	var delbtn = document.getElementById("delButton");
	delbtn.onclick = removeButtonClick;
}
function removeButtonClick(e){
	var textInput = document.getElementById("delText");
	var songText = textInput.value;
	
	if(songText == null) { alert("곡을 입력하세요");}
	else { remove(songText); }
}

function remove(item){
	if(confirm(item +"을 지우시겠습니까?")){
		var playlistArray = getStoreArray("playlist");
		playlistArray.splice(playlistArray.indexOf(item),1); //?
		localStorage.setItem("playlist",JSON.stringify(playlistArray));
//		loadPlaylist();
	}
	
}

function removeAllButtonClick(e){
	removeAll();
} 
function handleButtonClick(e) {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;
	//alert("Adding " + songName);

	//추가1
	if(songName == "") alert("곡을 입력하세요");
	else{
		var li = document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		
		//
		save(songName);
		
	}

}


