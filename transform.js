var through = require('through');

process.stdin.pipe(through(function write(data) {
	this.queue(data.toString().toUpperCase());
})).pipe(process.stdout);