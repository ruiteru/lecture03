var helloWorld = function(){
	var message = document.getElementById("helloWorld");
	message.setAttribute("class", "");
};

var showHelloWorldButton = document.getElementById("showHelloWorld");
showHelloWorldButton.addEventListener("click", helloWorld);

var helloWorld2 = function(){
	var message = document.getElementById("helloWorld2");
	message.setAttribute("class", "");
};

var showHelloWorld2Button = document.getElementById("showHelloWorld2");
showHelloWorld2Button.addEventListener("click", helloWorld2);
