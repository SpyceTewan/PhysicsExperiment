function Obj(){

	//Initialise the Variables
	this.x = 400;
	this.y = 225;
	this.gravity = document.getElementById("gravityInput").value / 100;
	this.elastic = document.getElementById("elasticInput").value / 100;
	this.forcescale = document.getElementById("forceInput").value / 10;
	this.size = document.getElementById("sizeInput").value;
	this.velocityx = 0;
	this.velocityy = 0;
	this.friction = document.getElementById("frictionInput").value / 100;
	
	//Draw the Object
	this.show = function(){
		rect(this.x, this.y, this.size, this.size);
	}

	//Execute the friction on collision event
	this.executeFriction = function(){	
		if(this.velocityx > 0){
			this.velocityx -= this.friction;
		}else if(this.velocityx < 0){
			this.velocityx += this.friction;
		}
		if(this.velocityy > 0){
			this.velocityy -= this.friction;
		}else if(this.velocityy < 0){
			this.velocityy += this.friction;
		}

		
	}

	//Updates each frame
	this.update = function(){

		//Update variables each frame (Will later be changed due to performance)
		this.gravity = document.getElementById("gravityInput").value / 100;
		this.elastic = document.getElementById("elasticInput").value / 100;
		this.forcescale = document.getElementById("forceInput").value / 10;
		this.size = document.getElementById("sizeInput").value;
		this.friction = document.getElementById("frictionInput").value / 100;
		
		//Gravity acceleration
		if(this.y < height - this.size){
			this.velocityy += this.gravity;	
		}

		//Collision Detection
		if(this.y > height - this.size){
			this.y = height - this.size;
			this.velocityx *= this.elastic;
			this.velocityy *= -this.elastic;
			this.executeFriction();
		}
		if(this.y < 0){
			this.y = 0;
			this.velocityy *= -this.elastic;
			this.executeFriction();
		}
		if(this.x < 0){
			this.x = 0;
			this.velocityx *= -this.elastic;
			this.executeFriction();
		}
		if(this.x > width - this.size){
			this.x = width - this.size;
			this.velocityx *= -this.elastic;
			this.executeFriction();
		}
		//Apply the force to the Object
		this.x += this.velocityx;
		this.y += this.velocityy;

		//Round the coordinates to an Integer
		this.velocityx = Math.floor(this.velocityx);
		this.velocityy = Math.floor(this.velocityy);
		
		//Debug Console Output
		//console.log(this.velocityy);	
	}
	//Left Mouse Click Event
	this.forceInput = function(){

		//Apply the force to the velocity
		if(mouseX > this.x){
			this.velocityx += this.forcescale;
		}
		if(mouseX < this.x){
			this.velocityx -= this.forcescale;
		}
		if(mouseY > this.y){
			this.velocityy += this.forcescale;
		}
		if(mouseY < this.y){
			this.velocityy -= this.forcescale;
		}
	}

}