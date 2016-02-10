function Module (options) {
	this.options = options;
	this.actions = {};
}

Module.prototype.action = function (id, amount) {
	if (!amount) {
		amount = 1;
	}
	this.actions[id] += amount;
};

Module.prototype.get = function (id) {
	return this.actions[id];
};

module.exports = Module;
