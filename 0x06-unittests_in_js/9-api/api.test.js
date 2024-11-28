// Basic integration testing
const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('returns correct status code', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });

  it('returns correct results', (done) => {
    request(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    })
  });
});

describe('GET /not-found', () => {
  const url = 'http://localhost:7865/not-found';

  it('returns correct status code', (done) => {
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('returns the correct cart id', (done) => {
    const validId = 12;
    request(`${baseUrl}/${validId}`, (err, res, body) => {
      expect(body).to.equal(`Payment methods for cart ${validId}`);
      done();
    })
  });

  it('correct path/id not provided', (done) => {
    const invalidId = 'hello';
    request(`${baseUrl}/${invalidId}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    })
  })
})
