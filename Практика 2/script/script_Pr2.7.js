window.onload = function() {
    var drawingCanvas = document.getElementById('art');
     var context = drawingCanvas.getContext('2d');
     context.strokeStyle = "#000";
     context.fillStyle = "#f00";
     context.beginPath();
     context.arc(100,100,50,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     context.fillStyle = "#fff";
     context.beginPath();
     context.arc(100,100,45,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
	 
	 context.strokeStyle = "#000";
     context.fillStyle = "#0f0";
     context.beginPath();
     context.arc(100,100,30,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     context.fillStyle = "#fff";
     context.beginPath();
     context.arc(100,100,25,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
}
function but1(){
	var a=document.getElementById("met_");
	if(a.value < 1){
	a.value+=0.1
	}
	else{a.value=0;}
}
function but2(){
	var a=document.getElementById("pro_");
	if(a.value < 1){
	a.value+=0.1
	}
	else{a.value=0;}
}