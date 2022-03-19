function Mouse(name, color) {
	this.name = name
	this.color = color
}

Mouse.prototype.sleep = function() {
	console.log("sleeping...");
};

Mouse.prototype.run = function() {
	console.log("running...");
}

module.exports = Mouse;

