var thinkIcon = document.getElementById("codeNextPic");
var clickedOn = false;

thinkIcon.addEventListener("click", myEventHandler);
function myEventHandler(){

	if (!clickedOn) {
		thinkIcon.setAttribute("src", "coding.jpg")
		var change = document.getElementById("blocktext1").textcontent;
		clickedOn = true;
	} 
	else if (clickedOn) {
		thinkIcon.setAttribute("src", "code.jpg")
		clickedOn = false;
	}
	if(clickedOn) {
		var change = document.getElementById("blocktext1").textcontent;
		onclick = document.getElementById("blocktext1").innerHTML = "I love to code scroll down to see some of my projects."
	}
};
 //document.getElementById("codeNextPic").addEventListener("click", myEventHandler2(){
  //document.getElementByClassName("blocktext1").innerHTML = "Hello World";

//