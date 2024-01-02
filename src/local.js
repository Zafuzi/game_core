let canvas,
	ctx,
	times = [],
	fps = 0,
	t = 0,
	default_font,
	message = "Hello Game";

function FPS_LOCK() {
	const now = performance.now();
	while (times.length > 0 && times[0] <= now - 1000) {
		times.shift();
	}
	times.push(now);
	fps = times.length;
	loop();
	requestAnimationFrame(FPS_LOCK);
}

function loop() {
	t++;
	// clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// do update
	// do draw
	ctx.fillStyle = "slateblue";
	ctx.font = default_font;
	ctx.fillText(
		message,
		(canvas.width / 2) - ctx.measureText(message).width / 2,
		canvas.height / 2
	);

	// draw the FPS counter
	ctx.fillText(fps, 10, 34);
}

addEventListener("DOMContentLoaded", () => {
	canvas = document.querySelector("#canvas");
	ctx = canvas.getContext('2d');

	// make the canvas fill the screen
	resize();

	default_font = "24px sans-serif";

	// call the electron API
	window["rpc"]?.post("ping");

	// start the game
	requestAnimationFrame(FPS_LOCK)
})

addEventListener("resize", resize)


// Getting data from electron
window["rpc"]?.get("ping", r => {
	message = "Hello Game: " + r;
})

// HELPERS
function resize() {
	const cssToRealPixels = window.devicePixelRatio || 1;

	// Lookup the size the browser is displaying the canvas in CSS pixels
	// and compute a size needed to make our drawingBuffer match it in
	// device pixels.
	const displayWidth = Math.floor(canvas.clientWidth * cssToRealPixels);
	const displayHeight = Math.floor(canvas.clientHeight * cssToRealPixels);

	// Check if the canvas is not the same size.
	if (canvas.width !== displayWidth ||
		canvas.height !== displayHeight) {

		// Make the canvas the same size
		canvas.width = displayWidth;
		canvas.height = displayHeight;
	}
}