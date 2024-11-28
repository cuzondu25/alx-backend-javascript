// Combining descriptions
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round and add two numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe("SUBTRACT", () => {
    it('should round and subtract two numbers correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', () => {
    it('should round and divide two numbers correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe('Unknown type', () => {
    it('should throw an error when an unknown type is used', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 2, 2), /Unknown type/);
    });
  });

});
