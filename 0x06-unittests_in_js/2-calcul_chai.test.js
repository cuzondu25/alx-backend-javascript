// Basic test using Chai assertion library
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should round and add two numbers correctly', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe("SUBTRACT", () => {
    it('should round and subtract two numbers correctly', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should round and divide two numbers correctly', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('Unknown type', () => {
    it('should throw an error when an unknown type is used', () => {
      expect(() => calculateNumber('MULTIPLY', 2, 2)).to.throw('Unknown type');
    });
  });

});

