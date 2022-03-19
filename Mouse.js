function Mouse(name, color) {
	this.name = name
	this.color = color
}

Mouse.prototype.run = function() {
	console.log("running");
}
