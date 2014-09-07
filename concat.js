var concat = require('concat-stream'),
	through = require('through');

process.stdin.pipe(concat(function (text) {
	var reversedText = text.toString().split('').reverse().join('');
	console.log(reversedText);
}));