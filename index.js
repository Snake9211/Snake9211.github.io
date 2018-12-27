console.log("hello from the console smileeeeeeeeee!!");



document.addEventListener("DOMContentLoaded", function(event) { 
	document.body.addEventListener("click", function clickBody() {
		console.log("registered tap for body");
    	document.body.style.backgroundColor = "#eaad9f";
	});
  
});