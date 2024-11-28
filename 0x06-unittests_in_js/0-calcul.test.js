// Basic test with Mocha and Node assertion library
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of two numbers rounded', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.4, 2.6), 5);
    assert.strictEqual(calculateNumber(2.5, 3.4), 6);
    assert.strictEqual(calculateNumber(-1.4, 0.4), -1);
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
