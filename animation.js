(function() {
	var canvas = document.getElementById('canvas'),
    	context = canvas.getContext('2d'),
    	video = document.getElementById('video');
    	vendorURL = window.URL || window.webkitURL;

	navigator.getMedia = navigator.mediaDevices.getUserMedia || navigator.mozGetUserMedia;

	navigator.getUserMedia({
		video: true,
		audio: false
	}, function(stream) {
		video.srcObject = stream;
	}, function(error) {
		alert("Error 404:Camera not found");
	});    

	//video.src = "Arduino Programming Tutorial- Visual studio and serial com port communctions (1).mp4";
	//video.type = "video/mp4";

	video.onplay = function()
	{
		draw();
	};

	function draw()
	{
		context.drawImage(video, 150, 200, 200, 200, 0, 0, 400, 400);
		setTimeout(draw,2);
	}
})();
