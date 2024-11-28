// Async tests with done
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenAPI', () => {
  it('should complete resolve to correct value', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch((err) => {
      done(err);
    });
  });
});
