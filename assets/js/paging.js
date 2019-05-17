
let curPage = 1

function openPage(pageId) {
	document.getElementById("btn-page"+curPage).classList.remove("active")
	document.getElementById("page"+curPage).classList.replace("page-active","page")
	
	document.getElementById("btn-page"+pageId).classList.add("active")
	document.getElementById("page"+pageId).classList.replace("page","page-active")
	curPage = pageId;
}

function nextPage() {
	page = curPage + 1
	pageId = checkPage(page);
	openPage(pageId);
}

function prevPage(){
	page = curPage - 1
	pageId = checkPage(page);
	openPage(pageId);
}

function checkPage(page){
	if(page > 4){
		return 1
	} else if(page < 1){
		return 4
	} else{
		return page
	}
}