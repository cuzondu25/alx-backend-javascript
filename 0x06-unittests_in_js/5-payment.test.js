// Hooks
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should log the correct total and be called once for 100 and 20', () => {
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should log the correct total and be called once for 10 and 10', () => {
    calculateNumberStub.withArgs('SUM', 10, 10).returns(20);
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
  });

});

