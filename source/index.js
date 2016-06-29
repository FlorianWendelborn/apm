export default class APM {

	constructor (options) {
		Object.assign(this, {
			accuracy: 1000,
			timeSpan: 60000,
			data: []
		}, options);

		for (let i = 0; i < this.timeSpawn; i += this.accuracy) {
			this.data[i] = {
				lastUpdate: 0,
				amount: {}
			};
		}
	}

	action (id, amount = 1) {

		const {timeSpan, data, accuracy} = this;
		const now = Date.now();

		const index = Math.floor((
			now % timeSpan
		) / (
			accuracy * 1000
		));

		const pointer = data[index];

		if (pointer.lastUpdate - now > timeSpan) {
			pointer.amount = {};
		}
		pointer.lastUpdate = now;
		if (pointer.amount[id] === undefined) pointer.amount[id] = 0;
		pointer.amount[id] += amount;
	}

	get (id) {
		const {data, timeSpan} = this;
		const now = Date.now();

		let result = 0;

		data.forEach(({lastUpdate, amount}) => {
			if (lastUpdate - now > timeSpan) {
				if (amount[id]) result += amount;
			}
		});

		return result;
	}

}
