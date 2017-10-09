var obj;

//Setup the program
function setup(){
	var newCanvas = createCanvas(800, 450);
	newCanvas.parent("canvas");
	obj = new Obj();

}
//Drawing loop
function draw(){
	background(255);
	obj.update();
	obj.show();

	var fpsView = document.getElementById("fpsview");
	fpsView.innerHTML = "FPS: " + Math.floor(frameRate());



	if(frameRate() >= 50){
		fpsView.style.color = "#008E00";
	}else if(frameRate() < 50 && frameRate() > 30){
		fpsView.style.color = "#BB5500";
	}else if(frameRate() <= 30){
		fpsView.style.color = "#B6000D";
	}


}
//Mouse Clicked Event
function mouseClicked(){
	obj.forceInput();
}