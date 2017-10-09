<!doctype html>
<html>
<head>
	<title>CANVAS EXPERIMENT BY TEWAN</title>
	<link rel="stylesheet" type="text/css" href="default.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
	<meta charset="UTF-8"/>
	<script src="obj.js"></script>
	<script src="p5.min.js"></script>
	<script src="sketch.js"></script>
</head>
<body>
	<center>
		<div style="width: 820px">
		<h1>PHYSICS EXPERIMENT</h1>
		<p style="font-size: 100%">Made with p5.js by Stefan Heinz aka Tewan (Made in 13.06.2017 | Font: Raleway)</p>
		
		<div id="canvas" style="border: 2px solid black; margin-top: 10px; width: 800px; height: 450px"></div>
		<p id="fpsview" style="font-size: 100%; float: left">WHEN YOU SEE THIS, THE JAVASCRIPT DOESN'T WORK! THIS WEBSITE HAS BEEN DESIGNED FOR USE IN GOOGLE CHROME!</p>
		<div style="border: 2px solid black; margin-top: 30px">
		
			<p style="margin-top: 20px">GRAVITY:</p>
			<input type="number" id="gravityInput" value="100"/>
			
			<p style="margin-top: 20px">ELASTIC:</p>
			<input type="number" id="elasticInput" value="75"/>
			
			<p style="margin-top: 20px">FORCE SCALE:</p>
			<input type="number" id="forceInput" value="50"/>
		             
			<p style="margin-top: 20px">SIZE:</p>
			<input type="number" id="sizeInput" value="20"/>
			
			<p style="margin-top: 20px">FRICTION:</p>
			<input type="number" id="frictionInput" value="100"/>
		
	</div>

	</div>
	</center>

</body>
</html>