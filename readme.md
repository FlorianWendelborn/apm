# apm

Actions per minute! Or any other time, actually.

## API

### default class APM ({accuracy = 1000, timeSpan = 60000})

````javascript
import APM from 'apm';

const apm = new APM({
	accuracy: 500,
	timeSpan: 30000
});

setInterval(() => {
	apm.add('example', 1);
}, 500);

setTimeout(() => {
	console.log(apm.get('example')); // 60
}, 30000);
````

### add (id, amount)

Adds `amount` to `id`.

### get (id)

Returns the APM (or per `timeSpan`) for `id`.