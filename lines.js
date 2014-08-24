var split = require('split'),
	through = require('through'),
	lineCount = 0;;

process.stdin.pipe(split()).pipe(through(function write(line) {
	lineCount++;
	if (lineCount % 2 == 0) {
		line = line.toUpperCase();
	} else {
		line = line.toLowerCase();
	}
	line += "\n";
	this.queue(line);
})).pipe(process.stdout);