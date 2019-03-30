var thinkIcon = document.getElementById("codeNextPic");
var clickedOn = false;
thinkIcon.addEventListener("click", myEventHandler);
function myEventHandler(){

	if (!clickedOn) {
		thinkIcon.setAttribute("src", "coding.jpg")
		clickedOn = true;
	} 
	else if(clickedOn) {
		thinkIcon.setAttribute("src", "code.jpg")
		clickedOn = false;
	}
}
