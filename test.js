var assert = require('assert');
var five = require('./five.js');

assert.equal(5, five(), 'Five should give you five');
assert.notEqual(6, five(), 'Five should not give you not five');

assert.equal('⁵', five.upHigh(), 'An up high five should be a superscripted 5');
assert.equal('₅', five.downLow(), 'A down low five should be a subscripted 5');
assert.equal('V', five.roman(), 'A roman five should be a V');

assert.equal('خمسة', five.arabic(), 'A arabic five should be خمسة');
assert.equal('pět', five.czech(), 'A czech five should be pět');
assert.equal('Five', five.english(), 'A english five should be Five');
assert.equal('cinq', five.french(), 'A french five should be cinq');
assert.equal('fünf', five.german(), 'A german five should be fünf');
assert.equal('cúig', five.irish(), 'A irish five should be cúig');
assert.equal('таван', five.mongolian(), 'A mongolian five should be таван');
assert.equal('pięć', five.polish(), 'A polish five should be pięć');
assert.equal('fem', five.swedish(), 'A swedish five should be fem');
assert.equal('ห้า', five.thai(), 'A thai five should be ห้า');

var now = new Date().valueOf();
var slowFive = five.tooSlow();
var finishes = new Date().valueOf();

assert.equal(5, slowFive, 'A too slow five should still be five');
assert.ok((finishes - now) > 500, 'A too slow five should take longer than 500 milliseconds to be returned, blocking execution and generally being a bad idea');

process.exit(0);
