// Stubs
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should verify that calculateNumber was called once with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);

    // verify that calculateNumber was called once with the correct arguments
    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);

    // Verify that console.log was called with the correct message
    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 10');
  });
});
